<template>
  <div>
    <p>Please login or <br> register to continue</p>
    <router-link :to="{name: 'Login'}">
      <WhiteButton text="Log in"/>
    </router-link>
    <router-link :to="{name: 'Register'}">
      <OrangeButton text="REGISTER"/>
    </router-link>
  </div>
</template>

<script>
import OrangeButton from "../components/OrangeButton";
import WhiteButton from "../components/WhiteButton";

export default {
  name: "LoggedOut",
  components: {OrangeButton, WhiteButton},
}
</script>

<style scoped>
div {
  display: grid;
  justify-items: center;
  align-items: center;
}

p {
  text-align: center;
}

</style>