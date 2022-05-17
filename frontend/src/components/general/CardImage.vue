<template>
  <div :class="size" class="image-container card-image">
    <img class="asdui-image-inner" alt="failed to load the image" :src="getImgUrl(url)">
  </div>
</template>

<script>
export default {
  name: "Image",
  props: ["url", "size"],
  setup() {
    const getImgUrl = (url) => {
      try {
        if (!url) {
          return require('../../../../backend/src/main/resources/userImages/0-admin/temp-woman');
        }
        return require('../../../../backend/src/main/resources/userImages/' + url);
      } catch (exc) {
        return ""
      }
    }

    return {getImgUrl}
  }
}
</script>

<style scoped>
.image-container {
  width: 90%;
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

.very-small {
  width: 80%;
  height: 60%;
}

.small {
  width: 85%;
  height: 65%;
}

.medium {
  width: 90%;
  height: 70%;
}

.large {
  width: 95%;
  height: 75%;
}

.very-large {
  width: 100%;
  height: 80%;
}
</style>