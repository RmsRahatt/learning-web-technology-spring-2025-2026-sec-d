<?php
require_once('db.php');
$conn = getConnection();

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

$users = [];
while($row = mysqli_fetch_assoc($result)){
    array_push($users, $row);
}
echo json_encode($users);
?>