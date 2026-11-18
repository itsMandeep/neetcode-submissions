class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let map = new Map();
        for (let colIndex = 0; colIndex < board.length; colIndex++) {
            const colSet = new Set();
            const rowSet = new Set();
            for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
                if (board[rowIndex][colIndex] === ".") continue;
                if (board[colIndex][rowIndex] === ".") continue;
                
                if (colSet.has(board[rowIndex][colIndex]) || rowSet.has(board[colIndex][rowIndex])) {
                    return false;
                }
                colSet.add(board[rowIndex][colIndex]);
                rowSet.add(board[colIndex][rowIndex]);


                let boxRow = Math.floor(rowIndex / 3);
                let boxCol = Math.floor(colIndex / 3);
                const mappedSet = map.get(`${boxRow}${boxCol}`);
                if (!mappedSet) {
                    map.set(`${boxRow}${boxCol}`, new Set([board[rowIndex][colIndex]]));
                } else {
                    if (mappedSet.has(board[rowIndex][colIndex])) {
                        return false;
                    } else {
                        mappedSet.add(board[rowIndex][colIndex]);
                    }
                }
            }
        }

        return true;
    }
}
