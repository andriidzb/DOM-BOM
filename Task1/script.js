var form = document.createElement('form');
document.body.appendChild(form);
form.setAttribute('name', 'login');
form.setAttribute('action', 'google.com');
form.setAttribute('onSubmit', 'return resulOfValidation()');

var fields = {
 age: {
  type: 'text',
  name: 'age',
  placeholder: 'Age'
 },

 username: {
  type: 'text',
  name: 'username',
  placeholder: 'Name'
 },

 date: {
  type: 'text',
  name: 'date',
  placeholder: 'Date'
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
	//^\d{2}[/]\d{2}[/]\d{4}$/
 var result = /^(?:0[1-9]|[1-2]\d|3[01])[\\/](?:0[1-9]|1[0-2])[\\/](?:[1-2]\d{3})$/;
   if (form.elements[2].value.match(result)) {    
    return true;
  } else {
    return false;
  }
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

