<html>
<body>

<p>Given number is prime or not.</p>
<p id="demo"></p>

<script>
var countPrimes = function(n) {
    if( n <= 2 ) {
        return 0;
    }

    let primes = true;

  	for(i=2; i<n; i++){
    	if(n % i == 0){
        	primes=false;
       	}
    }
    return primes;
};
document.getElementById("demo").innerHTML = countPrimes(9);
</script>

</body>
</html>
