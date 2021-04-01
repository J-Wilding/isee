<template>
  <div id="app">
    <div id="wrapper" class="pb-14">
      <div class="flex justify-between items-center">
        <div id="nav">
          <router-link to="/">Start Over</router-link> |
          <router-link to="/prep_data">Intro Data Entry</router-link> |
          <router-link to="/prep_Video">Intro Video Attention</router-link> |
          <router-link to="/prep_image_search">Intro Image Search</router-link>
          | <router-link to="/video_task">Data Entry with Video</router-link> |
          <router-link to="/image_task"
            >Data Entry with Image Search</router-link
          >
          |
          <router-link to="/exit">Exit Page</router-link>
        </div>
        <router-link to="/Admin" class="text-red-800 p-2 mr-4 font-bold">Admin</router-link>
      </div>
      <router-view />
    </div>
    <div class="flex items-center justify-center h-14 w-full absolute bottom-0">
      <a href="https://github.com/Experience-Info-Sys/isee/"
        >Check out the Github here</a
      >
    </div>
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  @apply text-blue-500;
}
</style>
