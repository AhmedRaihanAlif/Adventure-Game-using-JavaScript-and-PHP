<?php

	// Defining Constants
	define( 'HOST', 'localhost' );
	define( 'USER', 'root' );
	define( 'PASS', '' );
	define( 'DB', 'adventuregame' );
	
	$connect = mysqli_connect( HOST, USER, PASS, DB )
	or die("Can not connect");

	if(!$connect){
		die("Not Connected" .mysqli_error());
	  } 
?>