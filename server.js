const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.static("public"));

app.get("/run-test", (req, res) => {
    exec("node tests/basicTest.js", (error, stdout, stderr) => {
        if (error) {
            res.send(`<pre>TEST FAIL\n${stderr}</pre>`);
        } else {
            res.send(`<pre>${stdout}</pre>`);
        }
    });
});

app.get("/run-login", (req, res) => {
    exec("node tests/loginTest.js", (error, stdout, stderr) => {
        if (error) {
            res.send(`<pre>LOGIN TEST FAIL\n${stderr}</pre>`);
        } else {
            res.send(`<pre>${stdout}</pre>`);
        }
    });
});

app.get("/run-error", (req, res) => {
    exec("node tests/errorTest.js", (error, stdout, stderr) => {
        if (error) res.send(`<pre>Error Test Fail\n${stderr}</pre>`);
        else res.send(`<pre>${stdout}</pre>`);
    });
});

app.listen(3000, () => {
    console.log("Site lancé sur http://localhost:3000");
});
