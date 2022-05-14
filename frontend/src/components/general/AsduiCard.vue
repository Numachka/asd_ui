<template>
  <div id="card" class="card">
    <card-image
        :url="imageUrl"
        :size="imageSize"/>
    <card-button
        :backgroundColor="buttonBackgroundColor"
        :size="buttonSize"
        :content="buttonContent"
        :contentColor="buttonContentColor"
        :contentSize="buttonContentSize"
        :action="buttonAction"/>
  </div>
</template>

<script>
import CardImage from "@/components/general/CardImage";
import CardButton from "@/components/general/CardButton";

export default {
  name: "AsduiCard",
  props: [
    "cardBackgroundColor", "imageUrl", "imageSize",
    "buttonBackgroundColor", "buttonSize", "buttonContent",
    "buttonContentColor", "buttonContentSize", "buttonAction"
  ],
  components: {
    CardButton,
    CardImage
  },
}
</script>

<style scoped>

.card {
  background: #FFFFFF;
  width: 30vw;
  max-width: 400px;
  height: 50vh;
  padding: 4vh 0;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 6fr 4fr;
  justify-items: center;
  margin: 0 0 4vh 0;
}

</style>