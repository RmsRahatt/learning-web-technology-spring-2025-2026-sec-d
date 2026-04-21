<?php
    $message = "";

    if(isset($_POST['submit'])){
        
        $file_name = $_FILES['profile_pic']['name'];
        $file_size = $_FILES['profile_pic']['size'];
        $file_type = $_FILES['profile_pic']['type']; 

       
        if($file_name == ""){
            $message = "Please choose a file first!";
        } else {
            
           
            if($file_type != "image/jpeg" && $file_type != "image/jpg" && $file_type != "image/png"){
                $message = "Picture format must be in jpeg or jpg or png.";
            } 
          
            elseif($file_size > 4194304){
                $message = "Picture size should not be more than 4MB.";
            } 
            else {
                
                header("Location: registration.php");
                exit();
            }
        }
    }
?>

<!DOCTYPE html>
<html>
<head><title>Profile Picture</title></head>
<body>
    <fieldset style="width: 350px;">
        <legend><b>PROFILE PICTURE</b></legend>
        
        <form action="" method="post" enctype="multipart/form-data">
            
            <div style="width:120px; height:120px; border:1px solid #ccc; text-align:center; padding-top:40px; margin-bottom:10px;">
                👤 <br> <i>Image Area</i>
            </div>
            
            <input type="file" name="profile_pic"/> <br>
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