const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(5000, function () {
    console.log("Server Started...");
});

// Dynamic username and format check
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", function (req, res) {
    const { username: inputUsername, password: inputPassword } = req.body;

    console.log(inputUsername);
    console.log(inputPassword);

    if (!/^[A-Z]/.test(inputUsername)) {
        res.status(400).send({ success: false, message: "Username must start with a capital letter." });
    } 

    else if (!/^[a-zA-Z0-9]+$/.test(inputPassword)) {
        res.status(400).send({ success: false, message: "Password must contain only letters or numbers." });
    } 
    else {
        
        res.send({ success: true });
    }
});
