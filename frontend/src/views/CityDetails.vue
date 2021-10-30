<template>
  <h1>siiiiii</h1>
  <p>The city is {{ name }}</p>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "CityDetails",
  components: {
    Header
  },
  props: ['name']
}
</script>

<style scoped>

</style>