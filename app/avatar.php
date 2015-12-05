<?php
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);
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


    mysqli_close($connection);
}
?>
