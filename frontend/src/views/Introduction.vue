<template>
  <p>
    Hi there! <br> Welcome to ASDUI. <br><br> This app is made for you, the caretakers to customize<br>
    and fit the user experience for your cared and help <br> them use their mobile phone to their full potential.
  </p>
  <form @submit="postData" method="post">
    <p>
      Please enter your name
    </p>
    <input type="text" v-model="posts.Name" required>
    <p>
      Please enter your Email
    </p>
    <input type="email" v-model="posts.Email" required>
    <Button type="submit" background-color="#FAA43E" text="submit" text-color="white"/>
  <router-link to="/register/explanation">
    <Button type="submit" background-color="#FAA43E" text="Next" text-color="white"/>
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
  setup(){
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

    return { posts, postData }
  },

}
</script>

<style scoped>

</style>