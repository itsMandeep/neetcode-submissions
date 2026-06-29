class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // there can be not chars = yes
        // can there be null/empty values = can be
        // space/time - n/n

        // use stack
        // keep mapping of all the closing to opening brankets
        // on each increment, check if the mapping of this item from map, and if its top of stack
        // if no, put in stack, else remove from stack
        // go to next untill last
        // if stack is empty return true 
        // else return false

        const bracesMap = {
            ')': '(',
            '}': '{',
            "]": "["
        }

        const stack  = []

        for(let i=0; i < s.length; i++){

            let top = stack[stack.length-1]

            if(top && bracesMap[s[i]] === top){
                stack.pop()
            }else{
                stack.push(s[i])
            }
        }

        console.log(stack)

        return stack.length === 0
    }
}
