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
  <center>
    <h1 style="color:greenyellow;">Time Left</h1>
  </center>
    <p id="demo"> </p>
    <script src="timer.js"></script>
    <div  id="myDIV">
        <center><h2 id="borderimg1" style="color: gold;">Nice choice<br>   
          
         Your new vehicle is running <br> 
         
        you are close to your university<br>

        But a problem there is no change to the RickshawPuller<br>
 
        what will you do now??
        
        </h2>
      
      
        <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
          Nice choice 
          
          Your new vehicle is running 
          
         you are close to your university
 
         But a problem there is no change to the RickshawPuller

         what will you do now?     </textarea>
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

      
      </center>
        
        

       
    
</div>
 
<div class="container">
      
       
    <div class ="item1"  style="margin-left: 150px;">

        <div class="card">
            <img src="uiuFile/sad_money.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">Give full 5o tk?</h1>
           
            <form method="get" action="congratulations.html">
                <button type="submit" class="button">Give</button>
            </form>
          </div>
          
            </div>


<div class ="item2" style="margin-right: 150px;" >

    <div class="card">
        <img src="uiuFile/sa_thinking.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
        <h1 class="rickshaw">Search changes to other's</h1>
        
        <form method="get" action="searchshop.html">
            <button  type="submit" class="button">PICK</button>
        </form>
      </div>

    </div>

  
    </div>
        
           

         
                
                    </div>
    
</body>
</html>