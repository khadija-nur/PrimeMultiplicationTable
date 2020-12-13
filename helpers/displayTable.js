/*
- create  a table
use a function that create rows for the table :
-- should take in an array of arrays 
-- for each array creat a row and put the elements into the sections
-- give the rows ids
-- give each element class of element?







*/


export default (arrayStack) => {
    // get the reference for the body
    var tblContainer = document.querySelector("main");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    arrayStack.forEach(row => {
      var tableRow = document.createElement("tr");
      row.forEach(column => {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode( column);
        cell.appendChild(cellText);
        tableRow.appendChild(cell);
      });
      tblBody.appendChild(tableRow);

      
    }); 
      // creates a table row
  
  
      // add the row to the end of the table body
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    console.log(tbl)
    console.log(tblContainer)
    tblContainer.innerHTML = "";
    tblContainer.appendChild(tbl)
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }