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
    <router-view></router-view>
  </div>
</template>

<script>

import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";


export default {
  name: "Register",
  components: {
    NextButton,
    PreviousButton,
  }
}
</script>

<style scoped>
span {
  width: 5vw;
}
</style>