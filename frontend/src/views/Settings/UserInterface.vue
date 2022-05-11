<template>
  <div class="asdui-window">
    <asdui-logo/>
    <p>Setting the Cards</p>
    <asdui-button button-type="accept" button-text="Set the cards" @click="saveResults"/>
    <div class="card-workspace">
      <settings-card class="card-1"/>
      <div id="card-workspace" v-for="card in cards">
        <component :is="card"/>
      </div>
      <div class="card-manipulators">
        <div class="addCard manipulator" @click="addCard">Add</div>
        <div class="removeCard manipulator" @click="removeCard">Remove</div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Card from "../../components/General/AsduiCard";
import SettingsCard from "@/components/SettingsCard";
import CardOptions from "../../components/CardOptions";
import AsduiLogo from "@/components/General/AsduiLogo";
import AsduiButton from "@/components/General/AsduiButton";

export default {
  name: "UserInterface",
  components: {
    AsduiButton,
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
    const removeCard = () => {
      cards.value.pop()
    }

    const saveResults = () => {
      //TODO post result to database and save state to pinia.
    }

    return {cards, addCard, removeCard, saveResults}
  }
}
</script>

<style scoped>
.card-manipulators {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 25vw;
}

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

.manipulator {
  display: grid;
  justify-items: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 1.5rem;
  border-radius: 50px;
  width: 9vw;
  height: 3vw;
  margin: 4vw 1vh;
  transition: 0.3s;
}
.addCard {
  border: solid 4px #519872;
}

.removeCard {
  border: solid 4px #E84855;
  color: #FFFFFF;
}

.addCard:hover {
  background-color: #519872;
  cursor: pointer;
  opacity: 0.9;
}
.removeCard:hover {
  background-color: #E84855;
  cursor: pointer;
  opacity: 0.9;
}
</style>