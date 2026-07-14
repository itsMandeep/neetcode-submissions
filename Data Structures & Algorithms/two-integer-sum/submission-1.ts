class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        if(!nums.length) return []

        if(nums.length === 2) {
            if(nums[0] + nums[1] === target){
                return [0, 1]
            }
            return []
        }

        const map = new Map<number, number>()

        for(let i=0; i < nums.length; i++){
            // if required number to add to current number to get target is present in map
            // return the required number value, current i
            // add the required number for current number to the map
            
            if(map.has(nums[i])){
                return [map.get(nums[i]), i]
            }
            map.set(target - nums[i], i)
        }
        return []
    }
}
