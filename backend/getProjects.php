<?php
// getProjects.php
include 'config.php';

$stmt = $pdo->prepare("SELECT * FROM projects");
$stmt->execute();
$projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($projects);
?>
