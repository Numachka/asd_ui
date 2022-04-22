<template>
  <div>
    <h3>
      Hi there! <br> Welcome to ASDUI.
    </h3>
    <p class="ltr">
      This app is made for you, the caretakers to customize and fit the user experience
      for your cared and help them use their mobile phone to their full potential.
    </p>
    <h3>
      Please enter the following details:
    </h3>
    <div class="center">
      <form>
        <table>
          <tr>
            <td>
              <h4>
                Name
              </h4>
            </td>
            <td>
              <input v-model="posts.name" required type="text">
            </td>
          </tr>
          <tr>
            <td>
              <h4>
                Email
              </h4>
            </td>
            <td>
              <input v-model="posts.email" required type="email">
            </td>
          </tr>
        </table>
        <div>
          <router-link :to="{name: 'Explanation', params: {name: posts.name}}">
            <Button background-color="#FAA43E" text="Next" text-color="white" type="submit"/>
          </router-link>
          <Input background-color="#bbbbbb" class="reset" text="Clear" text-color="white" type="reset" value="Reset"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button"
import Input from "../components/Input"
import {inject, ref} from 'vue'

export default {
  name: "Introduction",
  components: {
    Button,
    Input,
  },
  setup() {
    let posts = ref({
      "name": null,
      "email": null
    });
    return {posts}
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
</style>