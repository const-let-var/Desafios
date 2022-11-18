const assert = require('assert')

// space O(n)
// time O(n!)

totalNQueens = function (n) {
    const queens = Array(n).fill(null) // index is row index, element is cell index
    let result = 0

    const isValidPlace = (row, cell) => {

        for (let index = 0; index < row; index++) {
            if (queens[index] === cell || (Math.abs(row - index) === Math.abs(cell - queens[index]))) {
                return false
            }
        }

        return true

    }

    const putQueen = (row) => {

        for (let cell = 0; cell < n; cell++) {

            if (isValidPlace(row, cell)) {
                queens[row] = cell
                if (row === n-1) {
                    result++
                } else {
                    putQueen(row + 1)
                }
                queens[row] = null
            }
        }

    }

    putQueen(0)

    return result

}

assert.equal(totalNQueens(4), 2)
assert.equal(totalNQueens(1), 1)