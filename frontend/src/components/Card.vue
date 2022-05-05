<template>
  <div id="card" class="card">
    <input type="file" @change="onFileChange">
    <div id="preview">
      <Image v-if="url" :name="url"/>
    </div>
    <br>
    <!--    <AsduiButton button-type="submit" />-->
    <input type="text" v-model="headerText">
    <Header :text="headerText"/>
  </div>
</template>

<script>

import AsduiButton from "../components/AsduiButton";
import Header from "../components/Header";
import Image from "../components/Image";
import {ref} from 'vue'

export default {
  name: "Card",
  components: {
    AsduiButton,
    Header,
    Image
  },
  setup() {
    const headerText = ref("Enter Text");
    const url = ref(null);
    const onFileChange = (e) => {
      const file = e.target.files[0];
      url.value = URL.createObjectURL(file);
    }
    return {headerText, url, onFileChange}
  }
}
</script>

<style scoped>
.card {
  color: black;
  background: white;
  width: 20vw;
  padding: 50px 0;
  margin: auto;
  border-radius: 10px;
}

</style>