<script>
import {store} from '../data/store'
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="text-center my-5 ">
    <h1>{{ store.mainTitle }}</h1>

    <div class="container d-flex justify-content-center ">
      <input type="text" class="form-control w-25 mx-3" placeholder="Search Character">
      
      <input class="form-control w-25" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
        <datalist id="datalistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>
      
      
      <button type="button" class="btn btn-primary mx-1 ">Search</button>
      <button type="button" class="btn btn-warning mx-1">Reset</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>