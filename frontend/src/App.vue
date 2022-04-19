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
button {
  font-family: 'Comfortaa', sans-serif;
}
body {
  background: linear-gradient(90deg, #07689F 0%, #0988D0 100%);
  display: grid;
  justify-items: center;
  align-items: center;
  height: 99vh;
}
.center {
  display: grid;
  justify-items: center;
  align-items: center;
}
.left {
  display: grid;
  justify-items: left;
}
div {
  text-align: center
}

img {
  border-radius: 5px;
}
input {
  border-radius: 5px;
  padding: 1vw;
  /*display: block;*/
  /*align-items: center;*/
  border: none;
  font-family: 'Comfortaa', sans-serif;
}
p {
  width: 25vw;
}
.ltr {
  text-align: left;
}
.space {
  padding: 2vh;
}
button:hover {
  cursor: pointer;
}
</style>
