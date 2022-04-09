<template>
<!--  <div>-->
<!--    <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">-->
<!--    <div v-if=" i < questions.length">-->
<!--      <p>-->
<!--        {{ describes[i] }}-->
<!--      </p>-->
<!--      <h3>-->
<!--        {{ questions[i] }}-->
<!--      </h3>-->
<!--      <Button background-color="#519872" text="Yes" text-color="black" @click="saveAnswer('Yes')"/>-->
<!--      <Button background-color="#E84855" text="No" text-color="black" @click="saveAnswer('No')"/>-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      <router-link to="/register/magic">-->
<!--        <Button background-color="#FAA43E" text="Next" text-color="white"/>-->
<!--      </router-link>-->
<!--      {{ answers }}-->
<!--    </div>-->
<!--  </div>-->
  <div>
    <img alt="Couldn't load the image" src="../assets/miniLogo.jpeg">
    <div v-for="(v,k) in describes1">
      <div v-for="q in v">
        <p>
          {{k}}
        </p>
        <h3 >
          {{q}}
        </h3>
        <Button background-color="#519872" text="Yes" text-color="black" @click="saveAnswer(true)"/>
        <Button background-color="#E84855" text="No" text-color="black" @click="saveAnswer(false)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import {ref} from 'vue'

export default {
  name: "Questions",
  components: {Button},
  setup() {
    let answers = ref([])
    let i = ref(0);
    let describes1 = ref({
      "Some visual cues first...": [
        "Is your cared sensitive to light?",
        "Is your cared easily distracted by movement?",
        "Does your cared easily lose focus on the task in front?",
        "Does your cared tend to stare?"
      ],
      "Some auditory cues...": [
        "Is your cared sensitive to sharp, loud noises?",
        "Does background noise make your cared lose focus?",
        "Does your cared tend to make steady, repeating noises? Ex. drumming, humming.",
        "Does your cared rarely respond to being called by name?",
        "Does your cared scream or tends to not notice being very loud?",
        "Does you cared have a repulsion to being touched?"
      ],
      "Lastly, tactile cues...": [
        "Does you cared have a repulsion to being touched?",
        "Is your cared insensitive to extreme temperatures or pain?",
        "Does your cared make constant physical contact without noticing?"
      ]
    });
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
    return {questions, describes, describes1, i, saveAnswer, answers}
  }
}
</script>

<style scoped>

</style>