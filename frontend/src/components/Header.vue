<template>
  <p id="header">
    {{ text }}
  </p>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Header",
  props: ["text"],

}
</script>

<style scoped>

</style>