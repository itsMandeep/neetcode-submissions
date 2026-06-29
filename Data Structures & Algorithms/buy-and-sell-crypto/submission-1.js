class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // brute force
        // start from 0 - n - i
        // j = i +1  - n
        // check j - i - if its bigger than before, change profit

        // optimised
        // track min price - 1
        // track max profit - 6
        // track current price - 1
        // start i from 0 - n
        // set min price as ith
        // go 1 up and check the is current is min than before, change
        // else check if profit is greater, change
        // else move


        let minPrice = prices[0]
        let maxProfit = 0
        let currentPrice = prices[0]

        for(let i = 0; i <= prices.length; i++){
            if(currentPrice < minPrice){
                minPrice = currentPrice
            }else if(currentPrice - minPrice > maxProfit){
                maxProfit = currentPrice - minPrice
            }
            currentPrice = prices[i]
        }

        return maxProfit

    }
}
