const http = require("http");
http.createServer((req, res)=>{
    res.setHeader("Content-Type","text/plain; charset=utf-8");
    res.end("User Service UPDATED 🚀");
}).listen(4101);