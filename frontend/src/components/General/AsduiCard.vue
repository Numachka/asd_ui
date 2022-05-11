<template>
  <div id="card" class="card">
    <asdui-image :url="imageUrl"/>
    <asdui-button button-type="none" :button-text="buttonContent" @click="performAction($event)"/>
  </div>
</template>

<script>
import {ref} from 'vue'
import AsduiButton from "./AsduiButton";
import AsduiImage from "@/components/General/AsduiImage";

export default {
  name: "AsduiCard",
  props: [
    "cardBackgroundColor", "imageUrl", "imageSize", "buttonBackgroundColor",
    "buttonSize", "buttonContent", "buttonContentColor",
    "buttonContentSize", "buttonAction", "buttonSize"
  ],
  components: {
    AsduiButton,
    AsduiImage
  },
  setup() {
    const performAction = (event) => {

    }
    return {performAction}
  }
}
</script>

<style scoped>

.card {
  background: #FFFFFF;
  width: 20vw;
  height: 45vh;
  padding: 4vh 0;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 6fr 4fr;
  justify-items: center;
}

</style>