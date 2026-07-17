class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Record<string, string[]> = {};
        const groupedArr = [];

        if (strs.length <= 1) {
            return [strs];
        }

        for (let str of strs) {
            const sortedStr = str.length ? str.split("").sort().join("") : "empty";

            if (Object.hasOwn(map, sortedStr)) {
                map[sortedStr].push(str);
            } else {
                map[sortedStr] = [str];
            }
        }

        for (let [_, value] of Object.entries(map)) {
            groupedArr.push(value);
        }

        return groupedArr;
    }
}
