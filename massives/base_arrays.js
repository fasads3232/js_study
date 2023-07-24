function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false; 
    }
  
    return arr1.every((value, index) => value === arr2[index]);
  }
console.log(compareArrays([8, 2, 2], [8, 2, 2]))


function advancedFilter(arr){
    const result = arr.filter((value)=>{if(value>0) return value} ).filter((value)=>{if(value%3===0) return value}).map((value)=>value * 10);
    return result
}

console.log(advancedFilter([-10,-21,15,123,111,9,666,999]))
