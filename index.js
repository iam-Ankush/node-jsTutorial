// imports the file from the outer files
const {area} = require("./circle");

const {rectangle} = require("./rectangle");


// calling a function
console.log(area(10));
// area(10)
console.log(rectangle(5,4));


// creating a GLOBAL Modules
const http = require("http");


const PORT = 4000;

const server = http.createServer((req , res) =>{
    res.write("<h1>Hello Node JS</h1>");
    res.end();
})

console.log(`Server is running at http://localhost:${PORT}`)

server.listen(PORT)
