<template>
  <div class="flex flex-col">
    <InfoCard :employee="currentEmployee" />
    <!-- <form > -->
    <div
      class="form flex flex-col w-1/2 text-left mx-auto bg-blue-200 rounded-md shadow-lg"
    >
      <div class="inputWrapper">
        <label for="name">Name: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="name"
          type="text"
          v-model="name"
        />
      </div>
      <div class="inputWrapper">
        <label for="department">Department: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="department"
          type="text"
          v-model="department"
        />
      </div>
      <div class="inputWrapper">
        <label for="job">Job: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="job"
          type="text"
          v-model="job"
        />
      </div>
      <div class="inputWrapper">
        <label for="email">Email: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="email"
          type="email"
          v-model="email"
        />
      </div>
      <div class="inputWrapper">
        <label for="address">Address: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="address"
          type="text"
          v-model="address"
        />
      </div>
      <div class="inputWrapper">
        <label for="city">City: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="city"
          type="text"
          v-model="city"
        />
      </div>
      <div class="inputWrapper">
        <label for="state">State: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="state"
          type="text"
          v-model="state"
        />
      </div>
      <div class="inputWrapper">
        <label for="zip_code">Zip Code: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="zip_code"
          type="text"
          v-model="zip_code"
        />
      </div>
      <div class="inputWrapper">
        <label for="ssn">SSN: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="ssn"
          type="text"
          v-model="ssn"
        />
      </div>
    </div>
    <!-- </form> -->
    <button
      @click.prevent="getNext"
      class="p-2 w-36 bg-blue-500 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 mx-auto my-2"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
.form {
  display: table;
  border-spacing: 1rem;
}
.inputWrapper {
  display: table-row;
}
label {
  display: table-cell;
  font-weight: 600;
}
input {
  display: table-cell;
}
</style>

<script>
import InfoCard from "./InfoCard.vue";

export default {
  name: "DataEntry",
  components: {
    InfoCard,
  },
  data: function () {
    return {
      name: "",
      address: "",
      city: "",
      department: "",
      email: "",
      id: "",
      job: "",
      ssn: "",
      state: "",
      zip_code: "",
    };
  },
  computed: {
    currentEmployee() {
      return this.$root.$data.employeeInfo[this.$root.$data.currentID];
    },
  },
  methods: {
    getNext() {
      let fname,
        lname = this.name.split(" ");
      this.$root.$data.addData(fname, lname);
      this.name = "";
      return this.$root.$data.currentID++;
    },
  },
};
</script>
