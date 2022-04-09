<template>
  <div>
    <img src="../assets/logo.jpeg" alt="Couldn't load the image">
    <p>Please login or <br> register to continue</p>
    <router-link :to="{name: 'Login'}">
      <Button text="Log in" text-color="#07689F" background-color="white"/>
    </router-link>
    <router-link to="/register/page0">
      <Button text="REGISTER" text-color="white" background-color="#FAA43E"/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "LoggedOut",
  components: {Button},
}
</script>

<style scoped>
div {
  display: grid;
  justify-items: center;
  align-items: center;
}

p {
  text-align: center;
}

</style>