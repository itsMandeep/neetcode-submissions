class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // input will be two strings
    // output - boolean

    // loop through s string
    // keep adding each character in obj - value to 1
    // increment value in case character repeating
    // loop through t string
    // check if chracter is present or character value is already 0 in object, then return false
    // else decrement
    // check if all values are 0, if any greater return false
    // else return true

    // things to keep in mind
    // short circui early if any case - like if string lengths diffrent
    isAnagram(s, t) {
        // if (s.length !== t.length) {
        //     return false;
        // }

        // const map = {};

        // for (const char of s) {
        //     // if (map[char]) {
        //     //     map[char]++;
        //     // } else {
        //     //     map[char] = 1;
        //     // }
        //     map[char] = (map[char] || 0) + 1
        // }

        // for (const char of t) {
        //     if (!map[char]) {
        //         return false;
        //     }

        //     map[char]--;
        // }

        // for (const char in map) {
        //     if (map[char] > 0) {
        //         return false;
        //     }
        // }

        // return true;

        if (s.length !== t.length) return false;

        const storage = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++) {
            storage[s.charCodeAt(i) - 97]++;
            storage[t.charCodeAt(i) - 97]--;
        }

        return storage.every(value => value === 0)
    }
}
