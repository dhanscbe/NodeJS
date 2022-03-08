const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello");
	}
	else if (req.url === "/app/test") {
		res.write(JSON.stringify([1, 2, 3]));
	}
	res.end();
});
server.on("connection", (socket) => {
	console.log("connection listener");
});
server.listen("8085");
console.log("server starting at 8085");