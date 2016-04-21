//only one div will show at once

var addButton = document.getElementById("new");
addButton.addEventListener("click", switchToAddForm, false);

var backButton = document.getElementById("back");
backButton.addEventListener("click", switchToTable, false);


var addForm = document.getElementById("add-form");
var tableDiv = document.getElementById("table-div");

var fname = "";
var lname = "";
var age = "";
var infoObject = {};
var tableArray = [];
var committee = "";
var officerQA = "";
var officerPosition = "";
var officerPositionLabel = "";
var phone = "";
var email = "";

var tableBody = $("#body");
//these two functions allow the divs to switch back and forth
//press add button = switch to add form
function switchToAddForm() {
  $(addForm).removeClass("hidden");
  $(tableDiv).addClass("hidden");
}

//press back button = switch back to table
function switchToTable() {
  $(tableDiv).removeClass("hidden");
  $(addForm).addClass("hidden");
}

//when submit button is pressed 
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitEntry, false);

function submitEntry () {
  $(tableBody).empty();
  createObject();
  makeTable();
  document.getElementById("form").reset();
  switchToTable();
}
//the information inputed will be put into an object
function createObject() {
  fname = $("#fname").val();
  lname = $("#lname").val();
  
  age = $("#age").val();
  
  
  if (age == "") {
    age = "";   
  } else {
   age = parseInt(age);  
  }
  
  committee = $("#committee").val();
  
  officerQA = $("#officerQA").val();

  officerPosition = $("#officer").val();
  
  if (officerPosition == "") {
    officerPosition = "N/A";   
  }
  
  phone = $("#phone").val();
  
  email = $("#email").val();
  
  infoObject = {fname: fname, lname: lname, age: age, committee: committee, officerQA: officerQA, officerPosition: officerPosition, phone: phone, email: email};

  //the object will be added into an array 
  tableArray.push(infoObject);
}

//the array will then be printed as a table
function makeTable () {
  for (var i=0; i < tableArray.length; i++) {
    $(tableBody).append('<tr>');
    $(tableBody).append('<td>' + tableArray[i].fname + " " + tableArray[i].lname + '</td>') ;
    $(tableBody).append('<td>' + tableArray[i].age + '</td>') ;
    $(tableBody).append('<td>' + tableArray[i].committee + '</td>') ;
    $(tableBody).append('<td>' + tableArray[i].officerQA + '</td>') ;
    $(tableBody).append('<td>' + tableArray[i].officerPosition + '</td>') ;
    $(tableBody).append('<td>' + tableArray[i].phone + '</td>') ;
    $(tableBody).append('<td>' + tableArray[i].email + '</td>') ;
    $(tableBody).append('</tr>');
  }
  
  
}



