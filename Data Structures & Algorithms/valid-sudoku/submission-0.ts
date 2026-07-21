class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            const set = new Set();
            for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
                if (board[rowIndex][colIndex] === ".") continue;
                if (set.has(board[rowIndex][colIndex])) {
                    return false;
                }
                set.add(board[rowIndex][colIndex]);
            }
        }

        for (let colIndex = 0; colIndex < board.length; colIndex++) {
            const set = new Set();
            for (let rowIndex = 0; rowIndex < board[colIndex].length; rowIndex++) {
                if (board[rowIndex][colIndex] === ".") continue;
                if (set.has(board[rowIndex][colIndex])) {
                    return false;
                }
                set.add(board[rowIndex][colIndex]);
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
