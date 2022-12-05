const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

const bodyParser = require ("body-parser");
app.use(
    bodyParser.urlencoded({
        limit: "5000mb",
        extended: true,
        parameterLimit: 100000000000,
    })
);

app.use(express.json());
app.use(cors());
app.get("/", function(_, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post ("/comment", (req, res) =>{
    const{comment} = req.body;
    const text = comment;
    res.send(text);
});

app.listen(port, () =>{console.log('http://localhost:${port}')});
