//  This function is not for the front end as I've used HTML's form validation to meet all input requirements
const validateInput = (num) => {
	if (typeof num !== 'number') {
		return 'Please insert a number';
	}

	if (num < 1) {
		return 'Please insert a value of at least 1';
	}
	if (num % 1 != 0) {
		console.log(num % 1);
		return 'Please insert a whole number';
	}
	return 'validation passed';
};
export default validateInput;
