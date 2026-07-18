class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixProduct = 1;
        let suffixProduct = 1;
        const result: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            prefixProduct = (nums[i - 1] ?? 1) * prefixProduct;
            result[i] = prefixProduct
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            suffixProduct = (nums[i + 1] ?? 1) * suffixProduct;
            result[i] = result[i] * suffixProduct
        }

        return result;
    }
}
