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
	console.log(req.body)
	const dir = "./tickets/" + req.body.ename;
	fs.mkdirSync(dir);
	fs.writeFileSync(dir + "/json.json", '{"tickets": []}', {encoding:"utf8"});
	res.send({ "dir": dir});
});

app.post("/generate/ticket", (req,res) => {
	const ticketGen = uuidv4();
	console.log(req.body)
	const dir = "./tickets/" + req.body.ename + "/json.json";
	const data = JSON.parse(fs.readFileSync(dir, {encoding:"utf8"}));
	data.tickets.push(ticketGen);
	fs.writeFileSync(dir, JSON.stringify(data), {encoding:"utf8"});
	res.send({"ticket": ticketGen, "dir": dir});
});

app.post("/verify/ticket", (req,res) => {
	console.log(req.body)
	const dir = "./tickets/" + req.body.ename + "/json.json";
	const data = JSON.parse(fs.readFileSync(dir, {encoding:"utf8"}));
	const isTrue = data.tickets.indexOf(req.body.ticket) > -1;
	fs.writeFileSync(dir, JSON.stringify(data), {encoding:"utf8"});
	res.send({"isTrue": isTrue});
});


app.get("/getevents", (req,res) => {
	const dir = "./tickets";
	res.send({"dir": fs.readdirSync(dir)});
});

app.listen(PORT, () => {
	console.log(`Listening to Port ${PORT}`);
});
