const express = require("express");
const app = express();

let studs = [
    { sid: 101, sname: "Savita", course: "DIoT" },
    { sid: 102, sname: "Kavita", course: "DAC" },
    { sid: 103, sname: "Anita", course: "DESD" },
    { sid: 104, sname: "Sunita", course: "DIoT" },
    { sid: 105, sname: "Babita", course: "DMC" }
];

// RESTful URL Example:
// http://localhost:3000/students/Savita

app.get("/students/:name", (req, res) => {
    const name = req.params.name;

    const student = studs.find(s => s.sname.toLowerCase() === name.toLowerCase());

    if (!student) {
        return res.send("<h3>Student not found</h3>");
    }

    res.send(`
        <h2>Student Details</h2>
        Student id : ${student.sid} <br>
        Student name : ${student.sname} <br>
        Student course : ${student.course} <br><br>

        <a href="/studentslist">Go Back to List</a>
    `);
});

app.get("/studentslist", (req, res) => {
    let html = "<h2>Student List</h2><ul>";

    studs.forEach(s => {
        html += `<li><a href="/students/${s.sname}">${s.sname}</a></li>`;
    });

    html += "</ul>";

    res.send(html);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
