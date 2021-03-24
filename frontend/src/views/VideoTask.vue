<template>
  <div>
    <Timer time="420" />
    <div id="content" class="flex items-center bg-gray-300">
      <DataEntry class="w-1/2"/>
      <Video class="w-1/2 px-6" />
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
