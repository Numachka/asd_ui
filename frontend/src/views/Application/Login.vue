<template>
  <div class="asduiWindow">
    <asdui-logo/>
    <p>Welcome back!</p>
    <i>Enter your credentials below</i>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" type="email" required placeholder="asdui@mail.com">
      <label for="password">Password</label>
      <input v-model="password" type="password" required placeholder="******">
    </form>
    <span>
      <asdui-button button-type="submit"/>
      <asdui-button button-type="back" @click="$router.back()"/>
    </span>
  </div>
</template>

<script>
import {ref} from "vue";
import AsduiButton from "@/components/AsduiButton";
import AsduiLogo from "@/components/AsduiLogo";
import {asduiStore} from "@/stores/asdui";
import router from "@/router";

export default {
  name: "Login",
  loginSuccessful: false, /* When true will switch to the next page according to the user */
  components: {
    AsduiButton,
    AsduiLogo,
  },
  setup() {
    const asdui = asduiStore()
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
      })
          .then(data => {
            return data.json()
          })
          .then(response => {
            console.log(response)
            router.push('/main-menu')
          })
          .catch(error => {
            console.log(error)
          })
    }
    window.stores = { asdui }

    return {asduiStore, wrongCredential, loginSuccessful, email, password, login}
  },
}
</script>

<style scoped>

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
  margin: 1vh 0;
  padding: 1vh 2vh;
  width: 80%
}

</style>