<?php $id = isset($_GET['id']) ? $_GET['id'] : ''; ?>
<html>
<body>
    <h2>Edit User</h2>
    <input type="hidden" id="userId" value="<?php echo $id; ?>">
    New Username: <input type="text" id="username"><br><br>
    New Email: <input type="email" id="email"><br><br>
    <input type="button" value="Update" onclick="ajaxUpdate()">
    <p id="msg" style="color:green;"></p>
    <a href="user_list.php">Back to List</a>
    
    <script src="../asset/script.js"></script>
</body>
</html>