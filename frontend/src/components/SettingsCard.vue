<template>
  <div class="cardWindow">
    <div v-if="isCardTapped" class="settings card-settings">
      <card-options/>
    </div>
    <div v-if="isUploadImageTapped" class="settings image-settings">
      <image-options/>
    </div>
    <div v-if="isButtonTapped" class="settings button-settings">
      <button-options/>
    </div>
    <div class="cardContainer" @click.self="isCardTapped=!isCardTapped;">
      <asdui-image v-if="!url" class="empty-image-1" :url="url" @click="isUploadImageTapped=!isUploadImageTapped"/>
      <asdui-button class="empty-button-1" button-type="submit" button-text="Tap to edit"
                    @click="isButtonTapped=!isButtonTapped"/>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import AsduiButton from "../components/AsduiButton";
import AsduiImage from "@/components/AsduiImage";
import CardOptions from "@/components/CardOptions";
import ImageOptions from "@/components/ImageOptions";
import ButtonOptions from "@/components/ButtonOptions";

export default {
  name: "SettingsCard",
  components: {
    ButtonOptions,
    ImageOptions,
    CardOptions,
    AsduiButton,
    AsduiImage
  },
  setup() {
    const isUploadImageTapped = ref(true)
    const isButtonTapped = ref(true)
    const isCardTapped = ref(true)
    const headerText = ref("Enter Text");
    const url = ref(null);
    const onFileChange = (e) => {
      const file = e.target.files[0];
      url.value = URL.createObjectURL(file);
    }
    return {isCardTapped, isUploadImageTapped, isButtonTapped, headerText, url, onFileChange}
  }
}
</script>

<style scoped>

.cardWindow {
  position: relative;
}

.cardContainer {
  background: #FFFFFF;
  width: 15vw;
  min-width: 350px;
  height: 40vh;
  padding: 4vh 0;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 6fr 4fr;
  justify-items: center;
  margin: 2vh;
  transition: 0.6s;
}

.cardContainer:hover {
  cursor: pointer;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.empty-image-1:hover {
  cursor: pointer;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.empty-button-1:hover {
  cursor: pointer;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.empty-button-1 {
  width: 50%;
  height: 50%;
  align-self: center;
}

.settings {
  display: grid;
  justify-items: center;
  border: solid 2px #FAA43E;
  border-radius: 5px;
  position: absolute;
  width: 15vw;
  padding: 1vh;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0);
}

.card-settings {
  top: 1vw;
  left: 1vw;
}

.image-settings {
  top: 5vh;
  right: 1vw;
}

.button-settings {
  top: 30vh;
  right: 1vw;
}

</style>