<template>
  <div class="card round">
    <img class="roundImg Image" src="../assets/dad.jpg" alt="failed to load the image">
    <p>Call Dad</p>
    <p>{{image}}</p>
    <img class="smallImage" src="../assets/phone.png" alt="failed to load the image">
  </div>
  <br> <br>
  <div class="card round">
    <img class="roundImg Image" src="../assets/mom.jpg" alt="failed to load the image">
    <p>Call Mom</p>
    <p>{{image}}</p>
    <img class="smallImage" src="../assets/phone.png" alt="failed to load the image">
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "CareTakerCard",
  setup(){
    const image = "img";
    return {image}
  }
}
</script>

<style scoped>

.card {
  background-color:white;
  width: 25%;
  padding: 50px 0;
  margin: auto;
}
.smallImage {
  width: 10%;
}
.Image {
   width: 50%;
}
.card p{
  font-size: 36px;
}
.roundImg{
  border-radius: 50%;
}
.round{
  border-radius: 3%;
}
</style>