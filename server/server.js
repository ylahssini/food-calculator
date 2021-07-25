var jsonServer = require("json-server");
var path = require('path')
var server = jsonServer.create()
var router = jsonServer.router(path.join(__dirname, 'db.json'))
var middlewares = jsonServer.defaults();
var port = 3004;

server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log("JSON Server is running on http://localhost:" + port);
});