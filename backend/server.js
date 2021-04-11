const express = require("express");
const mongoose = require("mongoose");
const async = require("async");
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
  useCreateIndex: true,
});

// Task Schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

// API endpoint for creating tasks
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

// Endpoint for getting all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    let tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    console.lot(error);
    res.sendStatus(500);
  }
});

// Updating tasks
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

// Deleting tasks
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

// Endpoint for single task functions. Get task from taskName
app.get("/api/task/:name", async (req, res) => {
  let task = await Task.findOne({ name: req.params.name });
  if (!task) {
    res.sendStatus(404);
    return;
  }
  res.send(task);
});

const answersSchema = new mongoose.Schema({
  answer: String, // a list of answer objects with {id, string}
  number: Number,
});

// Question Schema
const questionSchema = new mongoose.Schema({
  task: {
    type: mongoose.Schema.ObjectId,
    ref: "Task",
  },
  question: String,
  answers: [answersSchema],
  correct: Number, // The id of the correct answer
});

const Question = mongoose.model("Question", questionSchema);

// Add Question
app.post("/api/survey/:name/question", async (req, res) => {
  try {
    let task = await Task.findOne({ name: req.params.name });
    if (!task) {
      res.sendStatus(404);
      console.log(task);
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

// get questions
app.get("/api/survey/:name/questions", async (req, res) => {
  try {
    let task = await Task.findOne({ name: req.params.name });
    if (!task) {
      res.status(404).send("No survey with that id");
      return;
    }
    console.log(task);
    let questions = await Question.find({ task: task });
    console.log(questions)
    res.send(questions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/survey/question/:questionId", async (req, res) => {
  try {
    console.log(req.params.questionId);
    let question = await Question.findOne({ _id: req.params.questionId });
    if (!question) {
      res.sendStatus(404);
      return;
    }
    await question.delete();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

app.delete(
  "/api/survey/question/:questionId/answer/:answerNum",
  async (req, res) => {
    try {
      console.log(req.params.questionId);
      let question = await Question.findOne({ _id: req.params.questionId });
      if (!question) {
        res.sendStatus(404);
        return;
      }
      question.answers = question.answers.filter(
        (answer) => answer.number != req.params.answerNum
      );
      await question.save();
      // await question.delete();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
);

// edit question
app.put("/api/survey/question/:questionId", async (req, res) => {
  try {
    let question = await Question.findOne({ _id: req.params.questionId });
    if (!question) {
      res.sendStatus(404);
      return;
    }
    question.question = req.body.question;
    question.answers = req.body.answers;
    await question.save();
    res.status(200).send(question);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
