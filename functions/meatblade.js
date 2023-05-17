function worker(...arr) {
let sum=0;
for (let i=0; i< arr.length; i++)
{
    sum+=arr[i];
}
return sum
}

function makeWork(arrOfArr,func) {
  let max = arrOfArr[0] ;
  for (let i=0; i< arrOfArr.length; i++)
  {
    arrOfArr[i]=func(arrOfArr[i]); 
   if (arrOfArr[i]>max)
   {
    arrOfArr=max
   }
  
}
return max

}

console.log(makeWork( [[1,1,1],[2,2],[3,3],[4,4],[0,0]] ,worker))
