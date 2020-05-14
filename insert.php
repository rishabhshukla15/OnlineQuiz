<?php 

include("connection.php");
$question = $_POST['q'];
$option1 = $_POST['o1'];
$option2 = $_POST['o2'];
$option3 = $_POST['o3'];
$option4 = $_POST['o4'];
$answer = $_POST['a'];
$flag = 1;
if($question == '' || $option1 == '' || $option2 == '' || $option3 == '' ||$option4 == '' || $answer == ''){
    $flag = 0;
}

$sql = "INSERT INTO q_and_a (question,option1,option2,option3,option4,answer) VALUES('$question','$option1','$option2','$option3','$option4','$answer')";

if(mysqli_query($conn,$sql) && $flag==1){
    echo 'Data Inserted successfully';
}
else{
    echo 'Data Not Inserted';
}

header("refresh:2 url=Add_Ques.html");
?>