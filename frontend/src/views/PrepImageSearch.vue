<template>
  <div>
    <Timer
      v-bind:time="45"
      to="data_with_video"
      from="prep_image_search"
      class="p-4"
    />
    <ImageSearch />
  </div>
</template>

<script>
import ImageSearch from "@/components/ImageSearch.vue";
import Timer from "@/components/Timer.vue";
export default {
  name: "PrepVideo",
  components: {
    Timer,
    ImageSearch,
  },
  mounted() {
    alert("Are you ready to begin?");
  },
};
</script>
