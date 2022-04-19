<template>
  <div>
    <p>
      ASDUI magic in the <br> background....
    </p>
    <p>
      {{$route.params.result}}
    </p>
  </div>
</template>

<script>
import Button from "../components/Button";
import {ref} from 'vue'

export default {
  name: "Magic",
  components: {Button},
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