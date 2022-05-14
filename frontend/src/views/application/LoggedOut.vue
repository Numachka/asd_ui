<template>
  <div>
    <img alt="Couldn't load the image" src="../../assets/appImages/logo.jpeg">
    <p>Please login or <br> register to continue</p>
    <span>
      <router-link :to="{name: 'Login'}">
        <asdui-button button-type="login"/>
      </router-link>
      <router-link :to="{name: 'Introduction'}">
        <asdui-button button-type="register"/>
      </router-link>
    </span>
  </div>
</template>

<script>
import {onBeforeMount, onUnmounted} from "vue";
import AsduiButton from "@/components/general/MenuButton";

export default {
  name: "LoggedOut",
  components: {
    AsduiButton
  },
  setup() {
    onBeforeMount(() => {
      document.getElementsByClassName('logo')[0].style.display = "none";
    });
    onUnmounted(() => {
      document.getElementsByClassName('logo')[0].style.display = "block";
    });
  }
}
</script>

<style scoped>
div, p {
  display: grid;
  justify-items: center;
  margin: 2vh;
}
</style>