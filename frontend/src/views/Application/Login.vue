<template>
  <div class="asdui-window">
    <asdui-logo/>
    <p>Welcome back!</p>
    <i>Enter your credentials below</i>
    <div v-if="wrongCredential">The entered username or password is incorrect!    <b @click="wrongCredential=false">X</b></div>
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
import AsduiButton from "@/components/General/AsduiButton";
import AsduiLogo from "@/components/General/AsduiLogo";
import {useAsduiStore} from "@/stores/asduiStore";


export default {
  name: "Login",
  loginSuccessful: false, /* When true will switch to the next page according to the user */
  components: {
    AsduiButton,
    AsduiLogo,
  },
  setup() {
    const asduiStore = useAsduiStore()

    const email = ref("")
    const password = ref("")

    let loginSuccessful = ref(false) /* When true will switch to the next page according to the user */
    let wrongCredential = ref(false)

    return {asduiStore, wrongCredential, loginSuccessful, email, password}
  },
  methods: {
    login() {
      if (this.asduiStore.loginUser(this.email, this.password)) {
        this.loginSuccessful = true;
      } else {
        this.wrongCredential = true; //TODO change this later in HTML.
      }
    }
  }
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