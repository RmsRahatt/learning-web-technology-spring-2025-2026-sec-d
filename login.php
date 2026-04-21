<?php
    $message = "";
    
    if(isset($_POST['submit'])){
        $username = $_REQUEST['username'];
        $password = $_REQUEST['password'];

        if($username == "" || $password == ""){
            $message = "Username and Password cannot be empty!";
        } else {
        
            $invalid_count = 0;
            for($i = 0; $i < strlen($username); $i++){
                $char = $username[$i];
    
                if(
                    !($char >= 'a' && $char <= 'z') && 
                    !($char >= 'A' && $char <= 'Z') && 
                    !($char >= '0' && $char <= '9') && 
                    $char != '.' && 
                    $char != '-' && 
                    $char != '_'
                ){
                    $invalid_count++;
                }
            }

        
            $char_count = 0;
            for($i = 0; $i < strlen($password); $i++){
                $char = $password[$i];
                
                if($char == '@' || $char == '#' || $char == '$' || $char == '%'){
                    $char_count++;
                }
            }

            if(strlen($username) < 2){
                $message = "User Name must contain at least 2 characters.";
            } elseif($invalid_count > 0){
                $message = "User Name can contain only alpha numeric characters, period, dash or underscore.";
            } elseif(strlen($password) < 8){
                $message = "Password must contain at least 8 characters.";
            } elseif($char_count == 0){
                $message = "Password must contain at least one special character (@, #, $, %).";
            } else {
                header("Location: rewritepass.php");
                exit();
            }
        }
    }
?>

<!DOCTYPE html>
<html>
<head><title>Login</title></head>
<body>
    <fieldset style="width: 350px;">
        <legend>LOGIN</legend>
        <form action="" method="post">
            User Name: <input type="text" name="username" value="<?php if(isset($username)){echo $username;}?>"/> <br><br>
            Password : <input type="password" name="password" value="<?php if(isset($password)){echo $password;}?>"/> <br><br>
            <input type="checkbox" name="remember"> Remember Me <br><br>
            <input type="submit" name="submit" value="Submit"/>
            <a href="#">Forgot Password?</a>
        </form>
        
        <p style="color:red; font-weight:bold;">
            <?php 
                if(isset($message) && $message != ""){ 
                    echo $message; 
                } 
            ?>
        </p>
    </fieldset>
</body>
</html>