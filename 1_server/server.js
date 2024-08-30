
const http = require("http");
const app = http.createServer((req,res)=>{
    console.log("server created");
    res.end("Hai")
})
app.listen(3000)

