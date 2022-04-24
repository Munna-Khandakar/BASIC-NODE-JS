// dependencies
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // extension of file
  let extname = path.extname(filePath);

  // initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // check if content type is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // read the file and send/render the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if ((err.code = "ENOENT")) {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // internal server error
        res.writeHead(500);
        res.end(`Internal Server error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
