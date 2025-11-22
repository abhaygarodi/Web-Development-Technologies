const fs = require("fs");
const arr = ["aaa", "bbb", "ccc"];
const data = arr.join("|");
fs.writeFileSync("names.txt", data, "utf8");
const content = fs.readFileSync("names.txt", "utf8");
console.log(content);   