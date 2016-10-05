var greetings = require("./lib/greetings");
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send(
		greetings.returnGreeting({
			name: req.query.name,
			pre: "~~~~\n",
			post: "\n~~~~"
		})
	);
});

app.listen(3000);