<template>
  <div class="asduiWindow">
    <asdui-logo/>
    <router-view></router-view>
  </div>

</template>

<script>
import AsduiLogo from "@/components/AsduiLogo";
import AsduiButton from "@/components/AsduiButton";

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