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

 
     
        while(i <= j){
            let charCodeAtI= lowercaseStr.charCodeAt(i)   
            let charCodeAtJ= lowercaseStr.charCodeAt(j)   
            if(!this.isAlphanumeric(charCodeAtI)){
                i++;
                continue
            }

            if(!this.isAlphanumeric(charCodeAtJ)){
                j--;
                continue
            }
         
            if(lowercaseStr[i] === lowercaseStr[j]){
                i++
                j--
            }else{
                return false
            }
        }

        return true
    }

    isAlphanumeric(code) {
        return (code >= 48 && code <= 57)  // 0-9
      || (code >= 97 && code <= 122) // a-z
    }
}
