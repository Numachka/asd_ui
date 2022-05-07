<template>
  <div class="asduiWindow">
    <asdui-logo/>
    <p>Setting the Cards</p>
    <div class="cardWorkspace">
      <settings-card class="card-1"/>
      <div id="cardWorkspace" v-for="card in cards">
        <component :is="card"/>
      </div>
      <span class="addCard" @click="addCard">+</span>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Card from "../../components/Card";
import SettingsCard from "@/components/SettingsCard";
import CardOptions from "../../components/CardOptions";
import AsduiLogo from "@/components/AsduiLogo";

export default {
  name: "UserInterface",
  components: {
    Card,
    CardOptions,
    SettingsCard,
    AsduiLogo
  },
  setup() {
    let cards = ref([]);
    const addCard = () => {
      cards.value.push(SettingsCard);
    }

    return {cards, addCard}
  }
}
</script>

<style scoped>
.cardWorkspace {
  height: 70vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0);

}

.cardWorkspace::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

div {
  display: grid;
  justify-items: center;
  width: 70vw;
}

.addCard {
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 3rem;
  border: solid 4px #FFFFFF;
  border-radius: 50px;
  width: 4vw;
  height: 4vw;
  margin: 4vw;
}

.addCard:hover {
  cursor: pointer;
  opacity: 0.9;
}

</style>