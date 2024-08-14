module.exports = function reverse(n) {
    function isNagativeNumber(number) {
        if (number < 0) {
            return number * (-1)
        } else {
            return number
        }
    }

    function isFirstNull(number0) {
        if (number0[0] === '0') {
            return number0.slice(1)
        } else {
            return number0
        }
    }

    function reverseNumber(name) {
        const nqq = String(isNagativeNumber(name)).split('').reverse().join('')
        return Number(isFirstNull(nqq))
    }

    return reverseNumber(n)
}




