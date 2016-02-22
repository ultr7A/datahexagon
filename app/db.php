<?php
	// db.php
	//
	// required by the backend and almost all of the front end php files
	$connection = mysqli_connect("localhost", "user", "password", "data_spacehexagon");
	if (!$connection) {
    	echo 'Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error();
    }
?>
