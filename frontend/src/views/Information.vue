<template>
  <h2>
    Welcome, CaretakerName ASDUI tries it’s best to be customziable so that you can help your cared use it as best as
    they can. Not every one is a designer though... We’ve studied the different behaviours and created some
    template ideas to fit as close as possible to the general requirements as close as possible.
    All that’s left is to choose one and add for you to add the finishing touches in case you want to.
    The process includes some basic details about the cared including some behavioral questions.
    We promise not to share anything with anyone. It will only be used to generate the template.
  </h2>
  <br><br><br>
  <router-link :to="{name: 'CaredDetails'}"><OrangeButton text="Next"/></router-link>
</template>

<script>
import OrangeButton from "../components/OrangeButton";

export default {
  name: "Information",
  components: {OrangeButton}
}
</script>

<style scoped>
h2 {
  color: #FFFFFF;
}
</style>