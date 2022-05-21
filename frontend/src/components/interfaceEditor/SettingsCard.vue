<template>
  <div class="cardWindow">
    <div class="card-container" @click.self="isCardTapped=!isCardTapped;" :style="calculateStyle">
      <div v-if="isCardTapped" class="settings card-settings">
        <card-options
            :cardId="cardId"
            :backgroundColor="cardBackgroundColor"/>
      </div>
      <div v-if="isUploadImageTapped" class="settings image-settings">
        <image-options
            :cardId="cardId"
            :imageId="imageId"
            :size="imageSize"
            :url="imageUrl"/>
      </div>
      <div v-if="isButtonTapped" class="settings button-settings">
        <button-options
            :cardId="cardId"
            :buttonId="buttonId"
            :backgroundColor="buttonBackgroundColor"
            :size="buttonSize"
            :content="buttonContent"
            :contentColor="buttonContentColor"
            :contentSize="buttonContentSize"
            :contentAction="buttonContentAction"/>
      </div>

      <card-image
          :cardId="cardId"
          :id="imageId"
          :url="imageUrl"
          :size="imageSize"
          @click="isUploadImageTapped=!isUploadImageTapped"/>
      <card-button
          :cardId="cardId"
          :id="buttonId"
          :backgroundColor="buttonBackgroundColor"
          :size="buttonSize"
          :content="buttonContent"
          :contentColor="buttonContentColor"
          :contentSize="buttonContentSize"
          :contentAction="buttonContentAction"
          @click="isButtonTapped=!isButtonTapped"/>
    </div>
  </div>
</template>

<script>
import {computed, ref} from 'vue'
import {useAsduiStore} from "@/stores/asduiStore";
import CardButton from "@/components/general/CardButton";
import CardImage from "@/components/general/CardImage";
import CardOptions from "@/components/interfaceEditor/CardOptions";
import ImageOptions from "@/components/interfaceEditor/ImageOptions";
import ButtonOptions from "@/components/interfaceEditor/ButtonOptions";

export default {
  name: "SettingsCard",
  components: {
    CardButton,
    CardImage,
    CardOptions,
    ImageOptions,
    ButtonOptions
  },
  props: [
    "cardId", "cardBackgroundColor",
    "imageId", "imageUrl", "imageSize",
    "buttonId", "buttonBackgroundColor", "buttonSize", "buttonContent",
    "buttonContentColor", "buttonContentSize", "buttonContentAction"
  ],
  setup(props) {
    const asduiStore = useAsduiStore();
    const isUploadImageTapped = ref(false)
    const isButtonTapped = ref(false)
    const isCardTapped = ref(false)
    const headerText = ref("Enter Text");
    const calculateStyle = computed(() => {
      return `background-color: ${props.cardBackgroundColor}`;

    })
    return {asduiStore, isCardTapped, isUploadImageTapped, isButtonTapped, headerText, calculateStyle}
  }
}
</script>

<style scoped>

.cardWindow {
  position: relative;
}

.card-container {
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

.card-container:hover {
  cursor: pointer;
  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;
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