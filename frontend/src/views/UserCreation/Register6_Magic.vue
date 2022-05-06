<template>
  <div @load="calculateUI">
    <div v-if="isLoading">
      <p>ASDUI magic in the background</p>
      <img src="../../assets/loaders/magicLoader.svg" >
    </div>
    <div v-else>
      <p>Done!</p>
      <p>Your scores are - </p>
      <p>Visual - {{ visualScore }}</p>
      <p>Auditory - {{ auditoryScore }}</p>
      <p>Tactile - {{ tactileScore }}</p>

      <p v-if="!isLoading && visualScore > auditoryScore">
        Based on your answers:<br><br>
        Your cared is of the hyper reactive with visual sensitivity<br>
        Visual:
        Sensitivity to lights and sudden movements. <br>
        Auditory:
        Sensitive to sharp and loud noises. Tendency to tap to make some repeating noises.<br>
        Tactile:
        Sensitivity to touch <br>
        In our design we will try to keep it mild and comfortable...<br>
        One card at a time.<br>
        Easy, natural colors. No sudden movements and pop ups.<br>
        Mellow sounds, no sharp notifications.<br>
        No vibration. <br>
      </p>
      <p v-else>
        Based on your answers:<br><br>
        Your cared is of the hypo reactive with auditory sensitivity<br>
        Visual:
        numbness to lights and sudden movements. <br>
        Auditory:
        numbness to sharp and loud noises.<br>
        Tactile:
        Insensitive to touch <br>
        In our design we will try to keep it colorful and vibrant...<br>
        One card at a time.<br>
        Pop ups to attract attention.<br>
        Sounds included to attract attention.<br>
        Vibration on.<br>
      </p>
      <i>Click to move on to editing the generated interface</i>
      <div>
        <asdui-button button-type="next"/>
      </div>
    </div>
  </div>
</template>

<script>
import AsduiButton from "../../components/AsduiButton";
import {ref} from 'vue'
import {useRoute} from "vue-router";

export default {
  name: "Magic",
  components: {AsduiButton},
  mounted() {
    this.startLoad();
  },
  setup() {
    const route = useRoute()
    let visualScore = ref(0)
    let auditoryScore = ref(0)
    let tactileScore = ref(0)
    let isLoading = ref(true);
    let isShow = ref(true);
    let startLoad = () => {
      setTimeout(calculateUI, 5000)
    }
    let calculateUI = () => {
      const url = "http://localhost:8081/asdui/register/magic/calculate-ui";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          q1: route.params.resultsArray[0],
          q2: route.params.resultsArray[1],
          q3: route.params.resultsArray[2],
          q4: route.params.resultsArray[3],
          q5: route.params.resultsArray[4],
          q6: route.params.resultsArray[5],
          q7: route.params.resultsArray[6],
          q8: route.params.resultsArray[7],
          q9: route.params.resultsArray[8],
          q10: route.params.resultsArray[9],
          q11: route.params.resultsArray[10],
          q12: route.params.resultsArray[11],
          q13: route.params.resultsArray[12],
          q14: route.params.resultsArray[13],
          q15: route.params.resultsArray[14],
        })
      })
          .then(data => {
            return data.json()
          })
          .then(response => {
            console.log(response)
            visualScore.value = response.visualScore
            auditoryScore.value = response.auditoryScore
            tactileScore.value = response.tactileScore
            isLoading.value = false
          })
          .catch(error => {
            console.log(error)
          })
    }
    return {startLoad, visualScore, auditoryScore, tactileScore, calculateUI, isLoading, isShow}
  },
}
</script>

<style scoped>

i {
  text-align: start;
  margin: 0.5vh;
}
</style>