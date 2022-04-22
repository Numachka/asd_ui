<template>
  <div>
    <h2 @click="classifyResult">
      ASDUI magic in the background....
    </h2>
    <h4 class="ltr">
      The result of the questions is: {{ classifyResult.maxScore.name }}
      <br>
      Score: {{ classifyResult.maxScore.score }}
    </h4>
    <div>
      <Button background-color="#FAA43E" text="Show Results" text-color="white" @click="showResults"/>
      <router-link :to="{name: 'Settings'}">
        <Button background-color="#FAA43E" text="Next" text-color="white" type="submit"/>
      </router-link>
    </div>
    <div v-if="isShow && results_json">
      <div class="ltr" v-for="(answer, question) in JSON.parse(results_json)">
        <p>
          {{ question }} <br>
          Answer: {{ answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import {ref} from 'vue'

export default {
  name: "Magic",
  components: {Button},
  setup() {
    let isShow = ref(false);
    let showResults = () => {
      isShow.value = !isShow.value;
    };
    return {isShow, showResults}
  },
  computed: {
    results_array() {
      return this.$route.params.results_array
    },
    results_json() {
      return this.$route.params.results_json
    },
    classifyResult() {
      try {
        let answersArray = this.$route.params.results_array;
        let visualAnswers = answersArray.slice(0, 4);
        let auditoryAnswers = answersArray.slice(4, 9);
        let tactileAnswers = answersArray.slice(9, answersArray.length);
        let visualScore, auditoryScore, tactileScore = 0;
        visualScore = visualAnswers.filter(answer => answer === 'true').length;
        auditoryScore = auditoryAnswers.filter(answer => answer === 'true').length;
        tactileScore = tactileAnswers.filter(answer => answer === 'true').length;
        let scores = [
          {"name": "Visual", "score": visualScore},
          {"name": "Auditory", "score": auditoryScore},
          {"name": "Tactile", "score": tactileScore},
        ];

        let maxScore = scores.reduce(function (prev, current) {
          return (prev.score >= current.score) ? prev : current
        });
        return {maxScore}

      } catch (err) {
        console.log(err.message)
      }
    }
  }
}
</script>

<style scoped>

</style>