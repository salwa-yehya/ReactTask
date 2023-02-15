<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json;");

$server = "localhost";
$userName = "root";
$password = "";
$con = mysqli_connect($server , $userName , $password , "reactphp");



?>
