class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // NAIVE SOLUTION = m * nlogn
    // groupAnagrams(strs: string[]): string[][] {
    //     const map: Record<string, string[]> = {};
    //     const groupedArr = [];

    //     if (strs.length <= 1) {
    //         return [strs];
    //     }

    //     for (let str of strs) {
    //         const sortedStr = str.length ? str.split("").sort().join("") : "empty";

    //         if (Object.hasOwn(map, sortedStr)) {
    //             map[sortedStr].push(str);
    //         } else {
    //             map[sortedStr] = [str];
    //         }
    //     }

    //     for (let [_, value] of Object.entries(map)) {
    //         groupedArr.push(value);
    //     }

    //     return groupedArr;
    // }

    // m * n solution
    groupAnagrams(strs: string[]): string[][] {
        const frequency: number[] = new Array(26).fill(0);
        const groups = new Map<string, string[]>();
        // let separator = "$";

        if (strs.length === 0) [];
        if (strs.length === 1) [strs];

        for (let str of strs) {
            for (let char of str) {
                const charCode = char.charCodeAt(0);
                const charIndex = charCode - 97;
                frequency[charIndex] += 1;
            }

            const key = frequency.join("$");
            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key)!.push(str);

            frequency.fill(0);
        }

        return [...groups.values()];
    }
}
