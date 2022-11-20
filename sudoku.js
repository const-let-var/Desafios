const assert = require('assert')
const { format } = require('path')

var solveSudoku = function (board) {
    const hash = new Map()
    let used = false
    let hasProperLength = false
    const bank = []
    const max = 9
    const solution = []

    const fillBank = (number) => {
        used = hash.has(number)
        hasProperLength = number.length == max

        if (!used && hasProperLength) {
            hash.set(number)
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

    do {
        key = iterator1.next().value
        if (key) bank.push(key.split(''))
    } while (key)

    let found = false

    const is3x3Valid = (startI,startJ)=>{
        for (let i = startI; i < startI+3; i++) {
            for (let j = startJ; j < startJ+3; j++) {
                for (let ii = startI; ii < startI+3; ii++) {
                    for (let jj = startJ; jj < startJ+3; jj++) {
                        if(solution[i][j]===solution[ii][jj]){
                            return false
                        }
                    }
                }
            }
        }
        return true
    }

    const isSolutionValid = (solution) => {

        if (solution.length % 3 !== 0){
            return true
        }

        for (let i = 0; i < solution.length; i+=3) {
            for (let j = 0; j < solution[0].length; j+=3) {
                return is3x3Valid(i,j)
            } 
        }
        
        return true
    }

    let dd = 0
    let skip = false

    const solve = (row) => {

        if (row === board.length) {
            return
        }

        for (const comb of bank) {

            for (let index = 0; index < max; index++) {
                if(board[row][index] === '.'){
                    continue
                }
                if(board[row][index] !== comb[index]){
                    skip = true
                    break
                }

                for (let i = 0; i < solution.length; i++) {
                   if(solution[i][index] === comb[index]){
                    skip = true
                    break
                   }
                }
            }

            if(skip){
                skip = false
                continue
            }

            solution.push(comb)

            if (isSolutionValid(solution)) {

                if (row === board.length - 1) {
                    found = true
                    break
                }

                solve(row + 1)

            }

            if (found) break
            solution.pop()
        }
        
    }


    solve(0)

    return solution
}

assert.deepEqual(solveSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]),
[
    ["5","3","4","6","7","8","9","1","2"],
    ["6","7","2","1","9","5","3","4","8"],
    ["1","9","8","3","4","2","5","6","7"],
    ["8","5","9","7","6","1","4","2","3"],
    ["4","2","6","8","5","3","7","9","1"],
    ["7","1","3","9","2","4","8","5","6"],
    ["9","6","1","5","3","7","2","8","4"],
    ["2","8","7","4","1","9","6","3","5"],
    ["3","4","5","2","8","6","1","7","9"]
]
)