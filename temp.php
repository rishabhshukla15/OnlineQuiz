<?php 
include('connection.php');
$result = mysqli_query($conn,"select * from q_and_a");
$data = array();

while($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}
echo json_encode($data);
?>
