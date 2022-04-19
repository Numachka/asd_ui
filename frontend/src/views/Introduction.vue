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
    <div>
      <form method="post" @submit="postData">
        <p>
          Name
        </p>
        <input v-model="posts.name" required type="text">
        <p>
          Email
        </p>
        <input v-model="posts.email" required type="email">
        <br>
        <div>
          <Button background-color="#FAA43E" text="Submit" text-color="white" type="submit"/>
          <router-link :to="{name: 'Explanation', params: {name: posts.name}}">
            <Button background-color="#FAA43E" text="Next" text-color="white" type="submit"/>
          </router-link>
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
    let postData = (e) => {
      this.axios.post("http://localhost:8080", posts.value)
          .then((result) => {
            console.log(result)
          })
      e.preventDefault();
    };

    return {posts, postData}
  },

}
</script>

<style scoped>

</style>