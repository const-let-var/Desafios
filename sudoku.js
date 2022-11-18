var solveSudoku = function (board) {
    const hash = new Map()
    let used = false
    let hasProperLength = false
    const bank = []
    const max = 9

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

    do{
        key = iterator1.next().value
        if (key) bank.push(key.split(''))
    }while(key)

    console.log(bank)

}

solveSudoku()