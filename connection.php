<?php
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = 'mckisadmin';

	$db = 'mckis_db';

	$connection = mysql_connect($dbhost, $dbuser, $dbpass);
	mssql_select_db($db);

	# https://www.youtube.com/watch?v=tqfl51HVodI
?>