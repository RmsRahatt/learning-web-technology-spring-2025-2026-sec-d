<?php $id = isset($_GET['id']) ? $_GET['id'] : ''; ?>
<html>
<body>
    <h2>Delete User</h2>
    <p>Are you sure you want to delete this user?</p>
    <input type="button" value="Yes, Delete" onclick="ajaxDelete('<?php echo $id; ?>')">
    <a href="user_list.php"><button>Cancel</button></a>
    <p id="msg" style="color:red;"></p>
    
    <script src="../asset/script.js"></script>
</body>
</html>