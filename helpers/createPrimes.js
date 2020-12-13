export default (num) => {
	console.log('number in creates prime', num);
	const isPrime = (num) => {
		for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
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
	console.log('primesArray', primesArray);
	return primesArray;
};
