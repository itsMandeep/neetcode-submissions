class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        if (numbers.length === 2) {
            return [1, 2];
        }

        let [left, right] = [0, numbers.length - 1];

        while (left <= right) {
            let sum = numbers[left] + numbers[right]

            if(sum === target){
                // return [left, right]
                break;
            }

            if(sum < target){
                left++
            }else{
                right--
            }

        }

        return [left + 1, right + 1]
    }
}
