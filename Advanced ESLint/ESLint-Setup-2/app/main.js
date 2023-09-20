function checkPositive(number) {
    if (number > 0) {
        return true;
    }
    return false;
}

console.log(checkPositive(10));

const getBooks = new Promise((resolve) => {
    resolve('Books Git');
});

getBooks()
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));
