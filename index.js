var http = require('http')
var server = http.createServer(function(req,res){
    res.write("this is my pc")
    res.end()
})
server.listen(2030)
console.log("server started on port 2030")

