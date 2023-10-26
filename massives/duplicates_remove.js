const removeDuplicates = function(nums){
    if (Array.isArray(nums)){
        let nums1 = []
        for (let i = 0; i < nums.length; i++){
        let a = nums[i];
        let b = nums[i+1];
        if (a!=b){
          nums1.push(nums[i])
        }
}
return nums1
    }
    else return undefined
    
};

console.log(removeDuplicates([1,1,2,2,3,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8]))
