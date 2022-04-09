<template>
  <div>
    <h1>
      Done!
    </h1>
    <p>
      Based on your answers:<br><br>
      Your cared is of the hyper reactive type.<br>
      Visual:
      Sensitivity to lights and sudden movements. Sometimes tend to <br>

      Auditory:
      Sensitive to sharp and loud noises. Tendency to tap to make some reperating nises.<br>

      Tactile:
      Sensitivty to touch, uncomfortable in some clothes.<br>

      In our design we will try to keep it mild and comfortable...<br>
      One card at a time.<br>

      Easy, natural colors. No sudden movements and pop ups.<br>

      Mellow sounds, no sharp notifications.<br>

      No vibration. <br>
    </p>
    <router-link :to="{name: 'LoggedOut'}">
      <Button background-color="#FAA43E" text="Next" text-color="white"/>
    </router-link>  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Result",
  components: {Button},

}
</script>

<style scoped>

</style>