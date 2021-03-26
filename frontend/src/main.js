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
    // {
    //   id: 0,
    //   first_name: "",
    //   last_name: "",
    //   job: "",
    //   department: "",
    //   email: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   zip_code: "",
    //   ssn: "",
    // },
  ],
  imgSearchData: [
    // {
    //   imageID: integer,
    //   hasContraband: Boolean,
    // },
  ],
  getDataEntered() {
    return this.dataEntered;
  },
  addDataEntered(
    first,
    last,
    email,
    job,
    dept,
    address,
    city,
    state,
    zip,
    ssn
  ) {
    this.dataEntered.push({
      first_name: first,
      last_name: last,
      job: job,
      department: dept,
      email: email,
      address: address,
      city: city,
      state: state,
      zip_code: zip,
      ssn: ssn,
    });
    this.currentID += 1;
  },
  getImgSearchData() {
    return this.imgSearchData;
  },
  addImgSearchData(imageID, participantLabel) {
    this.imgSearchData.push({
      imageID: imageID,
      hasContraband: participantLabel, // Participant label
    });
  },
};

new Vue({
  router,
  data: data,
  render: (h) => h(App),
}).$mount("#app");
