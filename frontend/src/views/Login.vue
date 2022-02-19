<template>
  <form>
    <input type="email" placeholder="Email" required>
    <br><br>
    <input type="password" placeholder="Password" required>
    <br><br>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Login",
  setup(){
    let email = ''
    let password = ''
    return {email, password}
  }
}
</script>

<style scoped>
  form {
    width: 50%;
    margin: 5vh auto;
    background: white;
    padding: 5vh;
    border-radius: 3%;
  }
  input {
    font-size: 25px;
    display: block;
    padding: 10px 6px;
    width: 80%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
  }
  button{
    background: #FFFFFF;
    width: 10vw;
    height: 5vh;
    border-radius: 5vh;
    font-size: 25px;
  }
</style>