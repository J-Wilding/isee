import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  netid: 'jrw265',
  dataEntered: [
    {
      id: 1,
      probl: "This app is not completely written yet.",
      name: "Emma"
    }
  ],
  getDataEntered() {
    return this.dataEntered;
  },
  addData(name, problem) {
    this.tickets.push({
      id: this.currentID,
      problem: problem,
      name: name
    });
    this.currentID += 1;
  }
};

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount("#app");
