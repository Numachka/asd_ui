<template>
  <div v-for="card in cards" class="card-workspace">
    <component
        :is="card.component"
        :cardBackgroundColor="card.card.backgroundColor"
        :imageUrl="card.image.url"
        :imageSize="card.image.size"
        :buttonBackgroundColor="card.button.backgroundColor"
        :buttonSize="card.button.size"
        :buttonContent="card.button.content"
        :buttonContentColor="card.button.contentColor"
        :buttonContentSize="card.button.contentSize"
        :buttonAction="card.button.action"
    />
  </div>
</template>

<script>
import {ref} from "vue";
import AsduiCard from "@/components/General/AsduiCard";

export default {
  name: 'MainMenu',
  components: {
    AsduiCard
  },
  mounted() {
    this.displayCards();
  },
  setup() {
    const cards = ref([])
    const displayCards = () => {
      console.log('started!')
      //TODO fetch from db or pinia and fill cards array for displaying the cards.
      // Input -> json object containing the cards.
      // Iterate over the json objects, getting the props for the card from it -
      // imageURL, buttonType, buttonContent,
      cards.value.push({
        component: AsduiCard,
        cardBackgroundColor: "card.card.backgroundColor",
        imageUrl: "card.image.url",
        imageSize: "card.image.size",
        buttonBackgroundColor: "card.button.backgroundColor",
        buttonSize: "card.button.size",
        buttonContent: "card.button.content",
        buttonContentColor: "card.button.contentColor",
        buttonContentSize: "card.button.contentSize",
        buttonAction: "card.button.action",
      })
    }
    return {cards, displayCards}
  }
}
</script>
<style scoped>

.card-workspace {
  height: 70vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: 0.5s;
}

.card-workspace::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

div {
  display: grid;
  justify-items: center;
  width: 70vw;
}
</style>