<template>
  <div v-if="isUploadImageTapped" class="image-settings">
    <label for="file" class="upload-file">Upload image</label>
    <input id="file" type="file" @change="onFileChange">
  </div>
  <div id="card" class="card">
    <div v-if="isButtonTapped" class="button-settings">

    </div>
    <asdui-image v-if="!url" class="emptyImage" :url="url" @click="isUploadImageTapped=!isUploadImageTapped"/>
    <asdui-button button-type="submit" button-text="Tap to edit" @click="isButtonTapped=!isButtonTapped"/>
  </div>
</template>

<script>
import {ref} from 'vue'
import AsduiButton from "../components/AsduiButton";
import AsduiImage from "@/components/AsduiImage";

export default {
  name: "SettingsCard",
  components: {
    AsduiButton,
    AsduiImage
  },
  setup() {
    const isUploadImageTapped = ref(false)
    const isButtonTapped = ref(false)
    const headerText = ref("Enter Text");
    const url = ref(null);
    const onFileChange = (e) => {
      const file = e.target.files[0];
      url.value = URL.createObjectURL(file);
    }
    return {isUploadImageTapped, isButtonTapped, headerText, url, onFileChange}
  }
}
</script>

<style scoped>

input[type="file"] {
  display: none;
}

.upload-file {
  display: block;
  background-color: #FAA43E;
  color: #FFFFFF;
  border-radius: 5px;
  margin: 1vw 1vw;
  padding: 1vw;
  border: none;
  width: 10vw;
  transition: 0.5s;
}

.upload-file:hover {
  cursor: pointer;
  opacity: 0.9;
}

.card {
  background: #FFFFFF;
  width: 15vw;
  height: 40vh;
  padding: 4vh 0;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 6fr 4fr;
  justify-items: center;
}

</style>