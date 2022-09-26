<!DOCTYPE html>
<html>
<body>

<p>Median of two sorted arrays of different sizes.</p>

<p id="demo"></p>

<script>
function Solution(arr, n)
{
  
    // If length of array is even
     if (n % 2 == 0)
     {
       var z = n / 2;
       var e = arr[z];
       var q = arr[z - 1];
       var ans = (e + q) / 2;
       return ans;
     }
    
     // If length if array is odd -12, -10, -6, -5, -3, 3, 4, 6, 10, 12, 13,15 ,16,18
    else
     {
       var z = Math.floor(n / 2);
       return arr;
     }
}
 
// Driver Code  
// TODO Auto-generated method stub
var arr1 = [ -5, 3, 6, 12, 15 ];
var arr2 = [ -12, -10, -6, -3, 4, 10 ,13,16];
 
var i =  arr1.length;
var j =  arr2.length;
 
var l =  i+j;
// Merge two array into one array
const arr3 = arr1.concat(arr2);
 
// Sort the merged array
arr3.sort(function(b, a) {
  return b - a;
});
 
// calling the method
document.write("Median = " + Solution(arr3, l));
</script>

</body>
</html>
