const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRoutes");
const messageRouter = require("./routes/messageRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(indexRouter);
app.use(messageRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
