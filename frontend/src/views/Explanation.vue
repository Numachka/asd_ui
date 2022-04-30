<template>
  <div class="ltr">
    <h3>
      Welcome, {{ $route.params.name }}
    </h3>
    <p>
      ASDUI tries it’s best to be customizable so that you can help
      your cared use it as best as they can. <br><br>
      Not every one is a designer though... <br><br>
      We’ve studied the different behaviours and created some
      template ideas to fit as close as possible to the general requirements as close as possible.<br><br>
      All that’s left is to choose one and add for you to add the finishing touches in case you want to. <br><br>
      The process includes some basic details about the cared including some behavioral questions.<br><br>
      We promise not to share anything with anyone. It will only be used to generate the template.
    </p>
    <div>
      <router-link :to="{name: 'Details'}">
        <Button background-color="#FAA43E" text="Next" text-color="white"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "../components/AsduiButton";

export default {
  name: "Explanation",
  components: {Button},
}
</script>

<style scoped>

</style>