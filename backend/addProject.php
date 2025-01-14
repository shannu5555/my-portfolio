<?php
// addProject.php
include 'config.php';

$title = $_POST['title'];
$description = $_POST['description'];
$image_url = $_POST['image_url'];
$link = $_POST['link'];

$stmt = $pdo->prepare("INSERT INTO projects (title, description, image_url, link) VALUES (?, ?, ?, ?)");
$stmt->execute([$title, $description, $image_url, $link]);

echo "Project added successfully";
?>
