import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/StartPage.vue";
import VideoTask from "../views/VideoTask.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start Page",
    component: StartPage,
  },
  {
    path: "/video_task",
    name: "Video Task",
    component: VideoTask,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
