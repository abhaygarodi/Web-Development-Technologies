const express = require("express");
const app = express();

// static folder (must come AFTER app is defined)
app.use(express.static("public"));

let studs = [
    { sid: 101, sname: "Savita", course: "DIoT" },
    { sid: 102, sname: "Kavita", course: "DAC" },
    { sid: 103, sname: "Anita", course: "DESD" },
    { sid: 104, sname: "Sunita", course: "DIoT" },
    { sid: 105, sname: "Babita", course: "DMC" }
];

// REST URL (Q15)
app.get("/students/:name", (req, res) => {
    const name = req.params.name;
    const s = studs.find(st => st.sname.toLowerCase() === name.toLowerCase());

    if (!s) {
        return res.send("<h2>No Student Found</h2>");
    }

    res.send(`
        <h3>Student id : ${s.sid}</h3>
        <h3>Student name : ${s.sname}</h3>
        <h3>Student course : ${s.course}</h3>
        <br><a href="/allstudents.html">Go Back</a>
    `);
});

// All Students endpoint (Q16)
app.get("/students", (req, res) => {
    res.json(studs);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
