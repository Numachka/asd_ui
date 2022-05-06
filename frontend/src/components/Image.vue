<template>
  <img id="image" alt="failed to load the image" :src="name">
</template>

<script>
export default {
  name: "Image",
  props: ["name"]
}
</script>

<style scoped>
img {
  width: 50%;
  border-radius: 50%;
}
</style>