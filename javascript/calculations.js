//submit button functions

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", calculations, false);
var numberArray = [];
var sortedArray = [];
var inputArea = document.getElementById("number-entered");
var table = document.getElementById("results");
var selectedNumbers = document.getElementById("selected-numbers");

function calculations(evt) {
  //blank answers messed up function so defaults to 0 if you put nothing - based on stack overflow
  if (inputArea.value.length == 0) {
    inputArea.value = 0; 
  }
  var numberEntered = parseInt(document.getElementById("number-form").elements.item(0).value);
  numberArray.push(numberEntered);
  var howMany = 0;
  var sum = 0;
  var average = "";
  var standardDev = "";
  var median = "";
  var results = "";
  var output = "";
  // in order to reset the table over and over again without repeats, clear what is inside and replace with just the header of the table
  table.innerHTML = '<tr><th>How many</th><th>Sum</th><th>Average</th><th>Standard Deviation</th><th>Median</th></tr>';
  
  for (i = 0; i < numberArray.length; i++) {
    
    
    //how many numbers they entered
    howMany = i + 1;
    
    
    // finding sum of the numbers
    for (j=0; j <= i; j++) {
      sum += numberArray[j];
      
      output += numberArray[j] + ', ';
    }
    selectedNumbers.innerHTML = output;
    output = "";
    average = (sum/howMany).toFixed(2);
    
    //finding the standard deviation
    var totalSD = 0;
    for (k=0; k <= i; k++) {
      var difference = numberArray[k] - average;
      var squareDifference = Math.pow(difference, 2);
      totalSD += squareDifference;
      //finding the median
    //order all of the items in the array, find out if the array has an even amount or odd, then find the middle
    sortedArray = numberArray.slice(0, k+1);
    sortedArray.sort(function(a, b){return a-b}); // was sorting by first digit, so I added this from W3Schools
    var middleIndex = (sortedArray.length/2) -1;
    if ( sortedArray.length % 2 == 0 ) {
      median = (sortedArray[middleIndex] + sortedArray[middleIndex + 1]) / 2;
    } else {
      median = sortedArray[middleIndex + 0.5]; 
    }
    }
    
    standardDev = Math.pow(totalSD/howMany, .5).toFixed(3);
    
    
    
    //adding new row for each info section - tried to directly concatenate but did not work.. had to find method of adding new cells while leaving header - based off of stack overflow
    var newRow = table.insertRow(table.rows.length);
    var howManyCell = newRow.insertCell(0);
    howManyCell.innerHTML = howMany;
    var sumCell = newRow.insertCell(1);
    sumCell.innerHTML = sum;
    var averageCell = newRow.insertCell(2)
    averageCell.innerHTML = average;
    var sDCell = newRow.insertCell(3)
    sDCell.innerHTML = standardDev;
    var medCell = newRow.insertCell(4)
    medCell.innerHTML = median;
    sum = 0;
  }
  inputArea.value = "";
  //move focus back to the input area once again
  inputArea.focus();
  
}

//this function allows you to press enter to submit answers - based off stack overflow
$("#number-entered").keypress(function(e, evt) {
  if(e.which == 13) {
    calculations(evt);
  }
});




resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCalculations, false);

//this function resets the calculations and the table
function resetCalculations(evt) {
  table.innerHTML = '<tr><th>How many</th><th>Sum</th><th>Average</th><th>Standard Deviation</th><th>Median</th></tr>';
  numberArray = [];
  inputArea.focus();
  selectedNumbers.innerHTML = "";
}