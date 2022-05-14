<template>
  <div class="logo">
    <asdui-logo/>
  </div>
  <router-view class="asdui-window"/>
</template>
<script>
import AsduiLogo from "@/components/general/AsduiLogo";

export default {
  name: 'App',
  components: {
    AsduiLogo
  }
}

</script>
<style>

@font-face {
  font-family: "Comfortaa";
  src: local("Comfortaa"),
  url("assets/Comfortaa/Comfortaa-VariableFont_wght.ttf") format("truetype");
}

body {
  position: relative;
  background: linear-gradient(90deg, #07689F 0%, #0988D0 100%);
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  height: 99vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: 'Comfortaa', sans-serif;
  color: white;
}

p {
  font-size: 1.5em;
}

.asdui-window {
  display: grid;
  justify-items: center;
  align-items: center;
  width: 80%;
  font-size: 1.2rem;
  height: 60vh;
}

</style>
