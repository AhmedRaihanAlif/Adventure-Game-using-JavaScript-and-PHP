<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="helpwoman.css">

</head>
<body class="body">
<?php
$username=$_GET['username'];
echo $username;
if(isset($_POST['submit'])){
  $username=$_GET['username'];
  $url="home.php?username=".$username;
header('location: '.$url);
}

?>
  <center>
    <h1 style="color:greenyellow;">Time Up</h1>
  </center>
   
    <p id="demo">  </p>
    <script>
        
        // Set the date we're counting down to
     var countDownDate = new Date("Sept 15, 2022 15:37:25").getTime();
     
     // Update the count down every 1 second
     var x = setInterval(function() {
     
       // Get today's date and time
       var now = new Date().getTime();
         
       // Find the distance between now and the count down date
       var distance = countDownDate - now;
         
       // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
       // Output the result in an element with id="demo"
       document.getElementById("demo").innerHTML = days + "d " + hours + "h "
       + minutes + "m " + seconds + "s ";
         
       // If the count down is over, write some text 
       if (distance < 0) {
         clearInterval(x);
         document.getElementById("demo").innerHTML = "EXPIRED";
       }
     }, 1000);
        </script>
    <div  id="myDIV">
        <center><h2 id="borderimg1">   
           You have lost 3 Minutes  <br>
         If you choose bike it can be help you to reach in time..<br>

        So you are late to reach the class in time.....
      
        
        </h2></center>
        
        

       
    
</div>
 
<div class="container">
      
       
    <div class ="item1" style="margin-left: 500px;" >

        <div class="card">
            <img src="uiuFile/r_y_y_1_1_1.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">You are late....</h1>
           
            <form method="post" action="">
                <button type="submit" name="submit" class="button">Finish</button>
            </form>
          </div>
          
            </div>





    </div>
        
           

         
                
                    </div>
    
</body>
</html>