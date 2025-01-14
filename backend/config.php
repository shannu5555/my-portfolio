<?php
// config.php
$host = 'localhost';  // Use the right host, for local development it's 'localhost'
$dbname = 'portfolio_db';  // Replace with your database name
$user = 'root';  // Replace with your MySQL user
$pass = '';  // Replace with your MySQL password if necessary

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
