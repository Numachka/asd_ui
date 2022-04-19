<template>
  <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
  <div class="ltr">
    <form>
      <p>Email</p>
      <input type="email" required>
      <p>Password</p>
      <input type="password" required>
      <br>
      <router-link :to="{name: 'MainMenu'}">
        <Button type="submit" background-color="#FAA43E" text="Submit" text-color="white" />
      </router-link>
      <Input background-color="#bbbbbb" text="Clear" text-color="white" type="reset" value="Reset"/>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import Input from "../components/Input";
import Button from "../components/Button";

export default {
  name: "Login",
  components: {Button, Input},
  setup() {
      let correctDetails = ref(false);
      const toggleSubmit = () => {
          correctDetails.value = !correctDetails.value;
      }
      return {toggleSubmit, correctDetails}
    }
}
</script>

<style scoped>

</style>