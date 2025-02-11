import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    loader: false,
  },
  getters: {
    getLoaderValue(state) {
      return state.loader;
    },
  },
  mutations: {},
  actions: {
    async myAction() {
      this.state.loader = true;
      console.log(this.state.loader, "verevic");
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data, "1111111111");
      } catch {
        console.log("error");
      } finally {
        this.state.loader = false;
        console.log(this.state.loader, "takic");
      }
    },
  },
  modules: {},
});
