<template>
  <div>
    <img alt="Couldn't load the image" src="../assets/logo.jpeg">
    <p>Please login or <br> register to continue</p>
    <div>
      <router-link :to="{name: 'Login'}">
        <Button background-color="white" text="Login" text-color="#07689F"/>
      </router-link>
      <router-link :to="{name: 'Introduction'}">
        <Button background-color="#FAA43E" text="Register" text-color="white"/>
      </router-link>
    </div>
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

</style>