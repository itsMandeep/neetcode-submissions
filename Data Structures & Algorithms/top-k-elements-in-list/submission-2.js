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
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }

        output = Object.entries(map).sort((a,b) => b[1] - a[1]).slice(0, k).map((value) => Number(value[0]))
        console.log(output)

        return output
    }
}
