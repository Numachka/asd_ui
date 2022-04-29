<template>
  <div>
    <router-link :to="{name: 'LoggedOut'}">
      <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    </router-link>
  </div>
  <div class="space center">
    <PreviousButton/>
    <h1>
      Login
    </h1>
    <form>
          <h4>Email</h4>
          <input v-model="email" type="email" required>

          <h4>Password</h4>
          <input v-model="password" type="password" required>
      <Button @click="login" background-color="#FAA43E" text="Submit" text-color="white"/>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import Input from "../components/Input";
import Button from "../components/Button";
import PreviousButton from "../components/PreviousButton";

export default {
  name: "Login",
  loginSuccessful: false, /* When true will switch to the next page according to the user */
  components: {
    Button,
    Input,
    PreviousButton,
  },
  setup() {
    const email = ref("")
    const password = ref("")
    const login = () => {
      console.log(email.value + password.value)
      const url = 'http://localhost:8081/asdui/login';
      // const url = 'http://localhost:8081/asdui/register/introduction/email-check/' + email.value;
      const body = {
        headers: {
          "content-type": "application/json"
        },
        body: {
          username: email.value,
          password: password.value
        },
        method: "POST"
      }
      fetch(url, body)
          .then(data => {
            return data.json()
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
    }
    return { email, password, login }
  },
}
</script>

<style scoped>
input:not(Input.reset) {
  display: block;
  height: 0.4vh;
  padding: 2.5vh;
  margin: 1vh;
  width: 9vw;
}

td {
  text-align: left;
}

td span {
  text-align: center;
}

span {
  width: 5vw;
}

form {
  display: grid;
  justify-items: center;
  align-items: center;
}
</style>