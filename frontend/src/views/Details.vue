<template>
  <div v-if="!isSubmit">
    <p>
      Enter your cared’s details,<br> We promise no to share.
    </p>
    <form>
      <p>Name</p>
      <input type="text" required>
      <p>Email</p>
      <input type="email" required>
      <p>Password</p>
      <input type="password" required>
      <p>Phone Number</p>
      <input type="text"  required>
      <Button type="submit" background-color="#FAA43E" text="Submit" text-color="white" @click="toggleSubmit"/>
      <Input background-color="#bbbbbb" text="Clear" text-color="white" type="reset" value="Reset"/>
    </form>
  </div>
  <div v-else>
    <p>The details have been confirmed by the system</p>
    <router-link to="/register/IntroQuestions">
      <Button background-color="#FAA43E" text="Next" text-color="white"/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";
import Input from "../components/Input";
import {ref} from 'vue'

export default {
  name: "Details",
  components: {Button, Input},
  setup() {
    let isSubmit = ref(false);
    const toggleSubmit = () => {
      isSubmit.value = !isSubmit.value;
    }
    return {toggleSubmit, isSubmit}
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