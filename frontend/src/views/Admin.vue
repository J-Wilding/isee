<template>
  <div class="bg-gray-100 p-2 shadow-inner">
    <div class="bg-blue-200 rounded shadow-lg m-2 p-4 md:w-3/4 lg:1/2 mx-auto">
      <h1>Task Manager</h1>
      <h2>Add a Task</h2>
      <div>
        <input
          type="text"
          v-model="task"
          placeholder="Task name (no spaces)"
          class="focus:outline-none focus:border-solid border-b-2 border-transparent focus:border-blue-900 bg-gray-50 hover:bg-gray-200 p-2 w-2/5"
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
            class="p-2 px-3 m-4 focus:outline-none rounded-3xl text-white bg-blue-500 hover:bg-blue-400 transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg"
            v-for="(task, index) in tasks"
            v-bind:class="{ 'bg-blue-900 hover:bg-blue-800': index === activeSurveyIndex }"
            :key="task.id"
            @click="selectSurvey(task, index)"
          >
            {{ task.name }}
          </button>
        </div>
        <div class="p-8 pt-10 w-1/2">
          <router-link
            :to="surveyLink"
            class="w-full p-3 px-4 m-2 rounded-3xl shadow-lg bg-green-900 hover:bg-green-700 text-white"
            >Link to Survey "{{ survey.name }}"</router-link
          >
        </div>
        <div
          v-for="question in questions"
          :key="question._id"
          class="flex flex-col w-7/12 p-2 m-8 bg-white shadow-lg rounded-md"
        >
          <div class="p-4 text-left">
            <input
              type="text"
              class="focus:outline-none focus:border-solid border-b-2 border-transparent focus:border-blue-900 bg-gray-50 hover:bg-gray-200 p-3 w-full"
              id="question"
              placeholder="Question"
              v-model="question.question"
              onClick="this.setSelectionRange(0, this.value.length)"
            />
            <div
              v-for="(answer, index) in question.answers"
              :key="index"
              class="flex items-center my-2 flex-shrink-0"
            >
              <input
                class="m-2"
                type="radio"
                name="Answers"
                v-model="question.correct"
                :value="answer.number"
              />
              <input
                type="text"
                :id="answer.number"
                v-model="answer.answer"
                class="w-full p-2 select-all hover:bg-gray-100 focus:outline-none focus:border-solid border-b-2 border-transparent focus:border-blue-900"
                onClick="this.setSelectionRange(0, this.value.length)"
              />
              <div>
                <button
                  @click="deleteDBAnswer(question, answer.number)"
                  class="text-red-800 focus:outline-none transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 px-1 m-2 hover:bg-red-100 rounded-xl"
                >
                  &#x2718;
                </button>
              </div>
            </div>
            <div class="flex items-center my-2 flex-shrink-0">
              <button
                type="text"
                class="cursor-text text-sm text-gray-500 w-full p-2 text-left hover:bg-gray-100 focus:outline-none"
                @click="addOption(question)"
              >
                Add option
              </button>
            </div>
            <div>
              <button
                class="p-1 m-4 w-1/6 focus:outline-none rounded-3xl text-white bg-blue-900 hover:bg-blue-800 transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg"
                @click="editQuestion(question)"
              >
                Save
              </button>
              <button
                class="p-1 m-4 w-1/6 focus:outline-none rounded-3xl text-white bg-red-900 hover:bg-red-800 transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg"
                @click="deleteQuestion(question._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <form
          @submit.prevent
          class="flex flex-col w-7/12 bg-white shadow-lg rounded-md"
        >
          <div class="p-4 text-left">
            <input
              type="text"
              class="focus:outline-none focus:border-solid border-b-2 border-transparent focus:border-blue-900 bg-gray-50 hover:bg-gray-200 p-3 w-full"
              id="question"
              placeholder="Question"
              v-model="question.question"
              onClick="this.setSelectionRange(0, this.value.length)"
            />
            <div
              v-for="(answer, index) in question.answers"
              :key="index"
              class="flex items-center my-2 flex-shrink-0"
            >
              <input
                class="m-2"
                type="radio"
                name="Answers"
                v-model="question.correct"
                :value="answer.number"
              />
              <input
                type="text"
                :id="answer.number"
                v-model="answer.answer"
                class="w-full p-2 select-all hover:bg-gray-100 focus:outline-none focus:border-solid border-b-2 border-transparent focus:border-blue-900"
                onClick="this.setSelectionRange(0, this.value.length)"
              />
              <div>
                <button
                  @click="deleteAnswer(question, answer.number)"
                  class="text-red-800 focus:outline-none transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 px-1 m-2 hover:bg-red-100 rounded-xl"
                >
                  &#x2718;
                </button>
              </div>
            </div>
            <div class="flex items-center my-2 flex-shrink-0">
              <button
                type="text"
                class="cursor-text text-sm text-gray-500 w-full p-2 text-left hover:bg-gray-100 focus:outline-none"
                @click="addOption(question)"
              >
                Add option
              </button>
            </div>
          </div>
          <button
            class="p-2 px-3 m-4 focus:outline-none rounded-3xl text-white bg-blue-900 transition duration-75 ease-in-out transform active:-translate-y-1 active:scale-95 shadow-lg"
            @click.prevent="addQuestion"
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
      surveyLink: "",
      surveys: [],
      survey: false,
      questions: [],
      activeSurveyIndex: 0,
      question: {
        question: "Question",
        correct: -1,
        answers: [],
      },
    };
  },
  created: async function () {
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
        await axios.put(`/api/tasks/${task._id}`, {
          name: this.task,
        });
        this.getTasks();
      } catch (error) {
        console.log(error);
      }
      this.task = "";
    },
    selectSurvey(task, index) {
      this.survey = task;
      this.activeSurveyIndex = index;
      this.surveyLink = {
        path: "/survey",
        query: { from: this.survey.name, to: "admin" },
      };
      this.getQuestions();
      console.log(this.survey.name);
    },
    async getQuestions() {
      try {
        if (this.survey) {
          let response = await axios.get(
            `/api/survey/${this.survey.name}/questions`
          );
          this.questions = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addQuestion() {
      try {
        let response = await axios.post(
          `/api/survey/${this.survey.name}/question`,
          {
            question: this.question.question,
            answers: this.question.answers,
          }
        );
        this.question._id = response.data._id;
        this.question.question = "Question";
        this.question.answers = [];
        this.getQuestions();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteQuestion(questionId) {
      try {
        await axios.delete(`/api/survey/question/${questionId}`);
        this.getQuestions();
      } catch (error) {
        console.log(error);
      }
    },
    addOption(question) {
      question.answers.push({
        number: Date.now(),
        answer: `Option ${question.answers.length + 1}`,
      });
    },
    async editQuestion(question) {
      try {
        await axios.put(`/api/survey/question/${question._id}`, {
          answers: question.answers,
          question: question.question,
          correct: question.correct,
        });
        // this.getQuestions();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteDBAnswer(question, answerNum) {
      try {
        await axios.delete(
          `/api/survey/question/${question._id}/answer/${answerNum}`
        );
        this.deleteAnswer(question, answerNum); // don't make an unnecessary api call?
      } catch (error) {
        console.log(error);
      }
    },
    deleteAnswer(question, answerNum) {
      question.answers = question.answers.filter(
        (answer) => answer.number != answerNum
      );
    },
  },
};
</script>
