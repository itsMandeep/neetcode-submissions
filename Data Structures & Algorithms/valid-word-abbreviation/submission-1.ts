class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word: string, abbr: string): boolean {
        let i = 0,
            j = 0;

        while (j < abbr.length) {
            let wordChar = word[i];
            let abbrChar = abbr[j];

            if (wordChar !== abbrChar) {
                if (this.isNumber(abbrChar)) {
                    let start = j;

                    while (this.isNumber(abbr[j])) {
                        j++;
                    }

                    let finalNumber = abbr.substring(start, j);

                    i += Number(finalNumber);
                } else {
                    return false;
                }
            } else {
                i++;
                j++;
            }
        }

        return true;
    }

    isNumber(char: string): boolean {
        let charCode = char.charCodeAt(0);
        return charCode >= 48 && charCode <= 57;
    }
}
