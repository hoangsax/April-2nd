// 2. print how to read number in vietnamese: n integer < 1,000,000
function numberPartPerUnit (number) {
    let numString = number.toString();
    let parts = [];
    let length = numString.length;
    while (length > 0) {
        parts.unshift(numString.slice(length - 3 >= 0? length - 3 : 0, length));
        length -= 3;
    }
    return parts;
}

function read3DigitsInVietnamese(numString) {
    const digits = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    const digits2 = ['không', 'một', 'hai', 'ba', 'bốn', 'lăm', 'sáu', 'bảy', 'tám', 'chín'];
    if (numString.length === 1) {
        return digits[parseInt(numString)];
    }
    else if (numString.length === 2) {
        if (numString[0] === '1') {
            if (numString[1] === '0') {
                return 'mười';
            }
            else {
                return 'mười ' + digits2[parseInt(numString[1])];
            }
        }
        else {
            if (numString[1] === '0') {
                return digits[parseInt(numString[0])] + ' mươi';
            }
            else {
                return digits[parseInt(numString[0])] + ' mươi' + ' ' + digits2[parseInt(numString[1])];
            }
        }
    }
    else if (numString.length === 3) {
        let result = '';
        if (numString[0] !== '0'){
            result += digits[parseInt(numString[0])] + ' trăm';
        }
        if (numString[1] === '0') {
            if (numString[2] !== '0') {
                result += ' linh ' + digits[parseInt(numString[2])];
            }
        }
        else {
            result += ' ' + read3DigitsInVietnamese(numString.slice(1));
        }
        return result;
    }
}

function howToReadNumberInVietnamese(number) {
    const units = ['', 'nghìn'];
    const digits = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    let result = '';
    let parts = numberPartPerUnit(number);
    for (let i = 0; i < parts.length; i++) {
        result += read3DigitsInVietnamese(parts[i]) + ' ' + units[parts.length - 1 - i] + ' ';
    }
    return result;
}
console.log(howToReadNumberInVietnamese(20));
console.log(howToReadNumberInVietnamese(200));
console.log(howToReadNumberInVietnamese(2000));

console.log(howToReadNumberInVietnamese(12345));
let temp = numberPartPerUnit(123456);
for (let i = 0; i < temp.length; i++) {
    console.log((temp[i]));
}
