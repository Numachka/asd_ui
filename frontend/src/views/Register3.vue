<template>
  <div>
    <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    <p>
      Now for the interesting bits.<br>
      Behavioral questions to help us calculate a template and set up some design guidelines.<br>
      Please answer the 10 following yes\no questions:
    </p>
    <router-link :to="{name: 'Register2'}">
      <Button background-color="#FAA43E" text="Start" text-color="white"/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Register3",
  components: {Button},
}
</script>

<style scoped>

</style>