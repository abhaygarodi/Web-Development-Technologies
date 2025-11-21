const fs = require('fs');

// Step 1: Create Employee Objects
const employees = [
    { empid: 1001, empname: "Harry", dept: "Sales", salary: 23000 },
    { empid: 1002, empname: "Sarita", dept: "Accounts", salary: 20000 },
    { empid: 1003, empname: "Monika", dept: "TechSupport", salary: 35000 },
    { empid: 1004, empname: "Raju", dept: "Marketing", salary: 25000 }
];

// Step 2: Convert objects to required text format
let data = "";

employees.forEach(emp => {
    data += `${emp.empid}:${emp.empname} : ${emp.dept} : ${emp.salary}\n`;
});

// Step 3: Write to a text file
fs.writeFile("employees.txt", data, (err) => {
    if (err) throw err;
    console.log("Employee data saved to employees.txt");
});
