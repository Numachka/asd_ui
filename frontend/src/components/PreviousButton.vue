<template>
  <span class="previous" @click="$router.back()">&laquo; Previous</span>
</template>

<script>
export default {
  name: "PreviousButton"
}
</script>

<style scoped>
.previous {
  background-color: #f1f1f1;
  color: black;
}
span {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}
span:hover {
  background-color: #ddd;
  color: black;
}
</style>