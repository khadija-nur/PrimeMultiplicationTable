const displayTable = (arrayStack) => {
	var tblContainer = document.querySelector('main');

	// creates a <table> element and a <tbody> element
	var tbl = document.createElement('table');
	var tblBody = document.createElement('tbody');

	// creating all cells
	arrayStack.forEach((row) => {
		var tableRow = document.createElement('tr');
		row.forEach((column) => {
			// Create a <td> element and a text node, make the text
			// node the contents of the <td>, and put the <td> at
			// the end of the table row
			var cell = document.createElement('td');
			var cellText = document.createTextNode(column);
			cell.appendChild(cellText);
			tableRow.appendChild(cell);
		});
		tblBody.appendChild(tableRow);
	});

	tbl.appendChild(tblBody);
	//  Clear the page so that there is only one table a given time
	tblContainer.innerHTML = '';
	tblContainer.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute('border', '2');
};

export default displayTable;
