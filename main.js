/**Alina Ryan
  * 12/8/2020
  * UMass Lowell Computer Science
  * Alina_Ryan@student.uml.edu
  * Assignment 5 COMP.4610
  * Description: This page takes numbers
  * entered into a form and generates a
  * multiplication table.
***/

// var constants
const myForm = document.querySelector('#my-form');
const minCol = document.querySelector('#minCol');
const maxCol = document.querySelector('#maxCol');
const minRow = document.querySelector('#minRow');
const maxRow = document.querySelector('#maxRow');
const msg = document.querySelector('.msg');
const numList = document.querySelector('#numbers');
const btn = document.querySelector('.button');
var table=document.getElementById('mytable');
document.getElementById('mytable').style.position = 'absolute';
var output="";

btn.addEventListener('click', (e) => {
  e.preventDefault();
  // Check if all fields are entered
  if (minCol.value === '' || maxCol.value === '' || minRow.value === ''
  || maxRow.value === '') {
    msg.innerHTML = 'Please enter every field';
    // error message goes away after 5 seconds
    setTimeout(() => msg.remove(), 5000);
    return;
  }
  // Check for values greater than 50
  if (minCol.value > 50 || maxCol.value > 50 || minRow.value > 50 || maxRow.value > 50) {
    msg.innerHTML =
      'One or more of the values exceeds the limit.<br>Please make sure the values are between -50 and 50.';
    setTimeout(() => msg.remove(), 5000);
    return;
  }
  // Check for values less than -50
  if (minCol.value < -50 || maxCol.value < -50 || minRow.value < -50 || maxRow.value < -50) {
    msg.innerHTML =
      'One or more of the values exceeds the limit.<br>Please make sure the values are between -50 and 50.';
    setTimeout(() => msg.remove(), 5000);
    return;
  }
  // Swap values if start is greater than end
  if (minCol.value > maxCol.value) {
    var temp = minCol.value;
    minCol.value = maxCol.value;
    maxCol.value = temp;
    msg.innerHTML =
      'Swapping minCol and maxCol';
      setTimeout(() => msg.remove(), 5000);
  }
  if (minRow.value > maxRow.value) {
    var temp = minRow.value;
    minRow.value = maxRow.value;
    maxRow.value = temp;
    msg.innerHTML =
      'Swapping minRow and maxRow.';
      setTimeout(() => msg.remove(), 5000);
  }
  ///////////// Generate Table ////////////////
  else {
    for (var j = minCol.value - 1; j <= maxCol.value; j++) {
      output += "<tr>";
      if (j == minCol.value - 1) {
        output += "<td></td>"; // empty cell
        for (i = minRow.value; i <= maxRow.value; i++) {
          output += "<td>" + i + "</td>";
        }
      } else {
        output += "<td>" + j + "</td>";
        for (i = minRow.value; i <= maxRow.value; i++) {
          output += "<td>" + i * j + "</td>";
        }
      }
      output += "</tr>";
    }
    // Insert table
    table.innerHTML = output;
}
});
