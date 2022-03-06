<template>
  <div>
    <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    <h1>
      Done!
    </h1>
    <router-link :to="{name: 'Register7'}">
      <Button background-color="#FAA43E" text="Next" text-color="white"/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Register6",
  components: {Button},
}
</script>

<style scoped>

</style>