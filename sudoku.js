const assert = require('assert')

var solveSudoku = function (board) {
    const hash = new Map()
    let used = false
    let hasProperLength = false
    const bankHash = new Map()
    const max = 9
    const solution = []
    let skip = false

    const fillBank = (number) => {
        used = hash.has(number)
        hasProperLength = number.length == max

        if (!used && hasProperLength) {

            for (let i = 0; i < max; i++) {
                skip = false
                for (let j = 0; j < max; j++) {
                    if (board[i][j] !== '.' && board[i][j] !== number[j]) {
                        skip = true
                        break
                    }
                }

                if(!skip){
                    hash.set(number,i)
                }
            }

            return
        } else if (hasProperLength) {
            return
        }

        for (let i = 1; i <= max; i++) {

            if (number.includes(i + '')) {
                continue
            }

            fillBank(number + i)
        }
    }

    fillBank("")

    let iterator1 = hash.keys()
    let key
    let rowKey

    do {
        key = iterator1.next().value
        if (key) {
            rowKey = hash.get(key)

            if(!bankHash.has(rowKey)){
                bankHash.set(rowKey, [key.split('')])
            }else{
                bankHash.get(rowKey).push(key.split(''))
            }
        }
    } while (key)

    let found = false
    let reminder

    const is2x3Valid = (startJ, item, row) => {

        reminder = row % 3

        for (let i = solution.length - reminder; i < solution.length; i++) {
            for (let j = startJ; j < startJ + 3; j++) {
                if (solution[i][j] === item) {
                    return false
                }
            }
        }
        return true
    }

    const solve = (row) => {

        if (row === board.length) {
            return
        }

        const bank = bankHash.get(row)

        for (let bi = 0; bi < bank.length; bi++) {

            skip = false

            for (let index = 0; index < max; index++) {

                if (board[row][index] !== '.' && board[row][index] !== bank[bi][index]) {
                    skip = true
                    break
                }

                for (let i = 0; i < solution.length; i++) {

                    if (solution[i][index] === bank[bi][index]) {
                        skip = true
                        break
                    }

                }

                if (skip) {
                    break
                }

                for (let i = 0; i < board.length; i++) {

                    if (row !== i && board[i][index] === bank[bi][index]) {
                        skip = true
                        break
                    }

                }


                if (row % 3 !== 0) {

                    if (index < 3) {
                        if (!is2x3Valid(0, bank[bi][index], row)) {
                            skip = true
                            break
                        }
                    } else if (index < 6) {
                        if (!is2x3Valid(3, bank[bi][index], row)) {
                            skip = true
                            break
                        }
                    } else {
                        if (!is2x3Valid(6, bank[bi][index], row)) {
                            skip = true
                            break
                        }
                    }
                }

            }

            if (skip) {
                continue
            }

            //console.log(row)

            solution.push(bank[bi])

            if (row === board.length - 1) {
                found = true
                break
            }

            solve(row + 1)

            if (found) break
            solution.pop()
        }

    }

    solve(0)

    return solution
}

assert.deepEqual(solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]),
    [
        ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
        ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
        ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
        ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
        ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
        ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
        ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
        ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
        ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
    ]
)