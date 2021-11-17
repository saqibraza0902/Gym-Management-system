<?php
require 'include/db_conn.php';

 
  $user_id=$_POST['user_id_auth'];
  $admin_name=$_POST['admin_name'];
  $password=$_POST['pass'];
  $con_pass=$_POST['confirmpass'];

//inserting into users table
$query="insert into admin(username,pass_key,securekey,Full_name) values('$user_id','$password','$con_pass','$admin_name')";
//$query="insert into admin(username,pass_key,securekey,Full_name) values('admin3','admin3','admin3','Saqib Raza')";
    if(mysqli_query($con,$query)==1){
     
     $msg="successfully added now login";   

        header('location:http://localhost/gym/');
    }
    else{
        $error="Failed to add";
        echo "failed";
    }
?>