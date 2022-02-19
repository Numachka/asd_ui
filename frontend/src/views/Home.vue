<template>
  <div class="home">
    <CareTakerCard/>

  </div>
</template>

<script>
// @ is an alias to /src
import CareTakerCard from "@/components/CareTakerCard";

export default {
  name: 'Home',
  components: {
    CareTakerCard,
  }
}
</script>

