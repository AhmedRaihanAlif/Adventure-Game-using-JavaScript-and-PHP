var deadline = new Date("Sept 15, 2022 15:37:25").getTime();
var x = setInterval(function () {
        var d = new Date(); //get current time
        var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
        var fiveMin = 60 * 5; //five minutes is 300 seconds!
        var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
        var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
        document.getElementById('demo').innerHTML = result;
    
    }, 500) //calling it every 0.5 second to do a count down
    if (timeleft < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
