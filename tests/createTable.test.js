import createTable from '../helpers/createMultiplicationTable';

describe('confirm output type is accurate', () => {
	test('Table should be an array', () => {
		expect(typeof createTable([2, 3])).toBe('object');
	});
	test('Table should have at least one array inside', () => {
		expect(createTable([2]).length).toBeGreaterThan(0);
	});
});
describe('check if function returns the correct output ', () => {
	test('Number of arrays within the table should be one more than the number of prime number in the array it receives', () => {
		expect(createTable([2, 3, 5, 7]).length).toBe(5);
		expect(createTable([2, 3, 5, 7, 11]).length).toBe(6);
		expect(createTable([2, 3, 5, 7, 11, 13]).length).toBe(7);
		expect(createTable([2, 3, 5, 7, 11, 13, 17]).length).toBe(8);
	});
	test('empty array of prime numbers input should return an error message', () => {
		expect(createTable([])).toBe(
			'table cannot be generated if there are no primary numbers provided'
		);
	});
});
