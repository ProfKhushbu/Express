const express = require("express");
const app = express();
const api = require("./apit2"); // or whatever your file is called
app.use("/api", api);
app.listen(7899, () => {
console.log("Server running at http://localhost:7899/api");
});