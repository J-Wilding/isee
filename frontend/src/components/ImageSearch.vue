<template>
  <div class="felx flex-col m-2 bg-blue-200 shadow-lg rounded-md">
    <div class="flex items-center justify-center">
      <img
        src="@/assets/images/TSA_bw/File 12.jpg"
        alt=""
        class="h-3/4 rounded-t-md"
      />
    </div>
    <div class="bg-blue-300 rounded-b-md">
      <button
        class="p-1 mx-2 w-36 bg-red-500 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 my-2"
      >
        Contraband Present
      </button>
      <button
        class="p-1 mx-2 w-36 bg-green-500 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 my-2"
      >
        No Contraband Present
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSearch",
};
</script>
