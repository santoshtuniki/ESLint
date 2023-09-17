import lodash from 'lodash';

var arr = ['apples', 'grapes', 'oranges'];

lodash.findIndex(arr, 'grapes');

function checkEven(number) {
	// TODO
	if (number % 2 === 0) {
		return true;
	}
	return false;
}

console.log(checkEven(3));