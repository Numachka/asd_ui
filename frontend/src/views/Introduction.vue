<template>
  <p>
    Hi there! <br> Welcome to ASDUI. <br><br> This app is made for you, the caretakers to customize
    and fit the user experience for your cared and help them use their mobile phone to their full potential.
  </p>
  <form method="post" @submit="postData">
    <p>
      Please enter your name
    </p>
    <input v-model="posts.Name" required type="text">
    <p>
      Please enter your Email
    </p>
    <input v-model="posts.Email" required type="email">
    <Button background-color="#FAA43E" text="submit" text-color="white" type="submit"/>
    <router-link :to="{name: 'Explanation'}">
      <Button background-color="#FAA43E" text="Next" text-color="white" type="submit"/>
    </router-link>
  </form>
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
      "Name": null,
      "Email": null
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