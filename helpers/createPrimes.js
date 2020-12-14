const createPrimes = (num) => {
	// function to check primality
	const isPrime = (num) => {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return num > 1;
	};

	let primesArray = [];
	for (let i = 1; num > primesArray.length; i++) {
		if (isPrime(i)) {
			primesArray.push(i);
		}
	}
	return primesArray;
};

export default createPrimes;
