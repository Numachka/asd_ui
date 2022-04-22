<template>
  <div>
    <router-link :to="{name: 'LoggedOut'}">
      <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    </router-link>
  </div>
  <div>
    <PreviousButton/>
  </div>
  <div class="center">
    <router-view></router-view>
  </div>
</template>

<script>

import PreviousButton from "../components/PreviousButton";


export default {
  name: "Register",
  components: {
    PreviousButton,
  }
}
</script>

<style scoped>
span {
  width: 5vw;
}
</style>