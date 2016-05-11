//get initial values
initial();
function initial() {
  printValue("#text", "#text-value");
  printValue("#color", "#color-value");
  printValue("#range", "#range-value");
  printValue("#date", "#date-value");
  checkboxValue();
  multipleSelect('input', 'fruit', '#radio-value', 'checked');
  multipleSelect('option', 'fruit', '#select-value', 'selected');
}

function printValue(inputId, resultId) {
  var input = $(inputId).val();
  $(resultId).text(input);
}

function checkboxValue() {
  var check = $('#checkbox').prop('checked');
  
  if (check == false) {
    $('#checkbox-value').text("false");
  } else {
    $('#checkbox-value').text("true");
    
  }
}

function multipleSelect(type, name, id, selected) {
  var selector = type + "[name=" + name + "]:" + selected;
  var input = $(selector).val();
  $(id).text(input);
}


$('#text').change(function newValue() {
   printValue("#text", "#text-value");
});

$('#color').change(function newValue() {
  printValue("#color", "#color-value");
});

$('#range').change(function newValue() {
  printValue("#range", "#range-value");
});

$('#date').change(function newValue() {
  printValue("#date", "#date-value");
});

$(':checkbox').change(function newCheckboxValue() {
  checkboxValue();
});

$('input[name=fruit]').change(function newMultiValue() {
  multipleSelect('input', 'fruit', '#radio-value', 'checked');
});

$('#select').attr("onchange", "multipleSelect('option', 'fruit', '#select-value', 'selected')");

