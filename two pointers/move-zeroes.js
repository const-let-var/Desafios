/*Given an integer array nums, move all 0's to the end of it while maintaining
the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.*/

const assert = require('assert');

var moveZeroes = function(nums) {

    if(!nums.find(el => el)){
        return nums
    }

    const length= nums.length
    let slowPointer =  undefined
    let zeroCount = 0

    for (let i = 0; i < length; i++) {

        if(!nums[i]){
            zeroCount++

            if(slowPointer === undefined){
                slowPointer = i
            }

        }else{

            if(slowPointer !== undefined){
                nums[slowPointer] = nums[i]
                slowPointer++
            }
        }
    }
    
    while(zeroCount){
        nums[length - zeroCount] = 0
        zeroCount--
    }

    return nums
};
assert.deepEqual(moveZeroes([0,0,0,1,0,3,12]),[1,3,12,0,0,0,0])
assert.deepEqual(moveZeroes([0,0,0,1,0,0,3,12]),[1,3,12,0,0,0,0,0])
assert.deepEqual(moveZeroes([0,1,0,3,12]),[1,3,12,0,0])
assert.deepEqual(moveZeroes([0]),[0])

