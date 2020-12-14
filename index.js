import createMultiplicationTable from './helpers/createMultiplicationTable.js';
import createPrimes from './helpers/createPrimes.js';
import validateInput from './helpers/validateInput.js';
import displayTable from './helpers/displayTable.js';

const primesMultiplication = (n) => {
	/*
    Code below is unnecesssary for the front end as there is HTML form input validation in use
    ----------------------------------------------------------------
	if (validateInput(n) != 'validation passed') {
		return validateInput(n);
    }
    ----------------------------------------------------------------
    */
	const primesArray = createPrimes(n);
	const arrayStack = createMultiplicationTable(primesArray);
	return displayTable(arrayStack);
};

console.log('hello');
var form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(primesMultiplication(e.target.input.value));
});
