<template>
  <div>
    <h2>
      Hi there! <br> Welcome to ASDUI.
    </h2>
    <p>
      This app is made for you, the caretakers to customize and fit the user experience
      for your cared ones and help them use their devices to the utmost of their ability.
    </p>
    <p>Lets start with basic information</p>
    <form @submit.prevent="checkUsername">
      <label for="name">Name</label>
      <input v-model="name" required name="name" type="text" placeholder="Moshe">
      <label for="email">Email</label>
      <input v-model="email" required name="email" type="email" placeholder="moshe@mail.com">
      <i v-if="existingUserMessage">This username already exists!</i>
      <asdui-button button-type="submit"/>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useAsduiStore} from "@/stores/asduiStore";
import AsduiButton from "../../components/general/MenuButton";
import router from "@/router";

export default {
  name: "Introduction",
  components: {
    AsduiButton
  },
  setup() {
    const asduiStore = useAsduiStore()
    let name = ref("")
    let email = ref("")
    let existingUserMessage = ref(false)
    const checkUsername = () => {
      if (asduiStore.checkUsername(email.value)) {
        existingUserMessage.value = true;
        setTimeout(() => {
          existingUserMessage.value = false
        }, 2000)
      } else {
        router.push({name: 'Explanation', params: {name: name.value}})
      }
    }

    return {asduiStore, existingUserMessage, name, email, checkUsername}
  },
}
</script>

<style scoped>
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