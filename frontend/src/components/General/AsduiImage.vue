<template>
  <div class="image-container asdui-image">
    <img class="asdui-image-inner" alt="failed to load the image" :src="getImgUrl(url)">
  </div>
</template>

<script>
export default {
  name: "Image",
  props: ["url"],
  setup() {
    const getImgUrl = (url) => {
      return require('@/assets/' + url);
    }

    return {getImgUrl}
  }
}
</script>

<style scoped>
.image-container {
  width: 90%;
  border: solid 1px #000000;
  border-radius: 7px;
}

.image-container:hover {
  cursor: pointer;
  background-color: #e7e7e7;
  opacity: 0.8;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

</style>