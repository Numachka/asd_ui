<template>
  <p>
    Hi there! <br> Welcome to ASDUI. <br><br> This app is made for you, the caretakers to customize<br>
    and fit the user experience for your cared and help <br> them use their mobile phone to their full potential.
  </p>
  <form>
    <p>
      Please enter your name
    </p>
    <input type="text" required>
    <p>
      Please enter your Email
    </p>
    <input type="email">
  <router-link to="/register/explanation">
    <Button type="submit" background-color="#FAA43E" text="Next" text-color="white"/>
  </router-link>
  </form>
</template>

<script>
import Button from "../components/Button";
import Input from "../components/Input";


export default {
  name: "Introduction",
  components: {
    Button,
    Input,
  },
}
</script>

<style scoped>

</style>