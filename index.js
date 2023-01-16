const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let plNames = [];

app.get("/", (req, res) => {
  res.status(200).render("index", { pageTitle: "home Page", plNames: plNames });
});

app.post("/", (req, res) => {
  plNames.push(req.body.plName);
  res.redirect("/");
});

app.get("/contact", (req, res) => {
  res
    .status(200)
    .render("contact", { pageTitle: "Contact page", plNames: plNames });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running http://localhost:", process.env.PORT || 5000);
});
