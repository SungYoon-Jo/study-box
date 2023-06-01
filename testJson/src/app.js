const http = require("http");

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end("<h1>HOME</h1>");
      return;
    }

    let buf = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      buf.push(chunk);
    });

    req.on("end", () => {
      // String from Buffer
      const str = Buffer.concat(buf).toString();
      console.log(str);

      // JS Object from String
      const json = JSON.parse(str);
      console.log(json);
      json.ok = true;

      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      // String from JS Object
      res.end(JSON.stringify(json));
    });
  })
  .listen(3000);
