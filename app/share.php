<?php
   if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    $connection = mysqli_connect("db.example.com","user","pass","db");
    if (!$connection) {
        echo 'Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error();
    }
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
            case "create":
				mysqli_query($connection, "insert into `Shares` (username, directory, passphrase, public, data) values('"
                                          . $_POST["username"] . "', '".$_POST["path"]."', '".$_POST["passphrase"]."', false, '{}');");
            break;
            case "read":
                $shares = mysqli_query($connection, "select * from `Shares` where username = '" . $_POST["username"] . "';");
                echo json_encode($shares);
            break;
            case "update":
				mysqli_query($connection, "update `Shares` set username='".$_POST["username"]."', directory='".$_POST["path"]."', passphrase='".$_POST["passphrase"]
                                          ."', public=false, data='{}') where directory = '".$_POST["path"]."';");
            break;
            case "delete":
				$shares = mysqli_query($connection, "delete from `Shares` where directory = '".$_POST["path"]."';");
            break;
            default:
            break;
        }
    }
    mysqli_close($connection);
}
?>
