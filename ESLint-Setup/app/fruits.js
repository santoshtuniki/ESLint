import lodash from 'lodash';

const arr = ['apples', 'grapes', 'oranges'];

lodash.findIndex(arr, 'grapes');

function checkEven(number) {
    if (number % 2 === 0) {
        return true;
}
    return false;
}

console.log(checkEven(3));
