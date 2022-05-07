<template>
  <button :class="this.buttonType" class="asdui-button">
    {{ (typeof this.buttonText === "undefined" ? camelCase(this.buttonType) : this.buttonText)}}
  </button>
</template>

<script>
import {camelCase} from "@/utils/utils"
import Register from "@/views/UserCreation/RegisterView";

export default {
  name: "AsduiButton",
  components: {Register},
  props: ["buttonType", "buttonText"],
  methods: {
    camelCase
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
  margin: 1vw 1vw;
  padding: 1vw;
  border: none;
  width: 10vw;
  transition: 0.5s;
}

/*ALl of the below classes are added via props*/

.login, .back {
  background-color: #FFFFFF;
  color: #07689F;
}

.register, .submit, .next {
  background-color: #FAA43E;
  color: #FFFFFF;
}

.yes, .accept {
  background-color: #519872;
  color: #000000;
}

.no {
  background-color: #E84855;
  color: #000000;
}

.previous {
  background-color: #FFFFFF;
  color: #000000;
}

.return {
  background-color: #FFFFFF;
  color: #000000;
  justify-self: end;
  align-self: start;
  grid-row-start: 1;
  width: 10vw;
}

.edit {
  background-color: #e0e0e0;
  color: #000000;
  width: 90%;
}

</style>