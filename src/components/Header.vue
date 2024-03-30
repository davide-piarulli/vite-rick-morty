<script>
import axios from "axios";
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
      name: "",
    };
  },
  methods: {
    startSearch() {
      console.log("ricerca");
      this.store.queryParams={
        name: this.name
      }
      this.$emit("startSearch");
      // resetto il campo di ricerca
      this.name="";
    },
  },
};
</script>

<template>
  <div class="text-center my-5">
    <h1>{{ store.mainTitle }}</h1>

    <div class="container d-flex justify-content-center">
      <input
        v-model.trim="name"
        @keyup.enter="startSearch()"
        class="form-control w-25"
        list="searchCharacter"
        id="exampleDataList"
        placeholder="Search Character"
      />
      <datalist id="searchCharacter">
        <option
          v-for="card in this.store.cardsList"
          :key="card.id"
          :value="card.name"
        ></option>
      </datalist>

      <input
        class="form-control w-25"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Select Status"
      />
      <datalist id="datalistOptions">
        <option
          v-for="card in this.store.cardsList"
          :key="card.id"
          :value="card.status"
        ></option>
      </datalist>

      <button
        type="button"
        class="btn btn-primary mx-1"
        @click="startSearch()"
        >Search</button>
      <button type="button" class="btn btn-warning mx-1">Reset</button>
    </div>

    <div class="text-center my-5">
      <p>Risultati trovati:{{ this.store.cardsList.length }} </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
