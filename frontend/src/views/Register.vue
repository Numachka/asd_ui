<template>
  <h2>
    Hi there! Welcome to ASDUI. This app is made for you, the caretakers to customize and fit the user experience for your cared and help them use their mobile phone to their full potential.
  </h2>
  <br>
  <h2>
    Enter the caretaker’s name. Tap next to continue
  </h2>
  <input placeholder="Name here please">
  <br><br><br>
  <router-link :to="{name: 'Information'}"><OrangeButton text="Next"/></router-link>
</template>

<script>
import OrangeButton from "../components/OrangeButton";

export default {
  name: "Register",
  components: {OrangeButton}
}
</script>

<style scoped>
h2 {
  color: #FFFFFF;
}
input {
  height: 5vh;
  width: 15vw;
  border-radius: 1vh;
}
</style>