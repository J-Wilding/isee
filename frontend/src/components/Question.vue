<template>
  <div>
    <h2>
      {{ question.question }}
    </h2>
    <form>
      <div v-for="answer in question.answers" :key="answer.id">
        <input type="radio" :name="question.name" :id="answer.id" />
        <label :for="answer.id">
          {{ answer.answer }}
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "question",
  props: {
    question: Object,
  },
};
</script>
