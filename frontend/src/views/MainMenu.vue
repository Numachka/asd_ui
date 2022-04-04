<template>
  <div>
    <Header/>
    <CareTakerCard/>
  </div>
</template>

<script>
import CareTakerCard from "../components/CareTakerCard";
import Header from "../components/Header";
import EditButton from "../components/EditButton";

export default {
  name: 'MainMenu',
  components: {
    CareTakerCard,
    Header,
    EditButton,
  }
}
</script>
<style scoped>
body {
  background: white;
  display: grid;
  justify-items: center;
  align-items: center;
  height: 99vh;
}
</style>