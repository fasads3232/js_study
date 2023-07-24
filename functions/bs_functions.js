let getArrayParams = function(...arr){
    let min= arr[0];
    let max= arr[0];
    let sum=0;
    let result =0;
for (let i=0; i<arr.length; i++)
{
  if(arr[i]<min)
{
min = arr[i];
}
  if (arr[i]>max)
{
    max = arr[i];
}
sum+=arr[i];
}
let avg = Number((sum/arr.length).toFixed(2));

result = {max : max, min : min , avg :avg};

return result 
}
console.log(getArrayParams(-5551,-323,34,4,21,3,5,436,5467,564,23454345,546,47,56,756,7,567,56,756,7,567,567,56,7567,8,678,56,57,6,76))