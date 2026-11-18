class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs.length) {
            return "";
        }

        let encodedString = ""; // o(n + m)
        for (let str of strs) {
            // o(n)
            encodedString += `${str.length}#${str}`;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (!str.length) return [];

        let decodedStrs = [];
        let i = 0;

        while (i < str.length) {
            let length: number;
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            length = +str
                .split("")
                .splice(i, j - i)
                .join("");

            decodedStrs.push(
                str
                    .split("")
                    .splice(j + 1, length)
                    .join(""),
            );

            i += j + 1 + length;
        }

        return decodedStrs;
    }
}
