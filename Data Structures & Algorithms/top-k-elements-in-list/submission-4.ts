class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // NAIVE - n log n
    topKFrequent(nums: number[], k: number): number[] {

        if(nums.length === 0) []
        if(nums.length === 1) [nums]

        const map = new Map<number, number>()

        for(let num of nums){
            map.set(num, (map.get(num) ?? 0) + 1)
        }

        return [...map.entries()].sort((a,b) => b[1] - a[1]).splice(0, k).map((value) => value[0])
    }
}
