export default (primesArray) => {  
    let topRowColumn = [ ];
    topRowColumn.push(" ", ...primesArray)
    let table = [];
    table.push(topRowColumn)
    console.time("map")
    primesArray.map((firstInColumn) => {

        let column = [firstInColumn];
        primesArray.map((firstInRow) => {
          let row = firstInColumn * firstInRow;
          column.push(row);
        });
        table.push(column);
      });
      console.timeEnd("map")

 
    return table;
  };
  

