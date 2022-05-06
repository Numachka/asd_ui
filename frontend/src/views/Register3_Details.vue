<template>
  <div v-if="!isSubmit">
    <p>Please enter your cared’s details.</p>
    <i>We promise not to share.</i>
    <div>
      <form @submit.prevent="toggleSubmit">
        <label for="first-name">First Name</label>
        <input v-model="user.firstName" required type="text">
        <label for="last-name">Last Name</label>
        <input v-model="user.lastName" required type="text">
        <label for="email">Email</label>
        <input v-model="user.email" required type="email">
        <label for="password">Password</label>
        <input v-model="user.password" required type="password">
        <label for="phone">Phone Number</label>
        <input v-model="user.phoneNumber" maxlength="11" minlength="10" required type="text">
        <asdui-button button-type="submit"/>
      </form>
    </div>
  </div>
  <div v-else>
    <p>The details have been confirmed by the system</p>
    <router-link :to="{name: 'IntroQuestions', params: { userID: userID.value }}">
      <asdui-button button-type="submit"/>
    </router-link>
  </div>
</template>

<script>
import {ref} from 'vue'
import Input from "../components/Input";
import AsduiButton from "@/components/AsduiButton";
import router from "@/router";

export default {
  name: "Details",
  components: {AsduiButton, Input},
  setup() {
    let user = ref({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
    let userID = ref("")
    let isSubmit = ref(false);
    const toggleSubmit = () => {
      const url = 'http://localhost:8081/asdui/register/details/create-user'
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: user.value.firstName,
          lastName: user.value.lastName,
          email: user.value.email,
          password: user.value.password,
          phoneNumber: user.value.phoneNumber,
        })
      })
          .then(data => {
            return data.json()
          })
          .then(response => {
            console.log(response)
            userID = response.id;
            isSubmit.value = true;
          })
          .catch(error => {
            console.log(error)
          })
    }
    return {toggleSubmit, isSubmit, user, userID}
  }
}
</script>

<style scoped>

form {
  display: grid;
  justify-items: center;
  margin: 2vh 0;
}

form label {
  margin: 0 1vh;
  justify-self: start;
}

form input {
  border: none;
  border-radius: 2px;
  margin: 1vh 0;
  padding: 1vh 2vh;
  width: 80%
}
</style>