<!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
      .alertdanger {
        padding: 20px;
        background-color: #f44336;
        color: white;
        display: none;
      }
      
      .alertsuccess {
        padding: 20px;
        background-color: green;
        color: white;
        display: none;
      }
      
      .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
      }
      
      .closebtn:hover {
        color: black;
      }
      </style>
      </head>
      <body>
      <div  id="failed" class="alertdanger">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
      </div>
      <div id=success class="alertsuccess">
          <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
          <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
        </div>
        <script>
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
}
</script>
      
 
      </body>
</html>
<?php

require '../../include/db_conn.php';
//const myNotification = window.createNotification({});

page_protect();



 $memID=$_POST['m_id'];
 $uname=$_POST['u_name'];
 $stname=$_POST['street_name'];
 $city=$_POST['city'];
 $zipcode=$_POST['zipcode'];
 $state=$_POST['state'];
 $gender=$_POST['gender'];
 $dob=$_POST['dob'];
 $phn=$_POST['mobile'];
 $email=$_POST['email'];
 $jdate=$_POST['jdate'];
 $plan=$_POST['plan'];

//inserting into users table
$query="insert into users(username,gender,mobile,email,dob,joining_date,userid) values('$uname','$gender','$phn','$email','$dob','$jdate','$memID')";
    if(mysqli_query($con,$query)==1){
      //Retrieve information of plan selected by user
      $query1="select * from plan where pid='$plan'";
      $result=mysqli_query($con,$query1);

        if($result){
          $value=mysqli_fetch_row($result);
          date_default_timezone_set("Asia/Calcutta"); 
          $d=strtotime("+".$value[3]." Months");
          $cdate=date("Y-m-d"); //current date
          $expiredate=date("Y-m-d",$d); //adding validity retrieve from plan to current date
          //inserting into enrolls_to table of corresponding userid
          $query2="insert into enrolls_to(pid,uid,paid_date,expire,renewal) values('$plan','$memID','$cdate','$expiredate','yes')";
          if(mysqli_query($con,$query2)==1){

            $query4="insert into health_status(uid) values('$memID')";
            if(mysqli_query($con,$query4)==1){

              $query5="insert into address(id,streetName,state,city,zipcode) values('$memID','$stname','$state','$city','$zipcode')";
              if(mysqli_query($con,$query5)==1){
               echo "<head><script>myfunction('success');</script></head></html>";
               echo "<meta http-equiv='refresh' content='0; url=new_entry.php'>";
              }
              else{
                  echo "<head><script>myfunction('failed');</script></head></html>";
                 echo "error: ".mysqli_error($con);
                 //Deleting record of users if inserting to enrolls_to table failed to execute
                 $query3 = "DELETE FROM users WHERE userid='$memID'";
                 mysqli_query($con,$query3);
              }
            }
             
            else{
               echo "<head><script>myfunction('failed');;</script></head></html>";
              echo "error: ".mysqli_error($con);
               //Deleting record of users if inserting to enrolls_to table failed to execute
                $query3 = "DELETE FROM users WHERE userid='$memID'";
                mysqli_query($con,$query3);
            }
            
          }
          else{
            echo "<head><script>myfunction('failed');</script></head></html>";
            echo "error: ".mysqli_error($con);
            //Deleting record of users if inserting to enrolls_to table failed to execute
             $query3 = "DELETE FROM users WHERE userid='$memID'";
             mysqli_query($con,$query3);
          }

         
        }
        else
        {
          echo "<head><script>myfunction('failed');</script></head></html>";
          echo "error: ".mysqli_error($con);
           //Deleting record of users if retrieving inf of plan failed
          $query3 = "DELETE FROM users WHERE userid='$memID'";
          mysqli_query($con,$query3);
        }

    }
    else{
        echo "<head><script>myfunction('failed');</script></head></html>";
        echo "error: ".mysqli_error($con);
      }
?>
 