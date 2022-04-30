<template>
  <div v-if="!isSubmit">
    <h4>
      Please enter your cared’s details.<br>We promise not to share.
    </h4>
    <div>
      <form>
        <table>
          <tr>
            <td>
              <h4>First Name</h4>
            </td>
            <td>
              <input v-model="user.firstName" required type="text">
            </td>
          </tr>
          <tr>
            <td>
              <h4>Last Name</h4>
            </td>
            <td>
              <input v-model="user.lastName" required type="text">
            </td>
          </tr>
          <tr>
            <td>
              <h4>Email</h4>
            </td>
            <td>
              <input v-model="user.email" required type="email">
            </td>
          </tr>
          <tr>
            <td>
              <h4>Password</h4>
            </td>
            <td>
              <input v-model="user.password" required type="password">
            </td>
          </tr>
          <tr>
            <td>
              <h4>Phone Number</h4>
            </td>
            <td>
              <input v-model="user.phoneNumber" maxlength="11" minlength="10" required type="text">
            </td>
          </tr>
          <tr>
            <td>
              <h4>Date of Birth</h4>
            </td>
            <td>
              <input v-model="user.dateOfBirth" required type="date">
            </td>
          </tr>
          <tr>
            <td>
              <h4>Gender</h4>
            </td>
            <td>
              <select id="gender" v-model="user.gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </td>
          </tr>
        </table>
        <div>
          <Button background-color="#FAA43E" text="Submit" text-color="white" type="submit" @click="toggleSubmit"/>
          <Input class="reset" background-color="#bbbbbb" text="Clear" text-color="white" type="reset" value="Reset"/>
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
import Button from "../components/AsduiButton";
import Input from "../components/Input";
import {ref} from 'vue'

export default {
  name: "Details",
  components: {Button, Input},
  setup() {
    let user = ref({
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phoneNumber: null,
      dateOfBirth: null,
      gender: null,
    });
    let isSubmit = ref(false);
    const toggleSubmit = () => {
      isSubmit.value = !isSubmit.value;
    }
    return {toggleSubmit, isSubmit, user}
  }
}
</script>

<style scoped>

input:not(Input.reset) {
  display: block;
  height: 0.5vh;
  padding: 2vh;
  margin: 0.5vh;
  width: 9vw;
}
select {
  height: 4.5vh;
  margin: 0.5vh;
  width: 11vw;
}
td {
  text-align: left;

}
</style>