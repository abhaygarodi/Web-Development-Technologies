const fs = require("fs");

// Read file line by line
const content = fs.readFileSync("sample.txt", "utf8");

// Split into lines
const lines = content.split("\n");

// Display numbered lines
lines.forEach((line, index) => {
    console.log(`${index + 1}. ${line}`);
});
