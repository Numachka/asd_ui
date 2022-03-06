<template>
  <button :style="style.design">
    {{text}}
  </button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Button",
  props: ["text", "textColor", "backgroundColor"],
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
/*button {*/
/*  color: white;*/
/*  font-family: 'Comfortaa', cursive, sans-serif;*/
/*  border-radius: 5px;*/
/*  margin: 2vw;*/
/*  padding: 1vw;*/
/*  box-shadow: none;*/
/*}*/
button:hover{
  cursor: pointer;
}
</style>