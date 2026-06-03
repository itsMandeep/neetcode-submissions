class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // inuput - array
    // output - array with 2 indices


    // brute force
    // i loop from 0 - n
    // j loop from  i+1 - n
    // if sum finds return [i, j]
    // time - (n^2), space - o(1)

    //optimised sol
    // i loop from 0 - n
    // save subtraction of target - current i num in object
    // object because of fast 0(1) lookup
    // before saving it first check if number exists in object
    // if yes, return the value of that from object with i
    twoSum(nums, target) {
        const map = {}
        for(let i=0; i<nums.length; i++){ // i = 1, {'4':0}
            // if(map[nums[i]]){
            //     return [map[nums[i]], i]
            // }

            if(Object.hasOwn(map, nums[i])){
                return [map[nums[i]], i]
            }

            map[target - nums[i]] = i
        }

        return []
    }
}
