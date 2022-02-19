<template>
  <h1>Please login or register to continue</h1>
  <button class="login">
    <router-link :to="{name: 'Login'}">LOG IN</router-link>
  </button>
  <br><br><br>
  <button class="register">
    <router-link :to="{name: 'Register'}">REGISTER</router-link>
  </button>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>
a {
  color: #07689F;
  text-decoration: none;
}
.register{
  background: #FFFFFF;
  width: 10vw;
  height: 5vh;
  border-radius: 5vh;
  font-size: 25px;
}
.login{
  background: #FFFFFF;
  width: 10vw;
  height: 5vh;
  border-radius: 5vh;
  font-size: 25px;
}
</style>