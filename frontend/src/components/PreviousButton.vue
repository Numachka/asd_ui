<template>
  <Button text="< Previous Page" text-color="black" background-color="#84c1ff" @click="$router.back()" />
</template>

<script>

import Button from "../components/Button";

export default {
  name: "PreviousButton",
  components: {
    Button,
  }
}
</script>

<style scoped>

</style>