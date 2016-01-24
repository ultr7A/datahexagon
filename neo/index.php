<!DOCTYPE html>
<html>
    <head>
        <?php
            ini_set('display_errors', '1');
            error_reporting(E_ALL);
            $connection = mysqli_connect("db.example.com","user","pass","db");
            if (!$connection) {
                echo 'Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error();
            }
            $username = "";
            $user_id = -1;
            $serverMSG = "";
            if ($_SERVER["REQUEST_METHOD"] === 'POST') {
				if (isset($_POST["register"])) {
					$password =  password_hash($_POST["password"], PASSWORD_BCRYPT);
                    $user_data = '{"directories":[], "settings":{}}';
                    $user = mysqli_query($connection,"select * from `Users` where username = '" . $_POST["username"] . "';");
                    if (mysqli_num_rows($user) == 0) {
                        mysqli_query($connection,"insert into `Users` (username,password,email,user_data) values ('" .
                                     $_POST["username"] . "','" . $password . "','" . $_POST["email"] . "','" . $user_data . "');");
                        mkdir(getcwd()."/".strtolower($_POST["username"]), 0775);
						$text = "<h1>Welcome to Data Hexagon</h1>";
						$textFile = fopen(getcwd()."/".strtolower($_POST["username"]) . "/Welcome.htm", "w") or die("Unable to open file!");
						fwrite($textFile, $text);
						fclose($textFile);
                    }  else {    // else the user already exists:
                       $serverMSG = "Unfortunately the username entered is not available; please try another.";
                    }
				}

				if (isset($_POST["login"])) {
                    $user = mysqli_query($connection,"select * from `Users` where username = '" . $_POST["username"] . "';");
                    $user = mysqli_fetch_array($user);
                    if (password_verify($_POST["password"], $user["password"])) {
                        $username = $_POST["username"];
                        $user_id = $user["id"];
                    } else {
                        $serverMSG = "Incorrect Username Or Password.";
                    }
				}

            }
			mysqli_close($connection);
        ?>
        <title>Login | *Neo* DataHexagon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name='theme-color' content='rgb(40, 40, 40)'>
		<meta name="description" content="Open source, cloud desktop environment, dropbox and file sharing for all your devices." >
        <meta name="msapplication-TileColor" content="#282828">
        <meta name="msapplication-TileImage" content="/app/data/gradient-shadow-hexagon-white-192.png">
		<meta name="application-name" content="DataHexagon">
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	    <meta content="utf-8" http-equiv="encoding">
        <meta property="og:image" content="/app/data/gradient-shadow-hexagon-white-192.png" / >
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SpaceHexagon" />
        <meta name="twitter:title" content="DataHexagon" />
        <meta name="twitter:description" content="Open source, cloud desktop environment, dropbox and file sharing for all your devices." />
        <meta name="twitter:image" content="https://datahexagon.com/app/data/gradient-shadow-hexagon-white-192.png" />
        <link rel="icon" sizes="192x192" href="/app/data/gradient-shadow-hexagon-white-192.png">
        <link rel="stylesheet" href="/app/css/main.css" type="text/css" >
    </head>
    <body>
        <div class="formContainer">
            <h1>Data Hexagon</h1>
            <h2 class="title">Log in to upload, create and edit your documents or files.</h2>
    	<?php   if (strlen($serverMSG) > 0) {
                echo "<h2 class='server'>$serverMSG</h2>";
            }
		?>
            <input type='button' value='Sign In' id='show-signin'>
            <input type='button' value='Register' id='show-register'>
             <form action="/home/?" method="POST" id='signin-form' class='hidden'>
              	<input type="hidden" name="login" value="1" />
                 <div class='auth_field'>
                     <span class='label'>User Name:</span><input name="username" autofocus type="text" />
                 </div>
                 <div class='auth_field'>
                     <span class='label'>Password:</span><input name="password" type='password' value="" />
                 </div>
                 <input type='submit' value='Go'/>
			</form>
            <form action="/home/?" method="POST" id='register-form' class='hidden'>
               <input type="hidden" name="register" value="1" />
                <div class='auth_field'>
                    <span class='label'>Email:</span> <input name="email" type='text' value="" />
                </div>
                <div class='auth_field'>
                    <span class='label'>User Name:</span> <input name="username" type="text" />
                </div>
                <div class='auth_field'>
                    <span class='label'>Password:</span> <input name="password" type='password' value="" />
                </div>
                <input type='submit' value='Go'/>
            </form>
		</div>
        <script src="/app/lib/three.js"></script>
        <script src="/app/lib/socket.io/socket.io.js"></script>
        <script src="/app/js/ui.js"></script>
        <script src="/app/js/main.js"></script>
        <script src="/app/js/applet.js"></script>
         <?php if ($username != "") { ?>
        <script>
            app.user.name = "<?php echo $username; ?>";
            app.user.id = <?php echo $user_id; ?>;
            document.addEventListener("DOMContentLoaded", function () {
				openFolder("/"+app.user.name.toLowerCase());
			});
        </script>
		<?php } ?>
    </body>
</html>
