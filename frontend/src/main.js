import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import mock from "./mock_data";

Vue.config.productionTip = false;

const data = {
  netid: "",
  employeeInfo: mock,
  currentID: 3,
  dataEntered: [
    {
      id: 0,
      first_name: "Deni",
      last_name: "Neillans",
      job: "Web Designer II",
      department: "Product Management",
      email: "dneillans0@nsw.gov.au",
      address: "628 Helena Parkway",
      city: "Philadelphia",
      state: "PA",
      zip_code: "19104",
      ssn: "580675535",
    },
    {
      id: 1,
      first_name: "Tore",
      last_name: "Speedin",
      job: "Associate Professor",
      department: "Legal",
      email: "tspeedin1@sakura.ne.jp",
      address: "9699 Service Parkway",
      city: "Orange",
      state: "CA",
      zip_code: "92862",
      ssn: "168-65-8894",
    },
    {
      id: 2,
      first_name: "Harley",
      last_name: "Kleinber",
      job: "Data Coordiator",
      department: "Sales",
      email: "hkleinber2@webmd.com",
      address: "0792 Corscot Junction",
      city: "Jamaica",
      state: "NY",
      zip_code: "11407",
      ssn: "348-16-9742",
    },
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
    if (this.nextID - this.currentID === 1) {
      this.dataEntered.push({
        id: this.currentID,
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
    } else {
      this.dataEntered.splice(this.currentID, 1, {
        id: this.currentID,
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
    }
    this.currentID++;
  },
  editDataEntered(item) {
    // this.dataEntered[item.id]
    this.dataEntered.splice(this.dataEntered.length - 1, 1);
    this.currentID = item.id;
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
