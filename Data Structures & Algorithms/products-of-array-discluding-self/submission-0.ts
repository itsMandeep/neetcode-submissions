class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix = [];
        const suffix = [];
        let prefixProduct = 1;
        let suffixProduct = 1;
        const result = [];

        //[1,2,4,6] -> [1, 1,  ]
        for (let i = 0; i < nums.length; i++) {
            prefixProduct = (nums[i - 1] ?? 1) * prefixProduct;
            prefix.push(prefixProduct);
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            suffixProduct = (nums[i + 1] ?? 1) * suffixProduct;
            suffix.unshift(suffixProduct);
        }

        for (let i = 0; i < nums.length; i++) {
            result.push(prefix[i] * suffix[i]);
        }

        return result;
    }
}
