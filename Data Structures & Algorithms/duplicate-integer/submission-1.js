class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    //input = array {ints}
    //output boolean

    // brute 
    // i = 0 - length of n
    // j = i+1 - length of n
    // if i == j return true
    // log o(n^2) o(1)

    // optimised solution
    // object for lookup
    // loop from 0 - n
    // if object contains value as key - return true
    // save that value as key and assign true
    // log o(n) | o(n)
    hasDuplicate(nums) {
        // const length = nums.length
        // const numsObj = {}

        // for(let i =0; i<length; i++){
        //     if(Object.hasOwn(numsObj, nums[i])){
        //         return true;
        //     }

        //     numsObj[nums[i]] = true
        // }

        // return false

        const seen = new Set()

        for(let num of nums){
            if(seen.has(num)){
                return true
            }

            seen.add(num)
        }

        return false
    }
}
