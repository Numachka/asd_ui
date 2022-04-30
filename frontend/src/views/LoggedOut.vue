<template>
  <div>
    <img alt="Couldn't load the image" src="../assets/logo.jpeg">
    <p>Please login or <br> register to continue</p>
    <div>
      <router-link :to="{name: 'Login'}">
        <Button button-type="login"/>
      </router-link>
      <router-link :to="{name: 'Introduction'}">
        <Button button-type="register"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "../components/AsduiButton";

export default {
  name: "LoggedOut",
  components: {Button},
}
</script>

<style scoped>
div, p {
  margin: 2vh;
}
</style>