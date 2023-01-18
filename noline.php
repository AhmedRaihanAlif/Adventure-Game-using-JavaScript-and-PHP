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
        <center><h2 id="borderimg1" style="color: gold;"> You have lost for 2 minutes <br>  
          
           But it is already late<br>
           You are not in time
          </h2>
        
          <textarea hidden="hidden" id="text" cols="0" rows="0" style="font-size:0px;background-color:#192841;border-radius: 0px;border-color: #192841;" >
            You have lost for 2 minutes   
          
            But it is already late
            You are not in time        </textarea>
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
      
       
    <div class ="item1" style="margin-left: 500px;" >

        <div class="card">
            <img src="uiuFile/r_y_y_1_1_1.png" alt="Denim Jeans" style="width:100%;height: 50vh;">
            <h1 class="rickshaw">You are late....</h1>
           
            <form method="get" action="helpwoman.html">
                <button type="submit" class="button">Finish</button>
            </form>
          </div>
          
            </div>





    </div>
        
           

         
                
                    </div>
    
</body>
</html>

























