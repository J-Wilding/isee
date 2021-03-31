<template>
  <div
    class="box flex flex-col items-center justify-evenly w-full font-sm lg:flex-row bg-gray-300 shadow-inner rounded-md"
  >
    <div
      class="w-1/3 m-8 p-4 card bg-gray-200 shadow-lg rounded-md"
      v-for="(employee, index) in lastThree"
      :key="employee.id"
    >
      <div class="container">
        <div v-if="index === 0" class="flex justify-between p-2 text-lg">
          <button
            class="px-8 hover:text-blue-800"
            @click.prevent="editItem(employee)"
          >
            <i class="fas fa-edit"></i>
          </button>
          <button
            class="px-8 hover:text-red-800"
            @click.prevent="removeItem(employee)"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div class="enteredInfo">
          <div class="text-center pl-2">
            <h1>{{ employee.first_name }} {{ employee.last_name }}</h1>
            <h3>{{ employee.department }}:</h3>
            <h3>{{ employee.job }}</h3>
          </div>
        </div>
        <div class="p-2 mx-auto">
          <p class="pb-2">{{ employee.email }}</p>
          <div class="w-max mx-auto py-2">
            <p>{{ employee.address }}</p>
            <p>
              {{ employee.city }}, {{ employee.state }}
              {{ employee.zip_code }}
            </p>
          </div>
          <p class="pt-2">{{ employee.ssn }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submissions",
  computed: {
    lastThree() {
      return this.$root.$data.dataEntered.slice(-3).reverse();
    },
  },
  methods: {
    editItem(item) {
      this.$root.editDataEntered(item);
    },
    removeItem(item) {
      this.$root.$data.dataEntered.splice(item.id, 1);
    },
  },
};
</script>
