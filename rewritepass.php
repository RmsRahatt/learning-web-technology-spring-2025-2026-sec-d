<?php
    $message = "";

    if(isset($_POST['submit'])){
        $curr_pass = $_REQUEST['curr_pass'];
        $new_pass = $_REQUEST['new_pass'];
        $retype_pass = $_REQUEST['retype_pass'];

      
        if($curr_pass == "" || $new_pass == "" || $retype_pass == ""){
            $message = "All fields are required!";
        } else {
          
            if($curr_pass == $new_pass){
                $message = "New Password should not be same as the Current Password.";
            } elseif($new_pass != $retype_pass){
                $message = "New Password must match with the Retyped Password.";
            } else {
               
                header("Location: pp.php");
                exit(); 
            }
        }
    }
?>

<!DOCTYPE html>
<html>
<head><title>Change Password</title></head>
<body>
    <fieldset style="width: 400px;">
        <legend><b>CHANGE PASSWORD</b></legend>
        
        <form action="" method="post">
            <table>
                <tr>
                    <td>Current Password</td>
                    <td>: <input type="password" name="curr_pass"/></td>
                </tr>
                <tr>
                    <td style="color:green;">New Password</td>
                    <td>: <input type="password" name="new_pass"/></td>
                </tr>
                <tr>
                    <td style="color:red;">Retype New Password</td>
                    <td>: <input type="password" name="retype_pass"/></td>
                </tr>
            </table>
            <hr>
            <input type="submit" name="submit" value="Submit"/>
        </form>
        
        <p style="font-weight:bold; color: red;">
            <?php 
                if(isset($message) && $message != ""){ 
                    echo $message; 
                } 
            ?>
        </p>

    </fieldset>
</body>
</html>