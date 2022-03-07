<template>
  <div>
    <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    <div v-if=" i < questions.length">
      <p>
        {{ describes[i] }}
      </p>
      <h3>
        {{ questions[i] }}
      </h3>
      <Button background-color="#519872" text="Yes" text-color="black" @click="saveAnswer('Yes')"/>
      <Button background-color="#E84855" text="No" text-color="black" @click="saveAnswer('No')"/>
    </div>
    <div v-else>
      <router-link :to="{name: 'Register5'}">
        <Button background-color="#519872" text="Yes" text-color="black"/>
        <Button background-color="#E84855" text="No" text-color="black"/>
      </router-link>
      {{ answers }}
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import {ref} from 'vue'

export default {
  name: "Register4",
  components: {Button},
  setup() {
    let answers = ref([])
    let i = ref(0);
    let describes = ref([
      "Some visual cues first...",
      "Some visual cues first...",
      "Some visual cues first...",
      "Some visual cues first...",
      "Some auditory cues...",
      "Some auditory cues...",
      "Some auditory cues...",
      "Some auditory cues...",
      "Some auditory cues...",
      "Lastly, tactile cues...",
      "Lastly, tactile cues...",
      "Lastly, tactile cues..."
    ]);
    let questions = ref([
      "Is your cared sensitive to light?",
      "Is your cared easily distracted by movement?",
      "Does your cared easily lose focus on the task in front?",
      "Does your cared tend to stare?",
      "Is your cared sensitive to sharp, loud noises?",
      "Does background noise make your cared lose focus?",
      "Does your cared tend to make steady, repeating noises? Ex. drumming, humming.",
      "Does your cared rarely respond to being called by name?",
      "Does your cared scream or tends to not notice being very loud?",
      "Does you cared have a repulsion to being touched?",
      "Is your cared insensitive to extreme temperatures or pain?",
      "Does your cared make constant physical contact without noticing?"
    ]);
    const saveAnswer = (answer) => {
      i.value++;
      answers.value.push(answer);
    };
    return {questions, describes, i, saveAnswer, answers}
  }
}
</script>

<style scoped>

</style>