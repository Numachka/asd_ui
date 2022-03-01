<template>
  <h1>Please login or register to continue</h1>
  <router-link :to="{name: 'Login'}"><WhiteButton text="Log in"/></router-link>
  <br><br><br>
  <router-link :to="{name: 'Register'}"><OrangeButton text="REGISTER"/></router-link>
</template>

<script>
import OrangeButton from "../components/OrangeButton";
import WhiteButton from "../components/WhiteButton";
export default {
  name: "Welcome",
  components: {OrangeButton, WhiteButton},
}
</script>

<style scoped>

h1 {
  color: #FFFFFF;
}

</style>