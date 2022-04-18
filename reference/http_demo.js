const http = require("http");

//create server
http
  .createServer((req, res) => {
    res.write("Hello world...");
    res.end();
  })
  .listen(5000, () => console.log(`listening to port 5000`));
