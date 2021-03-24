<template>
  <div class="select-none v">
    <div class="flex flex-col p-6 w-1/2 mx-auto bg-blue-900 text-white">
      <h2>{{ employee.first_name }} {{ employee.last_name }}</h2>
      <h3>
        {{ employee.job }}
      </h3>
      <hr />
      <p>{{ employee.email }} | {{ employee.phone }}</p>
      <div class="border p-2">
        <p>{{ employee.address }}</p>
        <p>{{ employee.city }}, {{ employee.state }}</p>
      </div>
    </div>
    <h3></h3>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    employee: Object,
  },
  created() {
    console.log(this.employee);
  },
};
</script>
