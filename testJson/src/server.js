import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("good");
});

app.post("/pull", (req, res) => {
  const data = {
    code: 200,
    message: "success",
  };
  res.send(data);
});

app.post("/push", (req, res) => {
  console.log(req.body);
  const data = req.body;
  res.send(data);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
