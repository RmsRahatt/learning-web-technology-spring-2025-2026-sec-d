<?php 
session_start(); 
if(!isset($_SESSION['user'])){
    header("Location: login.php");
}
?>
<html>
<body>
    <h2>Welcome <?php echo $_SESSION['user']; ?> to Dashboard</h2>
    <a href="user_list.php">View All Users</a> | 
    <a href="../controller/logout.php">Logout</a>
</body>
</html>