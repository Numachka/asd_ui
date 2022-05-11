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
    <i>Tap submit to continue</i>
    <router-link :to="{name: 'IntroQuestions', params: { userID: userID.value }}">
      <asdui-button button-type="submit"/>
    </router-link>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useAsduiStore} from "@/stores/asduiStore";
import AsduiButton from "@/components/General/AsduiButton";

export default {
  name: "Details",
  components: {AsduiButton},
  setup() {
    const asduiStore = useAsduiStore()

    let user = ref({
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       phoneNumber: ''
    })
    let userID = ref("")
    let isSubmit = ref(false);

    return {asduiStore, isSubmit, user, userID}
  },
  methods: {
    toggleSubmit() {
      if (this.asduiStore.registerUser(this.user) > -1) {
        this.isSubmit = true;
      }
    }
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