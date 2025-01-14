<?php
// deleteProject.php
include 'config.php';

$id = $_POST['id'];

$stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
$stmt->execute([$id]);

echo "Project deleted successfully";
?>
