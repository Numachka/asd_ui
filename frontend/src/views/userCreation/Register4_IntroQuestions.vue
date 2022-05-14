<template>
  <div class="asdui-window">
    <p>Now for the interesting bits..</p>
    <p>Behavioral questions help us calculate a template and set up some design guidelines.</p>
    <i>Please answer the 15 following yes\no questions:</i>
    <i>During the questionnaire you can come back and change your answers</i>
    <div>
      <router-link :to="{name: 'Questions', params: { userID: $route.params.userID }}">
        <asdui-button button-type="next"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import AsduiButton from "@/components/general/MenuButton";

export default {
  name: "IntroQuestions",
  components: {AsduiButton},
}
</script>

<style scoped>

i {
  margin: 1vh;
}

</style>