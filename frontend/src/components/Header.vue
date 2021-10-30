<template>
  <h1 class="header"> {{ title }} </h1>
</template>

<script>
export default {
  name: "header",
  props: ["title"]
}
</script>

<style scoped>
  .header {
    font-size: 50px;
  }
</style>