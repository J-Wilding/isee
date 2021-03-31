<template>
  <div class="p-2 mx-2 rounded-md shadow-lg bg-gray-200">
    <div
      id="content"
      class="flex flex-col-reverse md:flex-row py-2 items-center"
    >
      <DataEntry class="w-full md:w-7/12" />
      <div
        class="flex flex-col w-full md:w-5/12 px-6 items-center justify-center"
      >
        <Timer v-bind:time="60" pushTo="" class="p-4" />
        <ImageSearch />
      </div>
    </div>
    <Submissions />
  </div>
</template>

<script>
// @ is an alias to /src
import Timer from "@/components/Timer.vue";
import DataEntry from "@/components/DataEntry.vue";
import ImageSearch from "@/components/ImageSearch.vue";
import Submissions from "@/components/Submissions.vue";

export default {
  name: "ImageTask",
  components: {
    Timer,
    DataEntry,
    ImageSearch,
    Submissions,
  },
};
</script>
