<?php
    session_start();
    
    // isset দিয়ে চেক করছি ফর্ম সাবমিট হয়েছে কি না
    if(isset($_POST['submit'])){
        $id = $_POST['id'];
        $username = $_POST['username'];
        $email = $_POST['email'];

        // validation: ফাঁকা থাকতে পারবে না
        if($username == "" || $email == ""){
            echo "Username or Email cannot be empty!";
        } else {
            // সেশন থেকে current user array টা নিলাম
            $users = $_SESSION['users'];

            // লুপ চালিয়ে চেক করছি কোন user এর id টা ম্যাচ করে
            for($i = 0; $i < count($users); $i++) {
                if($users[$i]['id'] == $id) {
                    // id ম্যাচ করলে array এর ওই index এ নতুন ডাটা বসিয়ে দিচ্ছি
                    $users[$i]['username'] = $username;
                    $users[$i]['email'] = $email;
                    break; // আপডেট করা শেষ, তাই লুপ থেকে বের হয়ে গেলাম
                }
            }

            // আপডেট করা array টা আবার সেশনে সেভ করে দিলাম
            $_SESSION['users'] = $users;

            // সব ঠিক থাকলে আবার user_list.php তে পাঠিয়ে দিচ্ছি (যেহেতু একই ফোল্ডার তাই পাথ লাগবেনা)
            header('location: user_list.php');
        }
    } else {
        echo "Invalid request! Please submit the form.";
    }
?>