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

if(isset($_POST['submit'])){
  $username=$_GET['username'];
  $url="handover.php?username=".$username;
header('location: '.$url);
}

?>
  <center>
    <h1 style="color:red;">Time Left</h1>
  </center>
    <p id="demo"> </p>
   
 <script src="timer.js"></script>
   
    <div  id="myDIV">
        <center><h2 id="borderimg1" style="color:black;"> Again Late<br>  
          what will you do??<br>  
           <br>
        
    
        </h2>
        <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
          Again Late
          what will you do  </textarea>
              <!-- <select style="background-color:skyblue ; margin-left: 10px;" id="voiceselection"></select> -->
                  <input class="button" style="background-color:blueviolet;padding: 10px; font-style:inherit;border-radius: 8px;margin-right: 5vh;"
                  onclick="responsiveVoice.speak($('#text').val(),$('#voiceselection').val());" 
                  type="button" 
                  value="Listen Text" 
                />
          
                <script src="https://code.responsivevoice.org/responsivevoice.js?key=mYCG5FUs"></script>
          
                <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
                <script>var voicelist = responsiveVoice.getVoices();
                  var vselect = $("#voiceselection");
                  $.each(voicelist, function() {
                  vselect.append($("<option />").val(this.name).text(this.name));
                  });</script>
      
        
        

       
    
</div>
 
<div class="container">
      
       
    <div class ="item1" style="margin-left: 150px;">

        <div class="card">
            <img src="uiuFile/search.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 style="margin-top: 30px;" class="rickshaw">Search My Friend</h1>
           
            <form method="post" action="">
  <button style="width: 85%;" class="glow-on-hover" type="submit" name="submit" class="button">PICK</button>
                                         </form>
          </div>
          
            </div>


<div class ="item2" style="margin-right: 150px;">

    <div class="card">
        <img src="uiuFile/late_class.png" alt="Denim Jeans" style="width:85%;height: 50vh;">
        <h1 style="margin-top: 30px;" class="rickshaw">Move to Class</h1>
        
        <form action="congratulations.html">
      <button style="width: 85%;" class="glow-on-hover" type="submit" name="submit2" class="button">PICK</button>
                                         </form>
      </div>

    </div>
    </div>
        
           

         
    </center>     
                    </div>
    
</body>
</html>