import createPrimes from '../helpers/createPrimes';

test('only N amount of numbers should be generated', () => {
	expect(createPrimes(5).length).toBe(5);
	expect(createPrimes(11).length).toBe(11);
	expect(createPrimes(24).length).toBe(24);
});

test('the first number should be 2', () => {
	expect(createPrimes(5)[0]).toBe(2);
});

test('the first number returned in the array should be prime', () => {
	expect(createPrimes(1)).toStrictEqual([2]);
});
