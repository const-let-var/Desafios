const assert = require('assert')

var rob = function(nums) {

 if(nums.length === 1){
    return nums[0]
 }
 
 if(nums.length === 2){
    return Math.max(nums[0], nums[1])
 }
 
 const dp = []

 dp[0] = nums[0]
 dp[1] =  Math.max(nums[0], nums[1])

 for (let index = 2; index < nums.length; index++) {
    dp[index] = Math.max(dp[index-1], dp[index-2]+ nums[index])
 }

 return dp[nums.length-1]
}

assert.equal(rob([1,2,3,1]), 4)