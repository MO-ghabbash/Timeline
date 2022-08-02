const express = require("express");
const mongoose = require("mongoose");
const controler = require("./controllers/controller");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose
  .connect(
    "mongodb+srv://MuhannadAlghabbash:<a123a123a123#>@cluster0.fuwal.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB conected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", controler.homePage);
app.get("/about", controler.aboutPage);

app.post("/newPost", controler.new_post);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
