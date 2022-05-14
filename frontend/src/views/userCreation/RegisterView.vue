<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import AsduiLogo from "@/components/general/AsduiLogo";

export default {
  name: "Register",
  components: {
    AsduiLogo,
  }
}
</script>

<style scoped>

div {
  width: 70vw;
  max-width: 500px;
}
</style>