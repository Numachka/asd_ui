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
  // setup() {
  //   let result = ref(null);
  //   if (this.$route.params.result)
  //     result.value = this.$route.params.result;
  //   console.log(result)
  //   return { result }
  // }
}
</script>

<style scoped>

</style>