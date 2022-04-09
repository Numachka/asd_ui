<template>
  <div>
    <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Register",
  components: {}
}
</script>

<style scoped>

input {
  border-radius: 5px;
  padding: 1vw;
}

div {
  display: grid;
  justify-items: left;
}

p {
  text-align: left;
}
</style>