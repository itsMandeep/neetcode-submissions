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

        // let [left, right] = [1, numbers.length];
        let left = 0
        let right = numbers.length - 1

        while (left <= right) {
            let sum = numbers[left] + numbers[right]

            if(sum === target){
                return [left + 1, right + 1]
            }

            if(sum < target){
                left++
            }else{
                right--
            }
        }

        return []
       
    }
}
