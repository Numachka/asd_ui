<template>
  <div class="ltr space">
    <p>
      Now for the interesting bits.<br>
      Behavioral questions to help us calculate a template and set up some design guidelines.<br>
    </p>
    <h4>
      Please answer the 10 following yes\no questions:
    </h4>
    <div>
      <router-link :to="{name: 'Questions'}">
        <Button background-color="#FAA43E" text="Start" text-color="white"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "IntroQuestions",
  components: {Button},
}
</script>

<style scoped>

</style>