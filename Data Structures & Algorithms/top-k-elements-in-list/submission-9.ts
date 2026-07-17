class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // // NAIVE - n log n
    // topKFrequent(nums: number[], k: number): number[] {

    //     if(nums.length === 0) []
    //     if(nums.length === 1) [nums]

    //     const map = new Map<number, number>()

    //     for(let num of nums){
    //         map.set(num, (map.get(num) ?? 0) + 1)
    //     }

    //     return [...map.entries()].sort((a,b) => b[1] - a[1]).splice(0, k).map((value) => value[0])
    // }

    // NAIVE - n log n
    topKFrequent(nums: number[], k: number): number[] {
        if (nums.length === 0) return [];
        if (nums.length === 1) return nums;

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        const map = new Map<number, number>();

        for (let num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        for (let [key, value] of map) {
            (buckets[value] ?? []).push(key);
        }

        let result = []

        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i].length) {
                result.push(...buckets[i]);
            }
        }

        return result.splice(-k, k);
    }
}
