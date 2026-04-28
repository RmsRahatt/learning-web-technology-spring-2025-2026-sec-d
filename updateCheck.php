<?php
    session_start();
    
    if(isset($_POST['submit'])){
        $id = $_POST['id'];
        $username = $_POST['username'];
        $email = $_POST['email'];

        if($username == "" || $email == ""){
            echo "Username or Email cannot be empty!";
        } else {
            $users = $_SESSION['users'];

            for($i = 0; $i < count($users); $i++) {
                if($users[$i]['id'] == $id) {
                    $users[$i]['username'] = $username;
                    $users[$i]['email'] = $email;
                    break; 
                }
            }

            $_SESSION['users'] = $users;

           
            header('location: ../view/user_list.php');
        }
    } else {
        echo "Invalid request! Please submit the form.";
    }
?>