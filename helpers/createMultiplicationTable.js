module.exports = (primesArray) => {  
    let topRowColumn = [ , ...primesArray];
    let table = [topRowColumn];
    primesArray.map((firstInColumn) => {

      let column = [firstInColumn];
      primesArray.map((firstInRow) => {
        let row = firstInColumn * firstInRow;
        column.push(row);
      });
      table.push(column);
    });
    return table;
  };
  
