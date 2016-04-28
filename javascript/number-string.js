var submitButton = document.getElementById('submit');

submitButton.addEventListener("click", runSubmit, false);

var input;
var stringText = "";
var sum = 0;
var numberCount = 0;
var stringCount = 0;
var average = 0;

function runSubmit() {
  grabInput();
  numberOrString(input);
  printOutput();
  document.getElementById("form").reset();
}

function grabInput() {
  input = $('#input').val(); 
}

function numberOrString(value) {
  if (isNaN(value)) {
    stringText += value + " ";
    stringCount++;
  } else {
    value = parseFloat(value);
    sum += value;
    numberCount++;
    average = sum/numberCount;
  }
}

function printOutput() {
  displayValue('#text-count', stringCount);               
  displayValue('#text', stringText);
  displayValue('#number-count', numberCount);
  displayValue('#sum', sum);
  displayValue('#average', average);
}

function displayValue(id, value) {
      $( id ).text( value );
}

$("#input").keypress(function(e) {
  if(e.which == 13) {
    runSubmit();
  }
});

resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset, false);

function reset() {
  stringText = "";
  sum = 0;
  numberCount = 0;
  stringCount = 0;
  average = 0;
  printOutput();
  document.getElementById("form").reset();
}
