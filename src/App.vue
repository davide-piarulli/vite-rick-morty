<script>
import axios from "axios";
import { store } from "./data/store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {};
  },
  methods: {
    getApi() {
      console.log("GET API");
      axios
        .get(store.apiUrl, {
          params: store.queryParams,
        })
        .then((result) => {
          console.log(store.cardsList);
          store.cardsList = result.data.results;

          // ciclo tutti i characters per prendere tutti gli stati
          store.cardsList.forEach((item) => {
            console.log(item.status);
            // se item.status non è contenuto in store.statusList, lo pusho
            if (!store.statusList.includes(item.status)) {
              store.statusList.push(item.status);
            }
          });
          console.log(store.statusList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <Header @startSearch="getApi" />
  <Main />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
