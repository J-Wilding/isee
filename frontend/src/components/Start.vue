<template>
  <div class="p-2">
    <h1>Thank you for participating in our research study!</h1>
    <hr />
    <div id="description" class="p-4 text-left">
      <h2>Instructions</h2>
      You be presented with a video to watch and comprehend and a data entry
      task to complete.
      <em>Please view both tasks as equally important.</em> <br />
      <form class="text-center p-6">
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-2"
          placeholder="BYU netid"
          v-model="netid"
        />
      </form>
      <h3 class="text-center">
        When you are ready to begin, <br />
        enter your netid above and press start!
      </h3>
    </div>
    <button
      @click.prevent="start"
      class="p-2 w-36 bg-blue-500 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95"
    >
      Start
    </button>
    <div class="p-2">
      <hr />
      <em class="text-sm">
        We use your netid to coordinate your data between visits througout the
        duration of the study.
      </em>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  data: function () {
    return {
      netid: "",
    };
  },
  methods: {
    start() {
      if (this.netid !== "") {
        this.$root.$data.netid = this.netid;
        this.$router.push("/prep_data");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
