<template>
  <img src="../assets/Arrow--left.svg" @click="$router.back()">
</template>

<script>

export default {
  name: "PreviousButton",
}
</script>

<style scoped>
  img {
    height: 5vh;
    width: 5vh;
  }

  img:hover {
    cursor: pointer;
  }
</style>