<?php

header("Acess-Control-Allow-Methods: POST");
header("Content-type? application/json; charset=UTF-8");
header("Acess-Control-Allow-Headers: Content-Type, Acess-Contorl-Allow-Headers, Authorization, X-Requested-With");

$con = mysql_connect("Localhost" ,  "root" , "");
mysql_select_db($con , "anima_se");

$data = json_decode(file_get_contents("php://input"));

$email = data->email;
$senha = data->senha;

$result = mysqli_query($con , "SELECT * FROM tb_usuario WHERE email = '".$email."' AND senha  = '".$senha."'");

$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);



if($nums >= 1 ) {

    $outp = "";

    $outp .= '{"email": "' . $rs["email"] . '", ';
    $outp .= '"Status":"200"} ';


} else {
    http_response_code(202);
}



?>
