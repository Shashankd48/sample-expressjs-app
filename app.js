const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/status", (req, res) => {
   res.status(200).json({ name: "Sanjay Singh", age: 24 });
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
   console.log(`Open in your browser http://localhost:${port}`);
});
