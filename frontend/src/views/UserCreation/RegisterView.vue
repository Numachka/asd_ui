<template>
  <div class="asdui-window">
    <asdui-logo/>
    <router-view></router-view>
  </div>
</template>

<script>
import AsduiLogo from "@/components/General/AsduiLogo";
import AsduiButton from "@/components/General/AsduiButton";

export default {
  name: "Register",
  components: {
    AsduiButton,
    AsduiLogo,
  }
}
</script>

<style scoped>
div {
  display: grid;
  justify-items: center;
  width: 70vw;
}
</style>