<template>
  <div>
    <asdui-logo/>
    <p>Welcome back!</p>
    <i>Enter your credentials below</i>
    <div v-if="wrongCredential">The entered username or password is incorrect! <b @click="wrongCredential=false">X</b>
    </div>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" type="email" required placeholder="asdui@mail.com">
      <label for="password">Password</label>
      <input v-model="password" type="password" required placeholder="******">
      <span>
      <asdui-button button-type="submit"/>
      <asdui-button button-type="back" @click="$router.back()"/>
    </span>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAsduiStore} from "@/stores/asduiStore";

import AsduiButton from "@/components/general/MenuButton";
import AsduiLogo from "@/components/general/AsduiLogo";


export default {
  name: "Login",
  loginSuccessful: false, /* When true will switch to the next page according to the user */
  components: {
    AsduiButton,
    AsduiLogo,
  },
  setup() {
    const asduiStore = useAsduiStore()
    const router = useRouter()
    const email = ref("")
    const password = ref("")

    let loginSuccessful = ref(false) /* When true will switch to the next page according to the user */
    let wrongCredential = ref(false)

    return {router, asduiStore, wrongCredential, loginSuccessful, email, password}
  },
  methods: {
    async login() {
      console.log("login")
      const response = await this.asduiStore.loginUser(this.email, this.password);
      console.log(response)
      if(response) {
        await this.router.push({path: '/main-menu'});
      } else {
        this.wrongCredential = true
        setTimeout(() => {
          this.wrongCredential = false;
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
div {
  display: grid;
  justify-items: center;
  align-items: center;
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