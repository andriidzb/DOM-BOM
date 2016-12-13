var form = document.createElement('form');
document.body.appendChild(form);
form.setAttribute('name', 'login');
form.setAttribute('action', 'google.com');
form.setAttribute('onSubmit', 'return resulOfValidation()');

var fields = {
 age: {
  type: 'text',
  name: 'age'
 },

 username: {
  type: 'text',
  name: 'username'
 },

 date: {
  type: 'text',
  name: 'date'
 },

 submitBut: {
  type: 'submit',
  value: 'Validate Me'
 }
}

addElements(fields);

//validation of Age
function validateAge() {
 if (!isNaN(form.elements[0].value) && form.elements[0].value !== "" && form.elements[0].value >= 0) {
  return true;
 } else {
  return false;
 }
}

//validation of UserName
function validateUserName() {
 if (form.elements[1].value.indexOf("user_") == 0 && form.elements[1].value[5]) {  
 	return true;
 } else {
 	return false;
 }
}

//validation of Date
function validateDate() {
 var result;
 result = (!isNaN(form.elements[2].value.substr(0, 2)) && (form.elements[2].value.substr(0, 2) < 32 )) &&
 (form.elements[2].value.substr(2, 1) == "/") && 
 (!isNaN(form.elements[2].value.substr(3, 2)) && (form.elements[2].value.substr(3, 2) < 13)) && 
 (form.elements[2].value.substr(5, 1) == "/") && 
 (!isNaN(form.elements[2].value.substr(6, 4))) && 
 (form.elements[2].value.length == 10) && 
 (form.elements[2].value[0 || 1 || 3 || 4 || 6 || 7 || 8 ||9] !== " ");
 return result;
}

//check result of validation
function resulOfValidation() {
 if (validateAge() && validateUserName() && validateDate() ) {
 	return true;
 } else {
 	alert("Your data is invalid. Age should contain only numbers, username should start from user_ and date should be dd/mm/yyyy");
 	return false;
 }
}

//create inputs
function addElements(fields) {
 var elements;
 for (elements in fields) {
  var input = document.createElement('input');
  var newField = fields[elements];
  var key; 
  for (key in newField) {
   input.setAttribute(key, newField[key]);
  }
  form.appendChild(input);
 }
}

