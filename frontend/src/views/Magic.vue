<template>
  <div>
    <h2>
      ASDUI magic in the background....
    </h2>
    <div class="ltr" v-for="(answer, question) in JSON.parse(results)">
      <p>
        {{question}} <br>
        Answer: {{answer}}
      </p>
    </div>
    <router-link :to="{name: 'Settings'}">
      <Button background-color="#FAA43E" text="Next" text-color="white" type="submit"/>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";
import {ref} from 'vue'

export default {
  name: "Magic",
  components: {Button},
  computed: {
    results() {
      return this.$route.params.result
    }
  }
}
</script>

<style scoped>

</style>