<?php
require_once('db.php');
$userData = json_decode($_POST['user']);
$conn = getConnection();

$username = $userData->username;
$email = $userData->email;
$password = $userData->password;

$sql = "INSERT INTO users (username, email, password) VALUES ('{$username}', '{$email}', '{$password}')";

if(mysqli_query($conn, $sql)){
    echo json_encode(['message' => 'Signup Successful!']);
} else {
    echo json_encode(['message' => 'Error in signup!']);
}
?>