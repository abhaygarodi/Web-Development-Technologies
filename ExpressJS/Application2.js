const express = require('express');
const path = require('path');

const app = express();  

// Serve your HTML file
app.use(express.static(path.join(__dirname, 'public')));
app.get('/calcSI', (req, res) => {
    let p = parseFloat(req.query.p);
    let n = parseFloat(req.query.n);
    let r = parseFloat(req.query.r);

    let si = (p * n * r) / 100;

    res.send(`
        <h2>Simple Interest Result</h2>
        <p>Principal: ${p}</p>
        <p>Years: ${n}</p>
        <p>Rate: ${r}</p>
        <h3>Simple Interest: ${si}</h3>
    `);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
