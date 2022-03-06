<template>
  <div>
    <img src="../assets/miniLogo.jpeg" alt="Couldn't load the image">
    <p>
      Hi there! <br> Welcome to ASDUI. <br><br> This app is made for you, the caretakers to customize and fit the user
      experience for
      your cared and help them use their mobile phone to their full potential.
      <br><br><br><br>Enter the caretaker’s name.<br> Tap next to continue
    </p>
    <input placeholder="Name here please">
    <router-link :to="{name: 'Register1'}">
      <Button background-color="#FAA43E" text="Next" text-color="white"/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Register",
  components: {Button}
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