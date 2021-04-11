<template>
  <div class="p-2 mx-2 rounded-md shadow-lg bg-gray-200">
    <div id="content" class="grid grid-cols-9 gap-4 py-2 items-center">
      <Timer
        v-bind:time="45"
        to="data_with_image_search"
        from="data_with_video"
        class="p-4 row-end-2 col-start-7 col-end-9 col-span-1"
      />
      <DataEntry class="row-start-2 row-span-8 col-start-1 col-end-6" />
      <Video
        class="row-start-2 row-span-8 col-start-6 col-span-4 mx-auto w-3/4"
      />
    </div>
    <Submissions />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Timer from "@/components/Timer.vue";
import DataEntry from "@/components/DataEntry.vue";
import Video from "@/components/Video.vue";
import Submissions from "@/components/Submissions.vue";

export default {
  name: "VideoTask",
  components: {
    Timer,
    DataEntry,
    Video,
    Submissions,
  },
  data() {
    return {
      taskName: "data_with_video",
      taskId: "",
    };
  },
  created() {
    this.getTaskId();
  },
  methods: {
    async getTaskId() {
      try {
        const response = await axios.get(`/api/task/${this.taskName}`);
        this.taskId = response.data._id;
        console.log(this.taskId);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
