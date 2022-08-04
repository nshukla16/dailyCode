<?php
// Enter your code here, enjoy!
$newa = array();
$array = array(5,2,3,4);
$mu = array_product($array);
// echo $mu;
foreach( $array as $value ){
	$val= $mu/$value;
	array_push($newa, $val);
}
foreach( $newa as $value1 ){
	echo $value1;
	echo "\n";
}
