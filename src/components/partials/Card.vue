<script>
  export default {
    props:{
      name: String,
      status: String,
      species: String,
      image: String,
    }
  }
</script>

<template>
  <div class="col mb-3 ">
    <div class="card">
      <img :src="image" class="card-img-top" :alt="name">
      <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <hr>
        <h6 class="card-title">{{status}}</h6>
        <p>{{  species }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card{
  border: 0px;
  cursor: pointer;
  img{
    border-radius: 50%;
    &:hover {
      opacity: 50%;
    }
  }
  h5{
    color: blue;
  }
  hr{
    width: 20%;
    margin: 10px auto;
  }
}
</style>