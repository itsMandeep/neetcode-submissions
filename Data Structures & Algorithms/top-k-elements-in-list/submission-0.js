class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // 0-n -> i
        // create map, if ith value not a key of object
        // create and assign 1
        // else increment the value
        // loop through keys/values and return array with keys more than k

        const map = {}
        let output = []

        if(!nums.length){
            return []
        }

        for(let i = 0; i < nums.length; i++){
            if(Object.hasOwn(map, nums[i])){
                map[nums[i]] += 1
            }else{
                map[nums[i]] = 1
            }
        }

        for(let [key, value] of Object.entries(map)){
            if(value >= 2){
                output.push(key)
            }
        }

        return output
    }
}
