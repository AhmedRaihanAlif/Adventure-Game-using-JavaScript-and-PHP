<!DOCTYPE html>
<html>
<style>
body {font-family: Arial, Helvetica, sans-serif;
background-color:#02383C}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: brown;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
 
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
     

  }
}
</style>
<body>
<?php

if(isset($_POST['submit'])){


      require_once("dbconnect.php");
      $connect = mysqli_connect( HOST, USER, PASS, DB )
          or die("Can not connect");

  $email = mysqli_real_escape_string($connect,$_REQUEST["email"]);
  $psw =   mysqli_real_escape_string($connect,$_REQUEST["psw"]);
  $username = mysqli_real_escape_string($connect,$_REQUEST["username"]);
 

          $query="INSERT INTO `uiuexpresslogin` (`id`, `email`,`username`,`password`) VALUES (NULL, '$email', '$username','$psw' );";
          $quer="INSERT INTO `uiuexpress` (`id`,`username`,`attempt`,`time`) VALUES (NULL, '$username', 0,25-08-2000 );";
          
      $result=mysqli_query($connect,$query);
      $resul=mysqli_query($connect,$quer);

      if(!$result){
          die("Not Inserted".mysqli_error($connect));
      }
      else{
          header("location: login.php?Inserted");
      }

      if(!$resul){
        die("Not Inserted".mysqli_error($connect));
    }
    else{
        header("location: login.php?Inserted");
    }
      }
?>
<center>
<form style="width:900px;" action="" style="border:1px solid #ccc" method="post" >
  <div class="container">
    <h1 style="color:white">Sign Up</h1>
    <p style="color:white" >Please fill in this form to create an account.</p>
    <hr>

    <label  style="color:white"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label style="color:white" ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

   

    <label style="color:white"><b>UserName</b></label>
    <input type="text" placeholder="Enter Username" name="username" required>

    <label>
      <input  style="color:white" type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>
    
    <p style="color:white" >By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button style="background-color:brown" type="button" class="cancelbtn">Cancel</button>
      <button style="background-color:green" type="submit" class="signupbtn" name="submit" >Sign Up</button>
    </div>
  </div>
</form>
</center>

</body>
</html>
