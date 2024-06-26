import { reactive } from "vue";

export const store = reactive({
  mainTitle: " -Rick&Morty- ",
  apiUrl: "https://rickandmortyapi.com/api/character",
  cardsList: [],
  statusList: [],
  errorString: "",
  queryParams: {
    name: "",
    status: "",
  },
});
