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
  $url="handover.php?username=".$username;
header('location: '.$url);
}
if(isset($_POST['submit2'])){
  $username=$_GET['username'];
  $url="handover.php?username=".$username;
header('location: '.$url);
}
?>
   
  <center>
   <h1 style="color:red;">Your Time Start Now</h1>
 </center>
    
    
    
 


    <div  id="myDIV">
        <center>
          <h2 id="borderimg1" style="color: black;">
            No Way to go in time for this traffic<br>
            Hopefully it's a nice choice to get down <br>
            Now which one will you choose??<br>

          </h2>
        
          <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
            No Way to go in time for this traffic
            Hopefully it's a nice choice to get down 
            Now which one will you choose??
        </textarea>
      <!-- <select style="background-color:skyblue ; margin-left: 10px;" id="voiceselection"></select> -->
          <input class="button" style="background-color:blueviolet;padding: 10px; font-style:inherit;border-radius: 8px;margin-right: 5vh;"
          onclick="responsiveVoice.speak($('#text').val(),$('#voiceselection').val());" 
          type="button" 
          value="Listen Text" 
        />

        
        
        </center>
        

       
   
</div>
 
    <div class="container">
      
       
        <div class ="item1" style="margin-left:250px;">

            <div class="card" >
                <img src="uiuFile/11.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
                <h1 class="rickshaw">Rickshaw</h1>
                <form method="post" action="">
                                    <button style="width: 85%;" class="glow-on-hover" type="submit" name="submit" class="button">PICK</button>
                                         </form>

              </div>
              
                </div>

    
    <div class ="item2" style="margin-right:250px;">
   
        <div class="card">
            <img src="uiuFile/13.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">Bike</h1>
            
            <form method="post" action="">
                                    <button style="width: 85%;" class="glow-on-hover" type="submit" name="submit2" class="button">PICK</button>
                                         </form>

          </div>
    
        </div>
        
           

         
                
                    </div>
                    <script src="https://code.responsivevoice.org/responsivevoice.js?key=mYCG5FUs"></script>

                    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
                    <script src="text2speech.js"></script>

                  
    
</body>
</html>