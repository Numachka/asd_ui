<template>
  <asdui-logo/>
  <asdui-button button-type="return" class="return"/>
  <router-view></router-view>
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

</style>