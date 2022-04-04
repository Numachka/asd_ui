<template>
  <header :style="style.design">
    {{headerText}}
  </header>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Header",
  setup(){
    let headerText = ref("Hello User");
    let fontSize = ref('25px');
    let textColor = ref('white');
    return {fontSize, textColor, headerText}
  },
  computed: {
    style() {
      let design = {
        'font-size': this.fontSize,
        'color': this.textColor,
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

</style>