<template>

  <router-view/>

</template>

<style>

@font-face {
  font-family: "Comfortaa";
  src: local("Comfortaa"),
  url("assets/Comfortaa/Comfortaa-VariableFont_wght.ttf") format("truetype");
}
#app {
  font-family: 'Comfortaa', sans-serif;
  color: white;
}

body {
  background: linear-gradient(90deg, #07689F 0%, #0988D0 100%);
  display: grid;
  justify-items: center;
  align-items: center;
  height: 99vh;
}
img {
  border-radius: 5px;
}
input {
  border-radius: 5px;
  padding: 1vw;
  display: block;
  border: none;
}
p {
  width: 25vw;
}

</style>
