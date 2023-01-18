

<?php
 $username=$_GET['username'];
 
require_once('dbconnect.php');
		$connect = mysqli_connect( HOST, USER, PASS, DB )
			or die("Can not connect");

    $recv=$_REQUEST['username'];
    echo $recv;

  
    
    $update_query="UPDATE uiuexpress SET attempt = attempt+1 where username=$username;";

    $result = mysqli_query($connect,$update_query);
   
    if($result){
    header("location:hand.php?updated");
}
?>




<!--
<script>
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }

var recv=localStorage.clickcount;
    document.getElementById("result").innerHTML = "You have clicked the button " +  localStorage.clickcount  + " time(s).";

  } 
}
</script>
-->