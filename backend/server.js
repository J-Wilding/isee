const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/explore_info_sys", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const taskSchema = new mongoose.Schema({
  name: String,
});

const Task = mongoose.model("Task", taskSchema);

// API endpoint for creating projects
app.post("/api/tasks", async (req, res) => {
  if (req.body.name === "") {
    return;
  }
  const task = new Task({
    name: req.body.name,
  });
  console.log(task);
  try {
    await task.save();
    res.send(task);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Endpoint for getting all projects
app.get("/api/tasks", async (req, res) => {
  try {
    let tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    console.lot(error);
    res.sendStatus(500);
  }
});

app.put("/api/tasks/:taskId", async (req, res) => {
  try {
    let task = await Task.findOne({ _id: req.params.taskId });
    if (!task) {
      res.sendStatus(404);
      return;
    }
    task.name = req.body.name;
    await task.save();
    res.status(200).send(task);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/tasks/:taskId", async (req, res) => {
  try {
    console.log(req.params.taskId);
    let task = await Task.findOne({ _id: req.params.taskId });
    if (!task) {
      res.sendStatus(404);
      return;
    }
    await task.delete();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

// Endpoint for single task functions.

app.get("/api/task/:name", async (req, res) => {
  let task = await Task.findOne({ name: req.params.name });
  if (!task) {
    res.sendStatus(404);
    return;
  }
  console.log(task);
  res.send(task);
});

// Update existing project

// Delete project

// To Do items Schema
// A schema defines the type for a collection.
const itemSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.ObjectId,
    ref: "Project", // So the item belongs to the project, this is the one-to-many relation
  },
  text: String,
  completed: Boolean,
});

// MongoDB collection  == Table and a model creates the table (testing if Items goes to itemss as the collection name)
const Item = mongoose.model("Items", itemSchema);

// Endpoint for creating items
app.post("/api/projects/:projectID/items", async (req, res) => {
  try {
    let project = await Project.findOne({ _id: req.params.projectID });
    if (!project) {
      res.send(404);
      return;
    }
    let item = new Item({
      project: project,
      text: req.body.text,
      completed: req.body.completed,
    });
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Endpoint for list of all the items of a project
app.get("/api/projects/:projectID/items", async (req, res) => {
  try {
    let project = await Project.findOne({ _id: req.params.projectID });
    if (!project) {
      res.sendStatus(404);
      return;
    }
    let items = await Item.find({ project: project });
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Update items
app.put("/api/projects/:projectID/items/:itemID", async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.itemID,
      project: req.params.projectID,
    });
    if (!item) {
      res.sendStatus(404);
      return;
    }
    item.text = req.body.text;
    item.completed = req.body.completed;
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/projects/:projectID/items/:itemID", async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.itemID,
      project: req.params.projectID,
    });
    if (!item) {
      res.send(404);
      return;
    }
    await item.delete();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
