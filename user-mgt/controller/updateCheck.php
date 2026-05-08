<?php
require_once('db.php');
$userData = json_decode($_POST['user']);
$conn = getConnection();

$id = $userData->id;
$username = $userData->username;
$email = $userData->email;

$sql = "UPDATE users SET username='{$username}', email='{$email}' WHERE id='{$id}'";

if(mysqli_query($conn, $sql)){
    echo json_encode(['message' => 'Updated Successfully!']);
} else {
    echo json_encode(['message' => 'Update Failed!']);
}
?>