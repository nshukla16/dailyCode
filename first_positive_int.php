<?php
// Enter your code here, enjoy!
$array = array(7,2, 1, 3, 8, 5);
$s = sort($array);
$fin = 0;
for( $i = 0; $i<count($array); $i++ ){
    if($array[$i]>=0){
    	if(($array[$i+1]-$array[$i])>1){    //first positive diffrence in between two number
    		$fin = $array[$i]+1;
    		break;
    	}
    }
}
echo $fin;
