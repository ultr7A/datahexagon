<?php
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
		if (isset($_POST["path"])) {
			if (strpos($_POST["path"], "/" . strtolower($username)) !== 0) {
            	mysqli_close($connection);
            	die();
        	}
		}
        switch ($_POST["operation"]) {
            case "list":
                $shares = mysqli_query($connection, "select * from `Shares` where username = '" . $_POST["username"] . "';");
            break;
            case "read":
                $shares = mysqli_query($connection, "select * from `Shares` where id = " . $_POST["id"] . ";");
            break;
            case "update":
				if (mysqli_num_rows(mysqli_query($connection, "select * from `Shares` where directory = '".$_POST["path"]."';")) < 1) {
					mysqli_query($connection, "insert into `Shares` (username, directory, users, passphrase, public, data) values('"
                                          . $_POST["username"] . "', '".$_POST["path"]."', '".$_POST["users"]."', '".$_POST["passphrase"]."', '".$_POST["public"]."', '{}');");
				} else {
					mysqli_query($connection, "update `Shares` set directory='".$_POST["path"]."', '".$_POST["users"]."', passphrase='".$_POST["passphrase"]
                                          ."', public=".$_POST["public"].", data='{}') where directory = '".$_POST["path"]."';");
				}
            break;
            case "delete":
				mysqli_query($connection, "delete from `Shares` where directory = '".$_POST["path"]."';");
            break;
            default:
            break;
        }
		if ($_POST["operation"] == "list" || $_POST["operation"] == "read") {
			$allShares = array();
            while ($share = mysqli_fetch_array($shares, MYSQLI_ASSOC)) {
				array_push($allShares, $share);
			}
			echo json_encode($allShares);
		}
    }
    mysqli_close($connection);
}
?>
