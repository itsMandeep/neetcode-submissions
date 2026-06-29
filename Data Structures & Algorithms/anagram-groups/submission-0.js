class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    //input - strs []
    // output - [ strs []]

    // shoud i consider Cat and cat as same or case sensitive - same
    // will the array always sorted, or can be unsorted - unsorted
    // can there be numbers? - no
    // can any item be nul/empty or special char - can be (ignore)
    // output should be array? - yes
    // does it need to be in specific order - no
    // should i mute same array or return a copy - return copy


    // what to focus on space, time / readability

    //brute force 
    // i = 0 - n
    // j = 0 - m
    // put i in array, check if chars matches to jth
    // put that in array as well
    // n2

    // optimised
    // create hashmap 
    // from 0 - n
    // sort item, check in hashmap
    // if present already, push it
    // else, set as key and value with arrray
    // go through values and return an array

   
    groupAnagrams(strs) {

        const hashmap = {}

       for(let i =0; i < strs.length; i++){
            let sortedStr = strs[i].split('').sort().join('')
           
            if(Object.hasOwn(hashmap, sortedStr)){
                hashmap[sortedStr].push(strs[i])
            }else{
              hashmap[sortedStr] = [strs[i]]
            }
        }

  
       
        const result = Object.values(hashmap).map((value) => value)
    
        return result
    }
}
