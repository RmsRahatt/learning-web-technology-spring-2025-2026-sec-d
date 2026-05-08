<?php
function getConnection() {
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "";
    $db_name = "user_mgt";

    $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
    if(!$conn) die("Connection failed: " . mysqli_connect_error());
    return $conn;
}
?>