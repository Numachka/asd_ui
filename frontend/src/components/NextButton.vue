<template>
  <span class="next" @click="$router.forward()">Next &raquo;</span>
</template>

<script>
export default {
  name: "NextButton"
}
</script>

<style scoped>
span {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}
span:hover {
  background-color: #ddd;
  color: black;
}
.next {
  background-color: #04AA6D;
  color: white;
}
</style>