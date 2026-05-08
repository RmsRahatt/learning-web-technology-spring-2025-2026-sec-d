<?php
session_start();
require_once('db.php');
$userData = json_decode($_POST['user']);
$conn = getConnection();

$username = $userData->username;
$password = $userData->password;

$sql = "SELECT * FROM users WHERE username='{$username}' AND password='{$password}'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
    $_SESSION['user'] = $username;
    echo json_encode(['status' => 'success', 'message' => 'Login success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid Username or Password']);
}
?>