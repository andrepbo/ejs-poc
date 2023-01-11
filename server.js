const express = require("express");
const app = express();

// Set the name so the server knows to use EJS
app.set("view engine", "ejs");

// GET method route (the value of index)
app.get("/", (req, res) => {
  const items = [
    { message: "Example of application" },
    { message: "Just for test" },
    { message: "Simple to use" },
  ];

  return res.render("pages/index", { items });
});

// GET method route (the value of about)
app.get("/about", (req, res) => res.render("pages/about"));

// Binds and listens for connections on the specified host and port
app.listen(8080, () => console.log("Server is running"));
