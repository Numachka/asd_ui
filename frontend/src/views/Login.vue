<template>
  <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
  <div>
    <form>
      <p>Email</p>
      <input type="email" required>
      <p>Password</p>
      <input type="password" required>
      <router-link :to="{name: 'MainMenu'}">
        <Button type="submit" background-color="#FAA43E" text="Submit" text-color="white" @click="toggleSubmit"/>
      </router-link>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import Button from "@/components/Button";

export default {
  name: "Login",
  components: {Button},
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
div {
  display: grid;
  justify-items: left;
}
p {
  text-align: left;
}
</style>