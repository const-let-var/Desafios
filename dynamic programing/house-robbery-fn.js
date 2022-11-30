const assert = require('assert')

var rob = function(nums) {

  const memo = new Map()  

  const dp = (n)=>{

    if(n === 0){
        return  nums[0]
    }

    if(n === 1){
        return  Math.max(nums[0], nums[1])
    }

    if(!memo.has(n)){
        memo.set(n, Math.max(dp(n-1), dp(n-2) + nums[n]))
    }

    return memo.get(n)
  }
  
  return dp(nums.length - 1)
}

assert.equal(rob([1,2,3,1]), 4)