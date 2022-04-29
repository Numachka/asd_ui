<template>
  <button :style="style.design" type="button">
    {{text}}
  </button>
</template>

<script>

export default {
  name: "Button",
  props: ["text", "textColor", "backgroundColor"],
  computed: {
    style() {
      let design = {
        'background-color': this.backgroundColor,
        'color': this.textColor,
        'border-radius': '5px',
        'margin': '0.7vw',
        'padding': '0.5vw',
        'border': 'none',
        'width': '7vw',
        'height': '6vh'
      }
      return {design}
    }
  }
}
</script>

<style scoped>

</style>