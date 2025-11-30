const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

let users = [];   // array for storing username & password JSON

// Route to handle form submit
app.get("/signup", (req, res) => {
    const uname = req.query.username;
    const pwd = req.query.password;

    const userObj = { username: uname, password: pwd };
    users.push(userObj);

    res.send(`
        <h2>Signup Successful!</h2>
        <p>Stored user: ${uname}</p>
        <a href="/signup.html">Go Back</a>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
