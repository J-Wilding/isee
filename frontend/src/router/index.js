import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/StartPage.vue";
import VideoTask from "../views/VideoTask.vue";
import ImageTask from "../views/ImgSearchTask.vue";
import Survey from "../views/Survey.vue";
import Admin from "../views/Admin.vue";
import Exit from "../views/Exit.vue";
import PrepData from "../views/PrepData.vue";
import PrepVideo from "../views/PrepVideo.vue";
import PrepImageSearch from "../views/PrepImageSearch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: StartPage,
  },
  {
    path: "/prep_data",
    name: "PrepData",
    component: PrepData,
  },
  {
    path: "/prep_video",
    name: "PrepVideo",
    component: PrepVideo,
  },
  {
    path: "/prep_image_search",
    name: "PrepImageSearch",
    component: PrepImageSearch,
  },
  {
    path: "/data_with_video",
    name: "DataWVideo",
    component: VideoTask,
  },
  {
    path: "/data_with_image_search",
    name: "DataWImageSearch",
    component: ImageTask,
  },
  {
    path: "/survey",
    name: "Survey",
    component: Survey,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/exit",
    name: "exit",
    component: Exit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
