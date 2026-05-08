<?php
require_once('db.php');
$userData = json_decode($_POST['user']);
$conn = getConnection();

$id = $userData->id;
$sql = "DELETE FROM users WHERE id='{$id}'";

if(mysqli_query($conn, $sql)){
    echo json_encode(['message' => 'Deleted Successfully!']);
} else {
    echo json_encode(['message' => 'Delete Failed!']);
}
?>