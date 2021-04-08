<template>
  <div class="bg-gray-100 p-2 shadow-inner">
    <div class="bg-blue-200 rounded shadow-lg m-2 p-4 md:w-3/4 lg:1/2 mx-auto">
      <h1>Task Manager</h1>
      <h2>Add a Task</h2>
      <div>
        <input
          type="text"
          v-model="task"
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
        />
        <button
          @click.prevent="addTask()"
          class="m-4 p-2 bg-blue-500 focus:outline-none transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg text-white rounded-3xl"
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
              class="text-green-800 focus:outline-none transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg px-2 m-2 bg-green-100 rounded-xl"
            >
              &#x2710;
            </button>
          </td>
          <td class="text-center">
            <button
              @click="deleteTask(task)"
              class="text-red-800 focus:outline-none transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg px-2 m-2 bg-red-100 rounded-xl"
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
            class="p-2 px-3 m-4 focus:outline-none rounded-3xl text-white bg-blue-500 transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg"
            v-for="(task, index) in tasks"
            v-bind:class="{ 'bg-blue-900': index === activeIndex }"
            :key="task.id"
            @click="selectSurvey(task, index)"
          >
            {{ task.name }}
          </button>
        </div>
        <form
          @submit.prevent="addQuestion"
          class="flex flex-col w-7/12 bg-white shadow-lg rounded-md"
        >
          <div class="p-4 text-left">
            <input
              type="text"
              class="focus:outline-none focus:border-solid border-b-2 border-transparent focus:border-blue-900 bg-gray-50 hover:bg-gray-200 p-3 w-full"
              id="question"
              placeholder="Question"
              v-model="question"
              onClick="this.setSelectionRange(0, this.value.length)"
            />
            <div
              v-for="answer in answers"
              :key="answer.index"
              class="flex items-center my-2 flex-shrink-0"
            >
              <div class="circle p-1 h-2 w-2 m-2"></div>
              <input
                type="text"
                :id="answer"
                v-model="answer.answer"
                class="w-full p-2 select-all hover:bg-gray-100 focus:outline-none"
                onClick="this.setSelectionRange(0, this.value.length)"
              />
              <!-- @click="newOption(answer.index)" -->
              <!-- :placeholder="'Option ' + [[answer.index]]" -->
              <button
                @click="deleteAnswer(index)"
                class="text-red-800 focus:outline-none transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 px-1 m-2 hover:bg-red-100 rounded-xl"
              >
                &#x2718;
              </button>
            </div>
            <div class="flex items-center my-2 flex-shrink-0">
              <div class="circle p-1 h-2 w-2 m-2"></div>
              <button
                type="text"
                class="cursor-text w-full p-2 text-left hover:bg-gray-100 focus:outline-none"
                @click="newOption()"
              >
                Add option
              </button>
            </div>
          </div>
          <button
            type="submit"
            class="p-2 px-3 m-4 focus:outline-none rounded-3xl text-white bg-blue-900 transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg"
          >
            Add Question to {{ survey.name }}
          </button>
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
      survey: false,
      surveyName: "",
      questions: [],
      question: "Question",
      show: "all",
      activeIndex: 0,
      answers: [
        {
          index: 1,
          answer: "Option 1",
        },
      ],
      answerNum: 1,
    };
  },
  created: async function () {
    // this.getSurveys();
    await this.getTasks();
    this.selectSurvey(this.tasks[0], 0);
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
      this.task = "";
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
    selectSurvey(task, index) {
      this.survey = task;
      this.activeIndex = index;
      this.getQuestions();
      console.log(this.survey.name);
    },
    async getQuestions() {
      try {
        if (this.survey) {
          const response = await axios.get(
            `/api/task/${this.survey.name}/questions`
          );
          this.questions = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addQuestion() {
      try {
        await axios.post(`/api/surveys/${this.survey.taskId}/questions`, {
          question: this.question,
          answers: this.answers,
        });
        this.question = "";
        this.answers = [];
        this.getQuestions();
      } catch (error) {
        console.log(error);
      }
    },
    newOption() {
      this.answerNum++;
      this.answers.push({
        index: this.answerNum,
        answer: `Option ${this.answerNum}`,
      });
    },
    deleteAnswer(index) {
      this.answers.splice(index, 1);
      this.answerNum--;
      console.log(this.answers);
    },
  },
};
</script>

<style scoped>
.circle {
  /* margin: 1rem; */
  /* width: 16px; */
  /* max-width: 17px; */
  /* height: 16px; */
  border-radius: 50%;
  border: 2px solid #9ca3af;
}
</style>
