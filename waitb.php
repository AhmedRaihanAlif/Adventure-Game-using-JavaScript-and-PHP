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
        <center><h2 id="borderimg1"  style="color: gold;">Ohhh...<br>   
           You have lost 3 Minutes for waiting  <br>
           Your bike is again running after repairing<br> 
           You have few minutes for class<br>
           Wait your friend need help because his bike needs push. <br>
           Help him or not??
         
        
      
        
        </h2>
        <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
          Ohhh   
          You have lost 3 Minutes for waiting  
          Your bike is again running after repairing 
          You have few minutes for class
          Wait your friend need help because his bike needs push
          Help him or not? </textarea>
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
      
       
    <div class ="item1" style="margin-left: 150px;" >

        <div class="card">
            <img src="uiuFile/bike-push.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">Help Him</h1>
           
            <form method="get" action="helpfriend.html">
                <button type="submit" class="button">NEXT</button>
            </form>
          </div>
          
            </div>


<div class ="item2"  style="margin-right: 150px;">

    <div class="card">
        <img src="uiuFile/r_y_2.png" alt="Denim Jeans" style="width:90%;height: 50vh;">
        <h1 class="rickshaw">Ignore Him</h1>
        
        <form method="get" action="ignore.html">
            <button style="width: 90%;" type="submit" class="button">NEXT</button>
        </form>
      </div>

    </div>


    </div>
        
           

         
                
                    </div>
    
</body>
</html>