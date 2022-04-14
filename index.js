const employee = {
    name: "Theo",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
// This function should take in three arguments: an employee, key and value.
  let newEmployee = {...employee};
   newEmployee[key] = value;
   return newEmployee;
}
// This function should not mutate the employee; it should return new object that has a new value for the key passed in.
// Spread operator!

// Returns an employee with the original key value pairs and the new key value pair
// It does not modify the original employee, but rather returns a clone with the new data


// This function should work the same as updateEmployeeWithKeyAndValue() 
// but it should mutate the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key]=value;
  return employee;
}

// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. 
// It should delete the property with that key from the employee Object. 
// This should not mutate the original employee Object; it should return a new Object 
// that doesn't include the identified key-value pair. Hint: use the spread operator!

function deleteFromEmployeeByKey(employee, key){
  let newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() 
// but it should mutate the employee Object.

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}