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
        const indexedCharList:number[] = new Array(26).fill(0)
        const map: Record<string, string[]> = {};
        const groupedArr: string[][] = [];
        let key;

        if (strs.length <= 1) {
            return [strs];
        }

        for(let str of strs){
            for(let char of str){
                const charCode = char.charCodeAt(0)
                const charIndex = charCode % 97
                indexedCharList[charIndex] += 1
            }

            key = indexedCharList.join("$")
            if(Object.hasOwn(map, key)){
                map[key].push(str)
            }else{
                map[key] = [str]
            }

            indexedCharList.fill(0)
        }

        

        for (let [_, value] of Object.entries(map)) {
            groupedArr.push(value);
        }

        return groupedArr;
    }
}
