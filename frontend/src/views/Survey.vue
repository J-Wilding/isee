<template>
  <div class="w-screen">
    Task ID: {{ $route.params.taskId }} | {{ $route.params.nextRoute }}
    <form class="w-3/4 md:w-6/12 flex flex-col mx-auto">
      <div
        v-for="(question, index) in questions"
        :key="question.id"
        class="text-left text-lg"
      >
        <h2>{{ index + 1 }}. {{ question.question }}</h2>
        <div v-for="answer in question.answers" :key="answer.id" class="pl-8">
          <input
            type="radio"
            :name="question.tag"
            :id="question.id + answer.id"
          />
          <label class="px-2" :for="question.id + answer.id">{{
            answer.option
          }}</label>
        </div>
      </div>
    </form>
    <button
      @click="submit()"
      class="p-2 w-36 bg-blue-500 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95"
    >
      Continue
    </button>
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
        console.log(this.taskId);
        const response = await axios.get(
          `/api/survey/${this.taskId}/questions`
        );
        this.questions = response.data;
      } catch (error) {
        // console.log(error);
        this.questions = [
          {
            id: "2584ae1857651d13",
            question: "What is the largest planet in our Solar System?",
            tag: "planets2",
            answers: [
              { id: "1", option: "Jupiter" },
              { id: "2", option: "Saturn" },
              { id: "3", option: "Pluto" },
              { id: "4", option: "Earth" },
            ],
          },
          {
            id: "354831",
            question: "What is the next largest planet in our Solar System?",
            tag: "planets",
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
    submit() {
      // axios.post(`/api/surveys/${$route.params.taskId}`)
      console.log(this.$route.params.nextRoute);
      this.$router.replace("/" + this.$route.params.nextRoute);
    },
  },
};
</script>
