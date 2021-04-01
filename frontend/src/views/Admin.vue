<template>
  <div class="bg-gray-100 m-4 p-10 rounded-md shadow-lg">
    <div class="bg-blue-200 rounded shadow-inner m-2 p-4 md:w-3/4 lg:1/2 mx-auto">
      <h1>Task Manager</h1>
      <h2>Add a Task</h2>
      <div>
        <input type="text" v-model="task" class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1" />
        <button
          @click.prevent="addTask()"
          class="m-4 p-2 bg-blue-500 focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg text-white rounded-3xl"
        >
          Add Research Task
        </button>
      </div>
      <table class="text-left mx-auto w-10/12">
        <tr class="text-center">
          <th>Name</th>
          <th>_id</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.name }}</td>
          <td>{{ task._id }}</td>
          <td class="text-center">
            <button
              @click="editTask(task)"
              class="text-green-800 focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg px-2 m-2 bg-green-100 rounded-xl"
            >
              &#x2710;
            </button>
          </td>
          <td class="text-center">
            <button
              @click="deleteTask(task)"
              class="text-red-800 focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg px-2 m-2 bg-red-100 rounded-xl"
            >
              &#x2718;
            </button>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <hr />
    <br />
    <div>
      <h1>Survey Manager</h1>
      <div id="surveys" class="flex flex-col justify-center items-center">
        <div>
          <button
            class="p-2 px-3 m-4 focus:outline-none rounded-3xl text-white bg-blue-500 transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg"
            v-for="task in tasks"
            :key="task.id"
            @click="selectSurvey(task)"
          >
            {{ task.name }}
          </button>
        </div>
        <form @submit.prevent="addQuestion" class="flex flex-col w-7/12 bg-blue-200 shadow-inner rounded-md">
          <div class="p-4 flex justify-between">
            <div class="p-2">
              <label for="question">Question: </label>
              <input
                type="text"
                class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
                id="question"
                v-model="question"
              />
            </div>
            <div class="p-2">
              <label for="tag" >Tag: </label>
              <input
                type="text"
                class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
                id="tag"
                v-model="tag"
              />
            </div>
          </div>
          <div class="flex items-start p-4 w-full">
            <label for="question" class="p-2">Answers: </label>
            <textarea
              class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-2 w-full"
              id="answers"
              v-model="answers"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      task: "",
      tasks: [],
      surveys: [],
      survey: null,
      surveyName: "",
      questions: [],
      tag: "",
      question: "",
      answers: [],
      show: "all",
    };
  },
  created() {
    // this.getSurveys();
    this.getTasks();
  },
  methods: {
    // Task Methods
    async addTask() {
      try {
        if (this.task === "") {
          return;
        }
        await axios.post("/api/tasks", {
          name: this.task,
        });
        await this.getTasks();
        this.task = "";
      } catch (error) {
        console.log(error);
      }
    },
    async getTasks() {
      try {
        const response = await axios.get("/api/tasks");
        this.tasks = response.data;
        this.$forceUpdate();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(task) {
      try {
        if (!confirm(`Do you really want to delete ${task.name}?`)) {
          return;
        }
        await axios.delete(`/api/tasks/${task._id}`);
        this.getTasks();
      } catch (error) {
        console.log(error);
      }
    },
    async editTask(task) {
      try {
        if (this.task === "") {
          return;
        }
        if (
          !confirm(
            `Do you really want to change: ${task.name} to ${this.task}?`
          )
        ) {
          return;
        }
        axios.put(`/api/tasks/${task._id}`, {
          name: this.task,
        });
        this.getTasks();
      } catch (error) {
        console.log(error);
      }
    },
    // Survey Methods
    async addSurvey() {
      try {
        await axios.post("/api/surveys", {});
      } catch (error) {
        console.log(error);
      }
    },
    async getSurveys() {
      try {
        const response = await axios.get("/api/surveys");
        this.surveys = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    selectSurvey(task) {
      this.survey = task;
      this.getQuestions();
    },
    async getQuestions() {
      try {
        const response = await axios.get(
          `/api/task/${this.survey.name}/questions`
        );
        this.questions = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addQuestion() {
      try {
        await axios.post(`/api/surveys/${this.survey.taskId}/questions`, {
          question: this.question,
          tag: this.tag,
          answers: this.answers,
        });
        this.tag = "";
        this.question = "";
        this.answers = [];
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
