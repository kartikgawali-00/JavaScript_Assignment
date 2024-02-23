const removeSpaces = (inputString) => inputString.replace(/\s/g, '');

const stringWithSpaces = 'Hello, My name is Kartik.';
const stringWithoutSpaces = removeSpaces(stringWithSpaces);

console.log(stringWithoutSpaces);
