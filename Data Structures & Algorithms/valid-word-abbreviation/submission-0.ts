class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word: string, abbr: string): boolean {
        for (let i = 0, j = 0; i < word.length, j <abbr.length;) {
            console.log(i, j)
            if (word[i] !== abbr[j]) {
                if (Number(abbr[j])) {
                    i += Number(abbr[j]);
                    j++
                } else {
                    return false;
                }
            }else{
                i++
                j++
            }
        }

        return true;
    }
}
