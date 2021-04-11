<template>
  <div id="app">
    <div id="wrapper" class="pb-14">
      <div class="flex justify-between items-center">
        <div id="nav">
          <router-link to="/">Start Over</router-link> |
          <router-link to="/606557849ae01319ec644cf5"
            >Intro Data Entry</router-link
          >
          |
          <router-link to="/6065459c2cf02612e142454f"
            >Intro Video Attention</router-link
          >
          |
          <router-link to="/606545a42cf02612e1424550"
            >Intro Image Search</router-link
          >
          |
          <router-link to="/606545b92cf02612e1424551"
            >Data Entry with Video</router-link
          >
          |
          <router-link to="/606545c32cf02612e1424552"
            >Data Entry with Image Search</router-link
          >
          |
          <router-link to="/exit">Exit Page</router-link>
        </div>
        <router-link to="/Admin" class="text-red-800 p-2 mr-4 font-bold"
          >Admin</router-link
        >
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
