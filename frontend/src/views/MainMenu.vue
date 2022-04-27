<template>
  <div>
    <CareTakerCard care-taker="dad.jpg"/>
  </div>
  <div>
    <AppCard image="Youtube.svg" header="YouTube" url="https://www.youtube.com/" />
  </div>
  <div>
    <AppCard image="WhatsApp.svg" header="WhatsApp" url="https://www.whatsApp.com/" />
  </div>
  <div>
    <AppCard image="Facebook.svg" header="Facebook" url="https://www.facebook.com/" />
  </div>
  <div>
    <AppCard image="Spotify.svg" header="Spotify" url="https://www.spotify.com/" />
  </div>
</template>

<script>
import CareTakerCard from "../components/CareTakerCard";
import Header from "../components/Header";
import EditButtonCard from "../components/EditButtonCard";
import EditButton from "../components/EditButton";
import AppCard from "../components/AppCard";

export default {
  name: 'MainMenu',
  components: {
    CareTakerCard,
    Header,
    EditButton,
    EditButtonCard,
    AppCard,
  }
}
</script>
<style scoped>
div {
  margin: 5vh;
}
</style>