<template>
  <div v-if="!isSubmit">
    <h3>
      Please enter your cared’s details.<br>We promise not to share.
    </h3>
    <div>
      <form class="ltr">
        <p>Name</p>
        <input required type="text">
        <p>Email</p>
        <input required type="email">
        <p>Password</p>
        <input required type="password">
        <p>Phone Number</p>
        <input required type="text">
        <div>
          <Button background-color="#FAA43E" text="Submit" text-color="white" type="submit" @click="toggleSubmit"/>
          <Input background-color="#bbbbbb" text="Clear" text-color="white" type="reset" value="Reset"/>
        </div>
      </form>
    </div>
  </div>
  <div v-else>
    <p>The details have been confirmed by the system</p>
    <router-link :to="{name: 'IntroQuestions'}">
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

</style>