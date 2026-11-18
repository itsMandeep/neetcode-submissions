class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // reverse a string
        // check main string an reverse if both are equal
        
        //optimised
        // take two pointers
        // i from 0 - n
        // j from n - 0


        let i = 0;
        let j = s.length - 1

        let lowercaseStr = s.toLowerCase()

        if(lowercaseStr.length === 0){
            return false
        }

        if(lowercaseStr.length === 1){
            return true
        }

        for(let i=0;  i <= lowercaseStr.length; i++){
            let code = lowercaseStr.charCodeAt(lowercaseStr[i])   
            if(code < 97 || code > 122){
                lowercaseStr.split('').splice(i, 1)
            }  
        }
        
        while(i < j){
            let charCodeAtI= lowercaseStr.charCodeAt(i)   
            let charCodeAtJ= lowercaseStr.charCodeAt(j)   
            if(charCodeAtI < 97 || charCodeAtI > 122){
                i++;
                continue
            }

            if(charCodeAtJ < 97 || charCodeAtJ > 122){
                j--;
                continue
            }

            const result = lowercaseStr[i] === lowercaseStr[j]
         
            if(result){
                i++
                j--
            }else{
                return false
            }
        }

        return true
    }
}
