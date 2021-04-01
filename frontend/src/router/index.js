import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/StartPage.vue";
import VideoTask from "../views/VideoTask.vue";
import ImageTask from "../views/ImgSearchTask.vue";
import Survey from "../views/Survey.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";

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
  {
    path: "/image_task",
    name: "Image Task",
    component: ImageTask,
  },
  {
    path: "/survey/:taskId/:nextRoute",
    name: "Survey",
    component: Survey,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
