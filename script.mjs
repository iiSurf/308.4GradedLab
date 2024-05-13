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

// TODO: Part One

// const str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

// let cell = [];
// let placeholder = ``;
// let counter = 0;

// // Switch statement version

// for (let char of str) {
//   switch (char) {
//     // If comma do this
//     case ',':
//       counter++;
//       cell.push(placeholder);
//       placeholder = ``;
//       break;
//     //If new line do this
//     case '\n':
//       counter++;
//       cell.push(placeholder);
//       placeholder = ``;
//       console.log(cell);
//       break;
//     //If char do this
//     default:
//       counter++;
//       placeholder += char;

//       if (counter === str.length) { //If it's our last character we populate cell4 and print
//         cell.push(placeholder);
//         placeholder = ``;
//         console.log(cell);
//         cell = [];
//         counter = 0;
//       }
//       break;
//   }
// }

// TODO: Part Two

// const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let cell = []; // Holds cell values
// let row = []; // rows in the array. Sub array in an array.
// let placeholder = ``; // Adds to it until a character like new line break or , appear.


// // loop every character is str

// for (let char of str) {
//   switch (char) {
//     // If comma do this
//     case ',':
//       cell.push(placeholder);
//       placeholder = ``;
//       break;
//     //If new line do this
//     case '\n':
//       cell.push(placeholder);
//       row.push(cell); // push the cell array into row array.
//       cell = []; // reset cell aray so can work on next row.
//       placeholder = ``;
//       break;
//     //If char do this
//     default:
//       // Pickup characters
//       placeholder += char;
//     }
//   }
//       if (cell.length > 0) { // push last row.
//         row.push(cell);
//       }
//       console.log(row);


// TODO: Part Three

// let changeStr = [
//   ["ID", "Name", "Occupation", "Age"],
//   ["42", "Bruce", "Knight", "41"],
//   ["57", "Bob", "Fry Cook", "19"],
//   ["63", "Blaine", "Quiz Master", "58"],
//   ["98", "Bill", "Doctor’s Assistant", "26"]
// ];
// // there was an issue from this list of names copying into vs code that caused odd formatting issues in output.

// // Initializing empty array to store objects
// let transformingData = [];
// // getting the heading
// let heading = changeStr[0];
// // looping over remaining rows
// for (let i = 1; i < changeStr.length; i++) {
//   let row = changeStr[i];
//   let obj = {

//   }; // creating a new object each row
//     // make an object with 'key' heading and 'value' from the row
//     for (let j = 0; j < heading.length; j++) {
//       let key = heading[j].toLowerCase();
//       let value = row[j];
//       obj[key] = value;
//     }
//     transformingData.push(obj);
//   }
//   console.log(transformingData);

//   // TODO: Not sure why can't get this to format correctly. 

//   // TODO: Part Four

//   let removeElement = changeStr.pop();

//   changeStr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" } );

//   changeStr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

//  // let averageAge = changeStr.length > 0 ?  : ;

//   console.log(`The average age from everyone in the table is ${averageAge.toFixed(2)}`); // 2 decimal points


  // TODO: Part Five

  // let sortedList = [
  //   { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  //   { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  //   { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  //   {
  //     id: '98',
  //     name: 'Bill',
  //     occupation: 'Doctor’s Assistant',
  //     age: '26'
  //   }
  // ]

  // let header = "id,name,occupation,age";

  // // function expression
  // const csvLine = sortedList.map(obj => {
  //   return `${obj.id},${obj.name},${obj.occupation},${obj.age}`;
  // });
  // const csvString = [header, ...csvLine].join("\n");

  // console.log(csvString);



// Made a copy of original switch statement version. So this is the Original unedited version I wanted to keep.

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let placeholder = ``;
// let counter = 0;

// // Switch statement version

// for (let char of str) {
//   switch (char) {
//     // If comma do this
//     case ',':
//       counter++;
//       if (!cell1) {
//         cell1 = placeholder;
//         placeholder = ``;
//       } else if (!cell2) {
//         cell2 = placeholder;
//         placeholder = ``;
//       } else {
//         cell3 = placeholder;
//         placeholder = ``;
//       }
//       break;
//     //If new line do this
//     case '\n':
//       counter++;
//       cell4 = placeholder;
//       placeholder = ``;
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = ``;
//       cell2 = ``;
//       cell3 = ``;
//       cell4 = ``;
//       break;
//     //If char do this
//     default:
//       counter++;
//       placeholder += char;

//       if (counter === str.length) { //If it's our last character we populate cell4 and print
//         cell4 = placeholder;
//         placeholder = ``;
//         console.log(cell1, cell2, cell3, cell4);
//         cell1 = ``;
//         cell2 = ``;
//         cell3 = ``;
//         cell4 = ``;
//         counter = 0;
//       }
//       break;
//   }
// }

/*
Objectives
Use arrays to store ordered lists of data.
Use objects to store keyed lists of data.
Use conditional logic to process data.
Use loops to handle repetitive tasks.
Transform data according to specifications.
*/

// Arrays push adds to the end of an array and pop takes away from the end of the array. Unshift adds to the beggining of array and shift removes from the beginning of the array.

// if and else version
// for (let char of str) {
//   // If comma do this
//   if (char === ' ,') {
//     counter++;
//     if (!cell1) {
//       cell1 = placeholder;
//       placeholder = ``;
//     } else if (!cell2) {
//       cell2 = placeholder;
//       placeholder = ``;
//     } else {
//       cell3 = placeholder;
//       placeholder = ``;
//     }
//   } else if (char === ' \n') {
//     //If new line do this
//     counter++;
//     cell4 = placeholder;
//     placeholder = ``;
//     console.log(cell1, cell2, cell3, cell4);
//     cell1 = ``;
//     cell2 = ``;
//     cell3 = ``;
//     cell4 = ``;
//   } else {
//     counter++;
//     placeholder += char;

//     if (counter === str.length) {
//       //If it's our last character we populate cell4 and print
//       cell4 = placeholder;
//       placeholder = ``;
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = ``;
//       cell2 = ``;
//       cell3 = ``;
//       cell4 = ``;
//       counter = 0;
//     }
//   }
// }
