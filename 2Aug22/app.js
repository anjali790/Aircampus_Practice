function twoSum(nums,target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[j]+nums[i] == target){
            return [i,j];
            }
        }
    }

}
console.log(twoSum([3,3],6));