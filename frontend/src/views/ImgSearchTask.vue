<template>
  <div class="p-2 mx-2 rounded-md shadow-lg bg-gray-200">
    <Timer time="420" />
    <div
      id="content"
      class="flex flex-col-reverse md:flex-row py-2 items-center"
    >
      <DataEntry class="w-full md:w-7/12" />
      <ImageSearch class="w-full md:w-5/12" />
    </div>
    <DataEntered />
  </div>
</template>

<script>
// @ is an alias to /src
import Timer from "@/components/Timer.vue";
import DataEntry from "@/components/DataEntry.vue";
import ImageSearch from "@/components/ImageSearch.vue";

export default {
  name: "ImageTask",
  components: {
    Timer,
    DataEntry,
    ImageSearch,
  },
};
</script>