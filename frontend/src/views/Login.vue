<template>
  <div>
    <router-link :to="{name: 'LoggedOut'}">
      <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    </router-link>
  </div>
  <div class="space center">
    <table>
      <tr>
        <td>
          <PreviousButton/>
        </td>
        <td>
          <NextButton/>
        </td>
      </tr>
    </table>
  </div>
  <div>
    <h1>
      Login
    </h1>
    <form>
      <table>
        <tr>
          <td>
            <h4>Email</h4>
          </td>
          <td>
            <input type="email" required>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Password</h4>
          </td>
          <td>
            <input type="password" required>
          </td>
        </tr>
      </table>
      <router-link :to="{name: 'MainMenu'}">
        <Button type="submit" background-color="#FAA43E" text="Submit" text-color="white"/>
      </router-link>
      <Input class="reset" background-color="#bbbbbb" text="Clear" text-color="white" type="reset" value="Reset"/>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import Input from "../components/Input";
import Button from "../components/Button";
import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";

export default {
  name: "Login",
  components: {
    Button,
    Input,
    NextButton,
    PreviousButton,
  },
setup()
{
  let correctDetails = ref(false);
  const toggleSubmit = () => {
    correctDetails.value = !correctDetails.value;
  }
  return {toggleSubmit, correctDetails}
}
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
</style>