<template>
  <button>
    <strong>{{text}}</strong>
  </button>
</template>

<script>
export default {
  name: "WhiteButton",
  props: ["text"],
}
</script>

<style scoped>
button {
  width: 10vw;
  height: 5vh;
  border-radius: 1vh;
  font-size: 25px;
}
button strong{
  color: #07689F;
}
button:hover{
  cursor: pointer;
}
</style>