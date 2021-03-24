<template>
  <div class="p-2 mx-2 rounded-md shadow-lg bg-gray-200">
    <Timer time="420" />
    <div
      id="content"
      class="flex flex-col-reverse md:flex-row py-2 items-center"
    >
      <DataEntry class="w-full md:w-7/12" />
      <Video class="w-full md:w-5/12 px-6" />
    </div>
    <DataEntered />
  </div>
</template>

<script>
// @ is an alias to /src
import Timer from "@/components/Timer.vue";
import DataEntry from "@/components/DataEntry.vue";
import Video from "@/components/Video.vue";
import DataEntered from "@/components/DataEntered.vue";

export default {
  name: "VideoTask",
  components: {
    Timer,
    DataEntry,
    Video,
    DataEntered,
  },
};
</script>
