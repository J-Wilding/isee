<template>
  <div class="text-6xl font-extrabold text-red-700">
    {{ Math.floor(timerCount / 60) }}:{{ ("0" + (timerCount % 60)).slice(-2) }}
  </div>
</template>

<script>
export default {
  props: ["time", "pushTo", "taskId"],
  data() {
    return {
      timerCount: this.time,
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.$router.push(`/survey/${this.taskId}${this.pushTo}`);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>
