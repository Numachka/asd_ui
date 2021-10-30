<template>
  <button class="btn"> {{text}} </button>
</template>

<script>
export default {
  name: "Button",
  props: ["text"]
}
</script>

<style scoped>
button {
  background: black;
  color: white;
  width: 150px;
  height: 40px;
  font-size: 16px;
}
button:hover {
  cursor: pointer;
}
</style>