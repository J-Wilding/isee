import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import mock from "./mock_data";

Vue.config.productionTip = false;

const data = {
  netid: "",
  employeeInfo: mock,
  currentID: 1,
  dataEntered: [
    {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      job: "",
      address: "",
      city: "",
      state: "",
    },
  ],
  getDataEntered() {
    return this.dataEntered;
  },
  addData(first, last, email, gender, job, address, city, state) {
    this.dataEntered.push({
      first_name: first,
      last_name: last,
      email: email,
      gender: gender,
      job: job,
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
