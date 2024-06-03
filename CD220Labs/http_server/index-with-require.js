const http = require("http");
const today = require("./today");

const requestListener = function (req, res) {
  res.writeHead(200);

  const datetime = today.getDate();
  let greeting = "";

  if (datetime.getHours() < 12) {
    greeting = "Good morning!";
  } else if (datetime.getHours() >= 12 && datetime.getHours() < 18) {
    greeting = "Good afternoon!";
  } else greeting = "Good evening!";

  res.end(`Hello, World! The date today is ${datetime}. ${greeting}`);
};

const port = 8080;
const server = http.createServer(requestListener);
console.log("server listening on port: " + port);
server.listen(port);
