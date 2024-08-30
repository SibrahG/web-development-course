// //table navigation
// let table=document.body.firstElementChild; //table
// console.log(table)
// // table.rows: Get all rows in the table (including thead, tbody, and tfoot)
// console.log(table.rows);

// // tbody.rows: Get all rows in the tbody element (returns an HTMLCollection)
// const tbody = table.tBodies[0];
// console.log(tbody.rows);

// //cells of the first row
// const firstRow = tbody.rows[0];
// console.log(firstRow.cells);

// // table.caption: Get the caption of the table
// console.log(table.caption);

// // table.tHead: Get the thead element of the table
// console.log(table.tHead);

// // table.tFoot: Get the tfoot element of the table
// console.log(table.tFoot);

// // table.tBodies: Get all tbody elements of the table (returns an HTMLCollection)
// console.log(table.tBodies);

// let a = "sibrah"
// console.log(a+'sibrah')
// let obj ={
//     fname : "Zarina",
//      age : 31,
//      grade : [75, 56, 80, 90, 100],
//      subject: ["math", "english", "it", "science", "spanish"]
//  }
//  let totalg = 0;
//  for(let i = 0; i<obj.grade.length; i++){
//      totalg += obj.grade[i];
//  }
//  let avg = totalg/obj.grade.length;
//  console.log(avg);
for(var i = 0 ; i<5 ; i++ ){
    for(var j=0 ; j<=i; j++)

{
   console.log("*");
}
 console.log("\n");
}

for (var i = 0; i < 5; i++) {
    var row = ""; // Initialize an empty string to store the stars for the current row

    for (var j = 0; j <= i; j++) {
        row += "* "; // Add a star and a space to the string row= row +"*"
    }

    console.log(row); // Print the row after the inner loop completes
}

