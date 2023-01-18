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
        <center><h2 id="borderimg1" style="color: gold;"> You should help him.<br>   
            Now Going towards University   <br>
         Oh no!! Your Biker stooped and he is feeling sick for high tempareture...<br> 
         What will you do???<br>
        Take Fast Decision...Fast...<br>

        
        </h2>
      
        <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
          You should help him  
          Now Going towards University  
       Oh no! Your Biker stooped and he is feeling sick for high tempareture
       What will you do
      Take Fast Decision  Fast    </textarea>
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
      
       
    <div class ="item1" >

        <div class="card">
            <img src="uiuFile/help-biker.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">Help Biker</h1>
           
            <form method="get" action="helprick.html">
                <button type="submit" class="button">PICK</button>
            </form>
          </div>
          
            </div>


<div class ="item2" >

    <div class="card">
        <img src="uiuFile/eat_med.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
        <h1 class="rickshaw">Give him medicine & Move</h1>
        
        <form method="get" action="helprick.html">
            <button  type="submit" class="button">PICK</button>
        </form>
      </div>

    </div>

    <div class ="item3">

        <div class="card">
            <img src="uiuFile/pep_help.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">Handover to public foryour short time</h1>
            
            <form method="get" action="handover.php">
                <button  type="submit" class="button">PICK</button>
            </form>
          </div>
    
        </div>
    </div>
    
</body>
</html>