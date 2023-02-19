//Create a route using http module and explain what is node by sending response in HTML and JSON format

const http = require("http")
const server = http.createServer(function(req,res){

    if(req.url === "/"){
        res.write("I am in Node First Handson home page..      ")
        res.write('<h1>Hello Home page..</h1>');
        res.end();
    }
    else if(req.method === "GET" && req.url ==="/about"){
        res.write("You are on About Page..      ")
        res.write("Displaying data in string format... ")
        res.end();
    }

    else if(req.method === "GET" && req.url === "/contact"){
        res.write("I am in contact Page..     You can Contact us on..")
        res.write(JSON.stringify([1234567890, 0987654321]))
        res.end();
    }
});
server.listen(8080);
console.log("port 8080 is Running Goto Browser and Check")