const a = function(arr){
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i< arr.length; i++)
{
    if (arr[i]>max)
    {
        max=arr[i] 
    }
    else if (arr[i]<min)
    {
        min=arr[i]
    }
}
let result = max - min;
return result
}
console.log(a([1976,2,3,4,5,6,1111]))