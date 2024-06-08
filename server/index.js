const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get("/home", (req,res) => {
	res.send("Hello Tiger!!");
});

app.post("/generate", (req,res) => {
	const ticketGen = uuidv4();
	const dir = "./tickets/" + req.body.dir;
	fs.mkdirSync(dir);
	res.send({"ticket": ticketGen, "dir": dir});
});

app.listen(PORT, () => {
	console.log(`Listening to Port ${PORT}`);
});
