const fs = require("fs");

// Read and parse JSON file
const data = fs.readFileSync("customer.json", "utf8");
const customers = JSON.parse(data);

// Display names + contact details
customers.forEach(cust => {
    console.log(`Name: ${cust.custname}, Address: ${cust.address}, Phone: ${cust.phno}`);
});
