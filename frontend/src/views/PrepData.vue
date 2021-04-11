<template>
  <div>
    <Timer v-bind:time="45" to="prep_video" from="prep_data" class="p-4" />
    <DataEntry class="row-start-2 row-span-8 col-start-1 col-end-6" />
    <Submissions />
  </div>
</template>

<script>
import DataEntry from "@/components/DataEntry.vue";
import Timer from "@/components/Timer.vue";
import Submissions from "@/components/Submissions.vue";
export default {
  name: "PrepVideo",
  components: {
    Timer,
    DataEntry,
    Submissions,
  },
  mounted() {
    alert("Are you ready to begin?");
  },
};
</script>
