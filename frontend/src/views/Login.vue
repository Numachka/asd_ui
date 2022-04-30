<template>
  <div clas="login-page">
    <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    <p>Welcome back!</p>
    <i>Enter your credentials below</i>
      <form @submit.prevent="login">
        <label for="email">Email</label>
        <input v-model="email" type="email" required>
        <label for="password">Password</label>
        <input v-model="password" type="password" required>
      </form>
    <span>
      <asdui-button button-type="submit"/>
      <asdui-button button-type="back"/>
    </span>
  </div>
</template>

<script>
import {ref} from "vue";
import Input from "../components/Input";
import Button from "../components/AsduiButton";
import PreviousButton from "../components/PreviousButton";
import AsduiButton from "@/components/AsduiButton";

export default {
  name: "Login",
  components: {
    AsduiButton,
    Button,
    Input,
    PreviousButton,
  },
  computed: {
    moveToLogin() {
      if (this.loginSuccessful) {
        this.$router.push('MainMenu')
      }
    }
  },
  setup() {
    const email = ref("")
    const password = ref("")
    let loginSuccessful = ref(false) /* When true will switch to the next page according to the user */
    let wrongCredential = ref(false)
    const login = () => {
      console.log(email.value + password.value)
      const url = 'http://localhost:8081/asdui/login';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email.value,
          password: password.value
        })
      }).then(data => {
        return data.json()

      })
          .then(response => {
            console.log(response)
            loginSuccessful.value = true;
            //TODO save state for the application
          })
          .catch(error => {
            console.log(error)
          })
    }
    return {wrongCredential, loginSuccessful, email, password, login}
  },
}
</script>

<style scoped>
div {
  display: grid;
  font-size: 1.2rem;
}

img {
  margin: 0 1vh ;
  width: 3vw;
  height: 3vw;
  border-radius: 8px;
  justify-self: start;
}

i {
  margin: 1vh;
}

form {
  display: grid;
  justify-items: center;
}

form label {
  margin: 0 1vh;
  justify-self: start;
}

form input {
  border: none;
  border-radius: 2px;
  margin: 1vh 0 ;
  padding: 1vh 2vh;
  width: 80%
}

</style>