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
     //  $press=4;
      
      // $username=$_GET['username'];
      

       if(isset($_REQUEST['submit'])){
        $username=$_GET['username'];
       
       
        require_once('dbconnect.php');
		

      $update_query="UPDATE uiuexpress SET attempt = attempt+1 where username='$username';";

    $result = mysqli_query($connect,$update_query);
   
    if($result){
    header("location:home.php?updated");
}


      }
     
       
      
   
  ?>
  <center>
    <h1 style="color:red;">Time Up</h1>
  </center>
   
   
   
    <div  id="myDIV">
        <center><h2 id="borderimg1" style="color:black;"> 
            
            It is already late<br>
           You can not in time....
          </h2>
        
          <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
            
            Sorry!
            Time is Up
           it is already late
            You are not in time </textarea>
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
      
    
    <div class ="item1" style="margin-left: 500px;" >

        <div class="card">
            <img src="uiuFile/r_y_y_1_1_1.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">You are late....</h1>
            
           

            <form method="post" >
            <button class="glow-on-hover" type="submit" name="submit" class="button">Finish</button>
        </form>   

          
          
          </div>
          
          
            </div>
            
            
           

            


    </div>

    


    </center>  
        
           

         
                
                    </div>
    
</body>
</html>
