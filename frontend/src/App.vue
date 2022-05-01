<template>
  <router-view/>
</template>

<style>

@font-face {
  font-family: "Comfortaa";
  src: local("Comfortaa"),
  url("assets/Comfortaa/Comfortaa-VariableFont_wght.ttf") format("truetype");
}

body {
  background: linear-gradient(90deg, #07689F 0%, #0988D0 100%);
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 99vh;
  margin: 0;
  padding: 0;
  font-family: 'Comfortaa', sans-serif;
  color: white;
}

p {
  font-size: 1.5em;
}

.asduiWindow {
  display: grid;
  font-size: 1.2rem;
}

</style>
