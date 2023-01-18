<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="uiuleader.css">
</head>
<body>
    <center>
    <h1 style="color: gold;font-size: 50px;">UIU EXPRESS</h1>
    <h1 style="color: pink;">Leaderboard</h1>
  
  	<?php
		require_once("dbconnect.php");
		$connect = mysqli_connect( HOST, USER, PASS, DB )
			or die("Can not connect");


		$results = mysqli_query( $connect, "SELECT * FROM uiuexpress ORDER BY attempt ASC" )
			or die("Can not execute query");
	?>

 
  
			<table id='customers'> 
			<th>Participant's Name</th>
      <th>Attempt</th>  
      <th>Time</th> 
      <?php
			while( $rows = mysqli_fetch_array( $results ) ) {
				extract( $rows );
				echo "<tr>";
      
        echo "<td> $username  </td>";
	    echo "<td> $attempt </td>";	//The variable name has to match EXACTLY like the db column name
				
	    echo "<td> $time</td>";
			
		
	
		
	     echo "</tr> \n";
			}

			echo "</table> \n";
		?>

  
</table>


	
</center>
</body>
</html>