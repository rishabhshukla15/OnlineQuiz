<?php
$servername = "127.0.0.1:3306";
$username = "root";
$password = "";
$dbname = "quizz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  echo("Connection failed: " . $conn->connect_error);
}
?>



