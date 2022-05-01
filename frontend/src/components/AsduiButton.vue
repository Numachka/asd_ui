<template>
  <button :class="this.buttonType">
    {{ camelCase(this.buttonType) }}
  </button>
</template>

<script>

import Register from "@/views/Register";
export default {
  name: "AsduiButton",
  components: {Register},
  props: ["buttonType"],
  methods: {
    camelCase(string) {
      return string.substring(0, 1).toUpperCase() + string.substring(1) /* hello -> Hello */
    }
  }
}

</script>

<style scoped>

button:hover {
  cursor: pointer;
  opacity: 0.9;
}

button {
  border-radius: 5px;
  margin: 1vw 1vw ;
  padding: 1vw;
  border: none;
  width: 10vw;
  transition: 0.5s;
}

.login, .back {
  background-color: #FFFFFF;
  color: #07689F;
}

.register, .submit{
  background-color: #FAA43E;
  color: #FFFFFF;
}

.yes {
  background-color: #FAA43E;
  color: #FFFFFF;
}

.no {
  background-color: #FAA43E;
  color: #FFFFFF;
}

.return {
  background-color: #FFFFFF;
  color: #FAA43E;
  justify-self: end;
  align-self: start;
}

</style>