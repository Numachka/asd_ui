<template>
  <div>
    <CareTakerCard/>
  </div>
</template>

<script>
import CareTakerCard from "../components/CareTakerCard";

export default {
  name: 'MainMenu',
  components: {
    CareTakerCard,
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