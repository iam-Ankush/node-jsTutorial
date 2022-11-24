// imports the file from the outer files
const areaMain = require("./circle");

const rectangle = require("./rectangle");



// creating a GLOBAL Modules
const http = require("http");


const server = http.createServer((req , res) =>{
    res.write("hello Node JS");
    res.end();
})

server.listen(3000)
