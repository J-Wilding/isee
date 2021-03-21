import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

Vue.config.productionTip = false;

const data = {
  netid: "jrw265",
  currentID: 2,
  dataEntered: [
    {
      id: 1,
      first_name: "Judye",
      last_name: "Albutt",
      email: "jalbutt0@slashdot.org",
      gender: "Male",
      address: "427 Raven Parkway",
      city: "Seattle",
      state: "Washington",
    },
  ],
  getDataEntered() {
    return this.dataEntered;
  },
  addData(first, last, email, gender, address, city, state) {
    this.dataEntered.push({
      first_name: first,
      last_name: last,
      email: email,
      gender: gender,
      address: address,
      city: city,
      state: state,
    });
    this.currentID += 1;
  },
};

new Vue({
  router,
  data: data,
  render: (h) => h(App),
}).$mount("#app");
