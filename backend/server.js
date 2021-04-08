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
// Task Schema
const taskSchema = new mongoose.Schema({
  name: String,
});

const Task = mongoose.model("Task", taskSchema);

const answerSchema = new mongoose.Schema({
  option: String,
  correct: Boolean,
});

// const Answer = mongoose.model("Answer", answerSchema);

// Question Schema
const questionSchema = new mongoose.Schema({
  task: {
    type: mongoose.Schema.ObjectId,
    ref: "Task",
  },
  question: String,
  answers: [answerSchema],
});

const Question = mongoose.model("Question", questionSchema);

// API endpoint for creating projects
app.post("/api/tasks", async (req, res) => {
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

// Questions endpoints
app.post("/api/task/:taskName/questions", async (req, res) => {
  try {
    let task = await Task.findOne({ name: req.params.name });
    if (!task) {
      res.sendStatus(404);
      return;
    }
    let question = new Question({
      task: task,
      question: req.body.question,
      answers: req.body.answers,
    });
    await question.save();
    res.send(question);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}); 

app.get("/api/task/:taskName/questions", async (req, res) => {
  try {
    let task = await Task.findOne({ name: req.params.taskName });
    if (!task) {
      res.status(404).send("No task by that name");
      return;
    }
    // console.log(task);
    let questions = await Question.find({ task: task });
    res.send(questions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
