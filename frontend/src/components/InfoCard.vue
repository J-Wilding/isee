<template>
  <div class="select-none py-6">
    <div class="flex p-6 w-3/4 mx-auto bg-blue-200 rounded-md shadow-lg">
      <div class="pr-2 w-5/12">
        <h4 class="text-left">Department: <br />{{ employee.department }}</h4>
        <div class="text-left pl-2">
          <h1>{{ employee.first_name }} {{ employee.last_name }}</h1>
          <h3>{{ employee.job }}</h3>
        </div>
      </div>
      <div class="border p-2 mx-auto w-7/12">
        <p class="pb-2">{{ employee.email }}</p>
        <hr />
        <div class="w-max mx-auto py-2">
          <p>{{ employee.address }}</p>
          <p>
            {{ employee.city }}, {{ employee.state }} {{ employee.zip_code }}
          </p>
        </div>
        <hr />
        <p class="pt-2">{{ employee.ssn }}</p>
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
