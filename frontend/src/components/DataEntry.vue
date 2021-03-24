<template>
  <div class="flex flex-col">
    <InfoCard :employee="currentEmployee" />
    <form class="flex flex-col items-center">
      <div>
        <label for="name">Name: </label>
        <input id="name" type="text" />
      </div>
    </form>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";

export default {
  name: "DataEntry",
  components: {
    InfoCard,
  },
  // data() {

  // },
  computed: {
    currentEmployee() {
      return this.$root.$data.employeeInfo[this.$root.$data.currentID];
    },
  },
  // methods: {
  //   getNext() {
  //     return this.$root.$data;
  //   },
  // },
};
</script>
