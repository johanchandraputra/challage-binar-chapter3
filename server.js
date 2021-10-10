const express = require("express");

const app = express();
app.use("/", express.static("./public"));
app.use(express.json());

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});