<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <Start />
  </div>
</template>

<script>
// @ is an alias to /src
import Start from "@/components/Start.vue";

export default {
  name: "StartPage",
  components: {
    Start,
  },
};
</script>
