<template>
  <asdui-logo/>
  <router-link :to="{name: 'Profile'}">
    <asdui-button button-type="submit" button-text="Settings"/>
  </router-link>
  <div class="card-workspace">
    <div v-for="card in displayCards">
      <component
          is="AsduiCard"
          :cardBackgroundColor="card.card.backgroundColor"
          :imageUrl="card.image.url"
          :imageSize="card.image.size"
          :buttonBackgroundColor="card.button.backgroundColor"
          :buttonSize="card.button.size"
          :buttonContent="card.button.content"
          :buttonContentColor="card.button.contentColor"
          :buttonContentSize="card.button.contentSize"
          :buttonContentAction="card.button.contentAction"
      />
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {useAsduiStore} from "@/stores/asduiStore";
import AsduiCard from "@/components/general/AsduiCard";
import AsduiButton from "@/components/general/MenuButton";
import CardButton from "@/components/general/CardButton";
import AsduiLogo from "@/components/general/AsduiLogo";

export default {
  name: 'MainMenu',
  components: {
    AsduiLogo,
    CardButton,
    AsduiButton,
    AsduiCard,
  },
  setup() {
    const asduiStore = useAsduiStore();
    const cards = ref([]);
    const displayCards = computed(() => {
      return asduiStore.getActiveUserInterface.cards;
    })
    return {asduiStore, cards, displayCards}
  }
}
</script>
<style scoped>

.card-workspace {
  height: 70vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: 0.5s;
}

.card-workspace::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

</style>