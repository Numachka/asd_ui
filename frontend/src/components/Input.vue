<template>
  <input :style="style.design">
</template>

<script>

export default {
  name: "Input",
  computed: {
    style() {
      let design = {
        'background-color': this.backgroundColor,
        'color': this.textColor,
        'border-radius': '5px',
        'margin': '0.7vw',
        'padding': '1vw',
        'width': '7vw',
        'height': '6vh'
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