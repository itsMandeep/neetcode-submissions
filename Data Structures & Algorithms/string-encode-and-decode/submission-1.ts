class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs.length) {
            return "";
        }

        let encodedString = "";
        for (let str of strs) {
            // if (!str.length) return "";
            encodedString += `-${str}`;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {

        if(!str.length) return []

        return str.split("-").splice(1)
    }
}
