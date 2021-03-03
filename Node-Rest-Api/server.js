const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const blogSchema = require("./src/models/Models");
mongoose.connect("mongodb://localhost/blogs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const model = mongoose.model("blog", blogSchema);

app.post("/newblog", (req, res) => {
  let blog = new model(req.body);
  blog.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/", (req, res) => {
  model.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});



app.get("/blog/:id", (req, res) => {
  model.findById(req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});


app.put("/blog/:id", (req, res) => {
  model.findOneAndUpdate({_id:req.params.id},req.body,{new:true}, (err, updateddata) => {
    if (err) {
      res.send(err);
    } else {
      res.json(updateddata);
    }
  });
});

app.delete("/blog/:id", (req, res) => {
  model.remove({_id:req.params.id}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({message:"Blog Successfully Deleted"});
    }
  });
});

app.listen(3000);
