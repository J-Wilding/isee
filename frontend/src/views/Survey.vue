<template>
  <div class="w-screen">
    <div class="py-4 bg-gray-100 shadow-inner">
      <form
        class="my-4 p-4 bg-white w-3/4 md:w-6/12 flex flex-col mx-auto shadow-md rounded-xl"
      >
        <h1>
          Survey for task "{{ this.$route.query.from.replace(/_/g, " ") }}"
        </h1>
        <div
          v-for="(question, index) in questions"
          :key="question.id"
          class="text-left text-lg p-4 px-8 my-1 hover:bg-blue-50 rounded-lg"
        >
          <h2>{{ index + 1 }}. {{ question.question }}</h2>
          <div
            v-for="answer in question.answers"
            :key="answer.number"
            class="pl-8 pt-2"
          >
            <input
              type="radio"
              :name="question._id"
              :id="answer._id"
              @change="selectAnswer(question._id, answer._id)"
              :value="answer.number"
            />
            <label class="px-2" :for="answer._id">{{ answer.answer }}</label>
          </div>
        </div>
      </form>
      <button
        @click="submit()"
        class="p-2 w-1/4 bg-blue-500 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Survey",
  // props: ["taskId", "nextRoute"],
  data() {
    return {
      questions: [],
    };
  },
  created() {
    console.log("Loaded");
    this.getQuestions();
  },
  methods: {
    async getQuestions() {
      try {
        let response = await axios.get(
          `/api/survey/${this.$route.query.from}/questions`
        );
        this.questions = response.data;
      } catch (error) {
        // console.log(error);
        this.questions = [
          {
            id: "2584ae1857651d13",
            question: "An error occured in fetching your survey.",
            answers: [
              { id: "1", option: "Jupiter" },
              { id: "2", option: "Saturn" },
              { id: "3", option: "Pluto" },
              { id: "4", option: "Earth" },
            ],
          },
        ];
      }
    },
    selectAnswer(question, answer) {
      console.log(
        this.questions.filter((q) => q._id === question),
        answer
      );
    },
    submit() {
      // axios.post(`/api/surveys/${$route.params.taskId}`)
      console.log(this.$route.params.nextTaskId);
      this.$router.replace(`/${this.$route.query.to}`);
    },
  },
};
</script>
