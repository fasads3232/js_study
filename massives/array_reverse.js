var rotate = function(nums, k) {
    if(Array.isArray(nums) && k>0 && k<=nums.length){
    let array1 = nums.slice().reverse()
    let array2 = nums.slice()
    array1.splice(k)
    array1.reverse()
    array2.splice(-k)
    let result = array1.concat(array2)
        return result
    }
    else return undefined
    }

    //console.log(rotate([1,2,3,4,5,6,7],3))