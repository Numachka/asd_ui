<template>
  <button>
    {{text}}
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
  border-radius: 5px;
  margin: 2vw;
  padding: 1vw;
  box-shadow: none;
}

button {
  color: #FFFFFF;
}
button:hover{
  cursor: pointer;
}
</style>