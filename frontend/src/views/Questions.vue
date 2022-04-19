<template>
  <div v-if= "i < questions.length">
    <p v-if="i <= 3">
      Some visual cues first...
    </p>
    <p v-else-if="i >= 4 && i <= 8">
      Some auditory cues...
    </p>
    <p v-else>
      Lastly, tactile cues...
    </p>
    <h3>
      {{ questions[i] }}
    </h3>
    <div>
      <Button background-color="#519872" text="Yes" text-color="black" @click="saveAnswer(true)"/>
      <Button background-color="#E84855" text="No" text-color="black" @click="saveAnswer(false)"/>
    </div>
  </div>
  <div v-else>
    <router-link :to="{name: 'Magic', params: {result: JSON.stringify(answers_Json)}}">
      <Button background-color="#FAA43E" text="Next" text-color="white"/>
    </router-link>
    <p>
      {{ answers }}
    </p>
    <p>
      {{ answers_Json }}
    </p>
  </div>
</template>

<script>
import Button from "../components/Button";
import {ref} from 'vue'

export default {
  name: "Questions",
  components: {Button},
  setup() {
    let answers = ref([]);
    let answers_Json = ref({});
    let i = ref(0);
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
      answers_Json.value[questions.value[i.value++]] = answer;
      answers.value.push(answer);
    };
    return {questions, i, saveAnswer, answers, answers_Json}
  }
}
</script>

<style scoped>
  h3 {
    width: 25vw;
    height: 5vh;
  }
</style>