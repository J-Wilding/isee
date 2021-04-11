<template>
  <div>
    <Timer
      v-bind:time="45"
      to="prep_image_search"
      from="prep_video"
      class="p-4"
    />
    <Video />
  </div>
</template>

<script>
import Video from "@/components/Video.vue";
import Timer from "@/components/Timer.vue";
export default {
  name: "PrepVideo",
  components: {
    Timer,
    Video,
  },
  mounted() {
    alert("Are you ready to begin?");
  },
};
</script>
