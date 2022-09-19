<html>
<body>

<p>Find the number which accure single in the array.</p>
<p id="demo"></p>

<script>
var singleNumber = function(nums) {
    let singleNum = 0;

    for(let i = 0; i < nums.length; i++) {
        singleNum ^= nums[i];
    }

    return singleNum;
};

document.getElementById("demo").innerHTML = singleNumber([4,4,2]);
</script>

</body>
</html>
