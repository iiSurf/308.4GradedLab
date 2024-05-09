// What are we accomplishing:
//Loop through the characters of a given CSV string.
// Store each "cell" of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the "\r\n" sequence, move to the next "row."
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

//Assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than "\n".

// Variables to hold string and cell data
// const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
const str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let placeholder = ``;
let counter = 0;

for (let char of str) {
  switch (char) {
    // If comma do this
    case ',':
      counter++;
      if (!cell1) {
        cell1 = placeholder;
        placeholder = ``;
      } else if (!cell2) {
        cell2 = placeholder;
        placeholder = ``;
      } else {
        cell3 = placeholder;
        placeholder = ``;
      }
      break;
    //If new line do this
    case '\n':
      counter++;
      cell4 = placeholder;
      placeholder = ``;
      console.log(cell1, cell2, cell3, cell4);
      cell1 = ``;
      cell2 = ``;
      cell3 = ``;
      cell4 = ``;
      break;
    //If char do this
    default:
      counter++;
      placeholder += char;

      if (counter === str.length) { //If it's our last character we populate cell4 and print
        cell4 = placeholder;
        placeholder = ``;
        console.log(cell1, cell2, cell3, cell4);
        cell1 = ``;
        cell2 = ``;
        cell3 = ``;
        cell4 = ``;
        counter = 0;
      }
      break;
  }
}

for (let char of str) {
  // If comma do this
  if (char === ' ,') {
    counter++;
    if (!cell1) {
      cell1 = placeholder;
      placeholder = ``;
    } else if (!cell2) {
      cell2 = placeholder;
      placeholder = ``;
    } else {
      cell3 = placeholder;
      placeholder = ``;
    }
  } else if (char === ' \n') {
    //If new line do this
    counter++;
    cell4 = placeholder;
    placeholder = ``;
    console.log(cell1, cell2, cell3, cell4);
    cell1 = ``;
    cell2 = ``;
    cell3 = ``;
    cell4 = ``;
  } else {
    counter++;
    placeholder += char;

    if (counter === str.length) {
      //If it's our last character we populate cell4 and print
      cell4 = placeholder;
      placeholder = ``;
      console.log(cell1, cell2, cell3, cell4);
      cell1 = ``;
      cell2 = ``;
      cell3 = ``;
      cell4 = ``;
      counter = 0;
    }
  }
}