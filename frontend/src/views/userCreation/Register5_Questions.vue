<template>
  <div v-if="i < questions.length">
    <p class="counter">{{ i + 1 }} / 15</p>
    <i v-if="i < 8">
      Some visual cues first...
    </i>
    <i v-else-if="i >= 8 && i < 14">
      Some auditory cues...
    </i>
    <i v-else>
      Lastly, tactile cues...
    </i>
    <p class="question">
      {{ questions[i] }}
    </p>
    <div>
      <asdui-button button-type="yes" @click="saveAnswer(true)"/>
      <asdui-button button-type="no" @click="saveAnswer(false)"/>
    </div>
    <div>
      <asdui-button button-type="previous" @click="prevQuest"/>
    </div>
  </div>
  <div class="question-window" v-else>
    <p>Done!</p>
    <p>A summary of your answers and score</p>
    <div class="summary">
      <div class="summaryItem" v-for="(answer, question) in answers_Json">
        <i>{{ question }}</i><i>{{ answer }}</i>
      </div>
    </div>
    <i>
      Click next to continue or previous to change your answers
    </i>
    <div>
      <asdui-button button-type="previous" @click="prevQuest"/>
      <router-link
          :to="{name: 'Magic', params: {userID: $route.params.userId ,resultsJson: JSON.stringify(answers_Json), resultsArray: answers}}">
        <asdui-button button-type="next"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Button from "../../components/general/MenuButton";
import AsduiButton from "@/components/general/MenuButton";

export default {
  name: "Questions",
  components: {AsduiButton, Button},
  setup() {
    let answers = ref([]);
    let answers_Json = ref({});
    let i = ref(0);
    let questions = ref([
      "Is your cared sensitive to light?",
      "Does your cared avoid sunlight?",
      "Is your cared easily distracted by movement?",
      "Does your cared tend to stare?",
      "Does your cared ignore people or objects?",
      "Does your cared often misses details or recognizes object silhouettes?",
      "Does your cared tends to lose focus when things move out of sight?",
      "Does your cared like bright colors and sunlight?",

      "Is your cared sensitive to sharp, loud noises?",
      "Does background noise make your cared lose focus?",
      "Does your cared tend to make steady, repeating noises like drumming or humming?",
      "Does your cared rarely respond to being called by name?",
      "Does your cared scream or tends to not notice being very loud?",
      "Does your cared enojy strange noises and sounds?",

      "Does you cared have a repulsion to being touched?",
    ]);
    const saveAnswer = (answer) => {
      answers_Json.value[questions.value[i.value++]] = answer;
      answers.value.push(answer);
    };
    const prevQuest = () => {
      if (i.value > 0) {
        i.value--;
      }
    };
    return {questions, i, saveAnswer, answers, answers_Json, prevQuest}
  }
}
</script>

<style scoped>
p.question {
  height: 8vh;
  margin: 5vh auto 0
}

.summary {
  display: grid;
}

.summaryItem {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

i {
  font-size: 1.2em;
  margin: 1vh;
}

</style>