const createMultiplicationTable = (primesArray) => {
	// if input is empty returns informative message
	if (primesArray.length === 0) {
		return 'table cannot be generated if there are no primary numbers provided';
	}

	// create upper most row and add prime numbers and empty space into it
	let topRow = [' ', ...primesArray];
	let table = [topRow];

	//  loop through input and add use the elements as the left most column vertically
	primesArray.map((firstInColumn) => {
		let column = [firstInColumn];

		// loop through the individual rows and push each element to its respective column
		primesArray.map((firstInRow) => {
			let row = firstInColumn * firstInRow;
			column.push(row);
		});

		table.push(column);
	});

	return table;
};

export default createMultiplicationTable;
