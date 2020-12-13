import createTable from '../helpers/createMultiplicationTable';

// should be a number
// should be at least 1
// should be a whole number
describe('', () => {
	test('Table should be an array', () => {
		expect(typeof createTable([2, 3])).toBe('object');
	});

	test('Table should have at least one array inside', () => {
		expect(createTable([2]).length).toBeGreaterThan(0);
	});
	test('Number of arrays within the table should be one more than the number of prime number in the array it receives', () => {
		expect(createTable([2, 3, 5, 7]).length).toBe(5);
	});
});
