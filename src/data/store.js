import { reactive } from 'vue'

export const store = reactive ({
  mainTitle: ' -Rick&Morty- ',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  nameUrl: 'https://rickandmortyapi.com/api/character?name=',
  cardsList:[],
  nameList:[],
  errorString: '',
})