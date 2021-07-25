var jsonServer = require("json-server");
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
var middlewares = jsonServer.defaults();
var port = 3004;

server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log("JSON Server is running on http://localhost:" + port);
});