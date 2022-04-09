<template>
  <input :style="style.design">
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Input",
  computed: {
    style() {
      let design = {
        'background-color': this.backgroundColor,
        'color': this.textColor,
        'border-radius': '5px',
        'margin': '2vw',
        'padding': '1vw',
        'border': 'none'
      }
      return {design}
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
input {
  font-family: 'Comfortaa', cursive, sans-serif;
  text-decoration: none;
}
input:hover{
  cursor: pointer;
}
</style>