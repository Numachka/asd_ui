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
      }
      return {design}
    }
  }
}
</script>

<style scoped>
input:hover {
  cursor: pointer;
}
</style>