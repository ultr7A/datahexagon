<?php
//ini_set('display_startup_errors',1);
//ini_set('display_errors',1);
//error_reporting(-1);

function thumbnail ($location, $file, $tmp_name) {
	if (!isset($tmp_name)) {
		$tmp_name = $file;
	}
	if (preg_match("/jpg|jpeg|png/i", $file)) {
		$thumb_path = array($location . "DHThumbs/" . $file . ".jpg",
							$location . "DHThumbs/1024/" . $file . ".jpg");
		if (!file_exists($thumb_path[0]) || !file_exists($thumb_path[1])) {
			if (preg_match("/\.png/i", $file)) {
				$img = imagecreatefrompng($tmp_name);
			} else if (preg_match("/\.gif/i", $file)) {
				$img = imagecreatefromgif($tmp_name);
			} else {
				$img = imagecreatefromjpeg($tmp_name);
			}
			if (!file_exists($location . "DHThumbs")) {
				mkdir($location . "DHThumbs", 0775);
			}
			if (!file_exists($location . "DHThumbs" . "/1024")) {
				mkdir($location . "DHThumbs" . "/1024", 0775);
			}
			$width = imagesx($img);
			$height = imagesy($img);
			$mode = 1;
			while ($mode < 3) {
				if (!file_exists($thumb_path[$mode -1])) {
					$tmp_img = imagecreatetruecolor($mode * 512, $mode * 512);  // create a new temporary image
					if ($width > $height) {
						imagecopyresized($tmp_img, $img, 0, 0, 0, 0, 512 * $mode, 512 * $mode, $height, $height);
					} else {
						imagecopyresized($tmp_img, $img, 0, 0, 0, 0, 512 * $mode, 512 * $mode, $width, $width);
					}
					imagejpeg($tmp_img, $thumb_path[$mode -1], 80); // save thumbnail into a file
				}
				$mode ++;
			}
		}
	}
}

if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    require("db.php");
    $username  = "";
    $user_id   = -1;
    $serverMSG = "";
    $user      = mysqli_query($connection, "select * from `Users` where username = '" . $_POST["username"] . "';");
    $user      = mysqli_fetch_array($user);
    if (password_verify($_POST["password"], $user["password"])) {
        $username = $_POST["username"];
        $user_id  = $user["id"];
		$cwd = getcwd();
        if (strpos($_POST["path"], "/" . strtolower($username)) !== 0) {
            mysqli_close($connection);
            die();
        }
        switch ($_POST["dataOperation"]) {
            case "ls":
				$location = $cwd . "/.." . $_POST["path"];
				if (strtolower($location) == strtolower($cwd . "/../" . ($username)) && !file_exists($location)) {
					mkdir($location, 0775);
				} else {
					$files = scandir($location);
					$location .= "/";
					array_splice($files, 0, 1);
					$results = array();
					foreach ($files as $file) {
						$results[] = array("name"=>$file, "modified"=>filemtime($location . $file));
					}
					echo json_encode($results, true);
                    foreach ($files as $file) {
						@thumbnail($location, $file, $location . $file);
					}
				}
                break;
            case "upload":
            	$location     = $cwd . "/.." . $_POST["path"] . "/";
				foreach ($_FILES as $index => $file) {
                    $fileName     = $file['name'];
                    $fileTempName = $file['tmp_name'];
                    @thumbnail($location, $fileName, $fileTempName);
                    move_uploaded_file($fileTempName, $location . $fileName);
                }
                break;
            case "touch":
                $text = $_POST["text"];
				$textFile = fopen($cwd . "/.." . $_POST["path"], "w") or die("Unable to open file!");
				fwrite($textFile, $text);
				fclose($textFile);
            	break;
            case "mkdir":
                echo "mkdir " . $cwd . "/.." . $_POST["path"];
                mkdir($cwd . "/.." . $_POST["path"], 0775);
                break;
            case "mv":

                break;
            case "rm":
				$dir = $cwd . "/.." . $_POST["path"];
				if (is_dir($dir)) {
					rmdir($dir);
				} else {
					unlink($dir);
				}
                break;
            default:

                break;
        }
    }
    mysqli_close($connection);
}
?>
