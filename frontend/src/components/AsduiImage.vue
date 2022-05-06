<template>

  <div class="image-container">
    <img v-if="url" alt="failed to load the image" :src="url">
  </div>
</template>

<script>
export default {
  name: "Image",
  props: ["url"]
}
</script>

<style scoped>
.image-container {
  width: 60%;
  border: solid 1px #000000;
}

.image-container:hover {
  cursor: pointer;
  background-color: #e7e7e7;
  opacity: 0.8;
}

img {
  width: 30vw;
  height: 10vh;
  border-radius: 50%;
}
</style>