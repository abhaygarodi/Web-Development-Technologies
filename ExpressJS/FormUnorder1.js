var express = require("express");
var app = express();

app.get("/Form.html", function (req, res) {
    res.sendFile('Public/Form.html', { root: __dirname });
});

app.get("/gett", function(req, resp){
    console.log("Hello World");
    var user = { uname: "yADAVVVVV" };

    resp.send(`
        <ul>
            <li>A. ${user.uname}</li>
        </ul>
    `);
});

app.get('/submit-getdata', function (req, res) {
    const first = req.query.Firstname;
    const second = req.query.Secondname;
    const third = req.query.Thirdname;

    console.log(first, second, third);

    res.send(`
        <h2>The Parameter are:</h2>
        <ul>
            <li>A. ${first}</li>
            <li>B. ${second}</li>
            <li>C. ${third}</li>
        </ul>
    `);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
