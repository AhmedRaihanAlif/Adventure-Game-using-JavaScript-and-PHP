<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="uiu.css">

</head>
<body class="body">
<?php

$username=$_GET['username'];
echo $username;

if(isset($_POST['submit'])){
  $username=$_GET['username'];
  $url="rick.php?username=".$username;
header('location: '.$url);
}
if(isset($_POST['submit2'])){
  $username=$_GET['username'];
  $url="bus.php?username=".$username;
header('location: '.$url);
}
if(isset($_POST['submit3'])){
  $username=$_GET['username'];
  $url="snacksno.php?username=".$username;
header('location: '.$url);
}


?>
   
  <center>
   <h1 style="color:red;">Your Time Start Now</h1>
 </center>
    
    
   <!-- <p id="demo"> </p> -->
    
    <script src="timer.js"></script>
 


    <div  id="myDIV">
        <center>
          <h2 id="borderimg1" style="color: black;">Opps !!There is a huge traffic @100 feet road.<br>
            You will go to university within a short time.<br>
            Which vehicle should you choose to go to  university ASAP??

          </h2>
        
          
          <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
            Opps !!There is a huge traffic @100 feet road.You will go to university within a short time.Which vehicle should you choose to go to  university ASAP??
        </textarea>
        
      <!-- <select style="background-color:skyblue ; margin-left: 10px;" id="voiceselection"></select> -->
          <input  onmouseover="bigImg(this)" onmouseout="normalImg(this)"  class="button" style="background-color:blueviolet;padding: 10px; font-style:inherit;border-radius: 8px;margin-right: 5vh;"
          onclick="responsiveVoice.speak($('#text').val(),$('#voiceselection').val());" 
          type="button" 
          value="Listen Text" 
        />


        <script>
          function bigImg(x) {
            x.style.height = "70px";
            x.style.width = "150px";
          }
          
          function normalImg(x) {
            x.style.height = "50px";
            x.style.width = "140px";
          }
          </script>
        <script src="https://code.responsivevoice.org/responsivevoice.js?key=mYCG5FUs"></script>

        <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script>var voicelist = responsiveVoice.getVoices();
          var vselect = $("#voiceselection");
          $.each(voicelist, function() {
          vselect.append($("<option />").val(this.name).text(this.name));
          });</script>

        
        
        </center>
        

       
   
</div>

    <div class="container">
      
       
        <div class ="item1">

            <div class="card">
                <img src="uiuFile/11.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
                <h1 id="rick"  class="rickshaw">Rickshaw</h1>
               
                <form method="post" action="">
                <button id="b1" class="glow-on-hover" class="button"  onmouseover="myFunction()" onmouseout="myFunction2()" type="submit" name="submit" class="button">PLAY</button>

                </form>
              </div>
              
                </div>

    
    <div class ="item2">
   
        <div class="card">
            <img src="uiuFile/12.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 id="bus" class="rickshaw">Bus</h1>
            
            <form method="post" action="">
                <button id="b1" class="glow-on-hover" class="button"  onmouseover="myFunction()" onmouseout="myFunction2()" type="submit" name="submit2" class="button">PLAY</button>

                </form>
          </div>
    
        </div>
        
           

            <div class ="item3">
                <div class="card">
                    <img src="uiuFile/13.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
                    <h1 id="bike"  class="rickshaw">MotorCycle</h1>
                    
                    <form method="post" action="">
                <button id="b1" class="glow-on-hover" class="button"  onmouseover="myFunction()" onmouseout="myFunction2()" type="submit" name="submit3" class="button">PLAY</button>

                </form>
                  </div>
                           
           </div>
                
                    </div>
                    <script>
                      function myFunction() {
  document.getElementById("rick").style.color = "#ff0000";
  document.getElementById("bus").style.color = "magenta";
  document.getElementById("bike").style.color = "orange";
  
}

function myFunction2() {
  document.getElementById("rick").style.color = "white";
  document.getElementById("bus").style.color = "white";
  document.getElementById("bike").style.color = "white";
  
}
function myFunction2() {
  document.getElementById("rick").style.color = "white";
  document.getElementById("bus").style.color = "white";
  document.getElementById("bike").style.color = "white";
  
}
                    </script>
                    <script src="https://code.responsivevoice.org/responsivevoice.js?key=mYCG5FUs"></script>

                    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
                    <script>var voicelist = responsiveVoice.getVoices();
                      var vselect = $("#voiceselection");
                      $.each(voicelist, function() {
                      vselect.append($("<option />").val(this.name).text(this.name));
                      });</script>

                  
    
</body>
</html>