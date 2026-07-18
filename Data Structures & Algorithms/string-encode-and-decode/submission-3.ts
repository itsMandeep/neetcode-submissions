class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // if (!strs.length) {
        //     return "";
        // }

        // let encodedString = ""; // o(n + m)
        // for (let str of strs) {
        //     // o(n)
        //     encodedString += `${str.length}#${str}`;
        // }

        // return encodedString;

        if (!strs.length) {
            return "";
        }

        let encodedString = "";
        for (let str of strs) {
            encodedString += str.length.toString().padStart(3, "0") + str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // if (!str.length) return [];

        // let decodedStrs = [];
        // let i = 0;

        // while (i < str.length) {
        //     let length: number;
        //     let j = i;
        //     while (str[j] !== "#") {
        //         j++;
        //     }

        //     length = +str
        //         .split("")
        //         .splice(i, j - i)
        //         .join("");

        //     decodedStrs.push(
        //         str
        //             .split("")
        //             .splice(j + 1, length)
        //             .join(""),
        //     );

        //     i += j + 1 + length;
        // }

        // return decodedStrs;

        // ---->

        if (!str.length) return [];

        let decodedStrs = [];
        let i = 0; // 0
        let numLength = 3;

        while (i < str.length) {
            let length: number = Number(str.slice(i, i + numLength)); // 004

            let start = i + numLength; // 0 + 3 -> 3
            let end = start + length; // 3 + 4 -> 7

            decodedStrs.push(str.slice(start, end)); // neet

            i = end;
        }

        return decodedStrs;
    }
}
