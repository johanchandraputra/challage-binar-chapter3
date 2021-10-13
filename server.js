const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("./public"));
app.use(express.json());
const PORT = 4000;

const indexRouter = require("./router");
const gameRouter = require("./router/gameRPS");
const login = require("./src/login");
app.use("/", indexRouter);
app.use("/gameRPS", gameRouter);
app.post("/api/login", login);
app.use((req, res, next) => {
    if(req.url.startsWith("/api")){
        res.status(404).json({
            error:"not found"
        });
        return;
    }
    res.status(404).send("PAGE NOT FOUND");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});