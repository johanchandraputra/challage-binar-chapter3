const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("./public"));
app.use(express.json());
const PORT = 4000;

const indexRouter = require("./router/");
const gameRouter = require("./router/gameRPS");
app.use("/", indexRouter);
app.use("/", gameRouter);


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});