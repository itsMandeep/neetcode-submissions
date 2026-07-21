class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let index = 0; index < board.length; index++) {
            const set = new Set();
            for (let colIndex = 0; colIndex < board[index].length; colIndex++) {
                if (board[index][colIndex] === ".") continue;
                if (set.has(board[index][colIndex])) {
                    return false;
                }
                set.add(board[index][colIndex]);
            }
            set.clear();
            for (let rowIndex = 0; rowIndex < board[index].length; rowIndex++) {
                if (board[rowIndex][index] === ".") continue;
                if (set.has(board[rowIndex][index])) {
                    return false;
                }
                set.add(board[rowIndex][index]);
            }
        }

        let map = new Map();
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if (board[row][col] === ".") continue;

                let boxRow = Math.floor(row / 3);
                let boxCol = Math.floor(col / 3);
                const mappedSet = map.get(`${boxRow}${boxCol}`);
                if (!mappedSet) {
                    map.set(`${boxRow}${boxCol}`, new Set([board[row][col]]));
                } else {
                    if (mappedSet.has(board[row][col])) {
                        return false;
                    } else {
                        mappedSet.add(board[row][col]);
                    }
                }
            }
        }

        return true;
    }
}
