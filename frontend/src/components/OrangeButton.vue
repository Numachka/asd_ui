<template>
  <button>
    <strong>{{text}}</strong>
  </button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "OrangeButton",
  props: ["text"],
}
</script>

<style scoped>
button {
  background-color: #FAA43E;
  width: 10vw;
  height: 5vh;
  border-radius: 1vh;
  font-size: 25px;
}
button strong{
  color: #FFFFFF;
}
button:hover{
  cursor: pointer;
}
</style>