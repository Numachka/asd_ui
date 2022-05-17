<template>
  <div>
    <p>Setting the Cards</p>
    <i v-if="!isSaved">Click on the components to display a customization menu</i>
    <i v-else>We stored your cards! Now you can use them from the home menu</i>
    <asdui-button button-type="accept" button-text="Set the cards" @click="saveResults" v-if="!isSaved"/>
    <div class="card-manipulators" v-if="!isSaved">
      <div class="addCard manipulator" @click="addCard">Add</div>
      <div class="removeCard manipulator" @click="removeCard">Remove</div>
    </div>
    <div class="card-workspace" v-if="!isSaved">
      <div v-for="card in cards">
        <component
            :is="card.component"
            :cardBackgroundColor="card.cardBackgroundColor"
            :imageUrl="card.imageUrl"
            :imageSize="card.imageSize"
            :buttonBackgroundColor="card.buttonBackgroundColor"
            :buttonSize="card.buttonSize"
            :buttonContent="card.buttonContent"
            :buttonContentColor="card.buttonContentColor"
            :buttonContentSize="card.buttonContentSize"
            :buttonContentAction="card.buttonContentAction"
        />
      </div>
    </div>
    <div v-else>
      <p>Saved!</p>
      <router-link :to="{name:'MainMenu'}">
        <asdui-button button-type="submit" button-text="Home"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useAsduiStore} from "@/stores/asduiStore";
import Card from "../../components/general/AsduiCard";
import SettingsCard from "@/components/interfaceEditor/SettingsCard";
import CardOptions from "../../components/interfaceEditor/CardOptions";
import AsduiLogo from "@/components/general/AsduiLogo";
import AsduiButton from "@/components/general/MenuButton";
import AsduiCard from "@/components/general/AsduiCard";

export default {
  name: "UserInterface",
  components: {
    AsduiButton,
    Card,
    CardOptions,
    SettingsCard,
    AsduiLogo
  },
  created() {
    this.setIsLoaded()
  },
  setup() {
    const asduiStore = useAsduiStore();
    let cards = ref([]);
    let isSaved = ref(false);
    return { cards, asduiStore, isSaved}
  },
  methods: {
    setIsLoaded() {
      setTimeout(this.displayCard, 1000);
    },
    addCard() {
      const tempCard = {
        component: SettingsCard,
        cardBackgroundColor: '#ffffff',
        imageUrl: '',
        imageSize: 'medium',
        imageFile: '',
        buttonBackgroundColor: '#bbbbbb',
        buttonSize: 'medium',
        buttonContent: 'Action Name',
        buttonContentColor: '#000000',
        buttonContentSize: 'medium',
        buttonAction: ''
      }
      this.cards.push(tempCard);
    },
    removeCard() {
      this.cards.pop()
    },
    displayCard() {
      const returnedCards = this.asduiStore.getActiveUserInterface;
      const thisCards = this.cards;
      if (returnedCards.cards.length !== 0) {
        returnedCards.cards.forEach(card => {
          const tempCard = {
            component: SettingsCard,
            cardId: card.card.id,
            cardBackgroundColor: card.card.backgroundColor,
            imageId: card.image.id,
            imageUrl: card.image.url,
            imageSize: card.image.size,
            buttonId: card.button.id,
            buttonBackgroundColor: card.button.backgroundColor,
            buttonSize: card.button.size,
            buttonContent: card.button.content,
            buttonContentColor: card.button.contentColor,
            buttonContentSize: card.button.contentSize,
            buttonContentAction: card.button.contentAction
          }
          thisCards.push(tempCard);
        })
      }
    },
    saveResults() {
      this.asduiStore.saveCards(this.cards);
      // this.asduiStore.saveImage(this.fileData);
      this.isSaved = true;
    }
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