<template>
  <i>Button</i>
  <label>Background Color</label>
  <select
      v-model="backgroundColor"
      name="colorPick"
      @click="changeBackgroundColor($event)"
      @change="updateButtonStyle">
    <option v-for="(color, colorName) in colors" :id="color" :value="color">
      {{ colorName }}
    </option>
  </select>

  <label for="button-content">Content</label>
  <input
      id="button-content"
      type="text"
      v-model="buttonContent"
      @keyup="changeButtonContent($event)"
      @change="updateButtonStyle">

  <label for="button-action">Action</label>
  <input
      id="button-action"
      type="text"
      v-model="buttonAction"
      @keyup="changeButtonAction($event)"
      @change="updateButtonStyle">

  <label>Text Color</label>
  <select
      v-model="contentColor"
      name="colorPick"
      @click="changeContentColor($event)"
      @change="updateButtonStyle">
    <option v-for="(color, colorName) in colors" :id="color">
      {{ colorName }}
    </option>
  </select>

  <label>Content size</label>
  <select
      v-model="contentSize"
      name="imageSize"
      @click="changeContentSize($event)"
      @change="updateButtonStyle">>
    <option v-for="size in sizes"> {{ size }}</option>
  </select>

  <label>Button size</label>
  <select
      v-model="buttonSize"
      name="imageSize"
      @click="changeButtonSize($event)"
      @change="updateButtonStyle">>
    <option v-for="size in sizes"> {{ size }}</option>
  </select>
</template>

<script>
import {ref} from 'vue';
import {useAsduiStore} from "@/stores/asduiStore";

export default {
  name: "ButtonOptions",
  props: ["cardId", "buttonId", "backgroundColor", "size", "content",
    "contentColor", "contentSize", "contentAction"],
  setup(props) {
    const asduiStore = useAsduiStore();
    const colors = ref({
      "Blue Light": '#84c1ff',
      "Blue": '#0057e7',
      "Blue Dark": '#3b5998',
      "Turquoise": '#bdeaee',
      "Yellow Light": '#fdf498',
      "Yellow": '#fed766',
      "Orange": '#ffa700',
      "Red Light": '#ff6f69',
      "Red": '#d62d20',
      "Bordeaux": '#854442',
      "Green Light": '#a8e6cf',
      "Green": '#009688',
      "Pink Light": '#fec8c1',
      "Pink": '#ffbbee',
      "Lavender": '#E6E6FA',
      "Purple": '#7b68ee',
      "White": '#FFFFFF',
      "Grey": '#e6e6ea',
      "Brown": '#be9b7b',
      "Beige": '#faebd7',
      "Black": '#1e1f26',
    });
    const changeBackgroundColor = (event) => {
      if (backgroundColor.value) {
        let cards = document.getElementsByClassName('card-container');
        for (let card of cards) {
          if (card.contains(event.target)) {
            let innerButton = card.querySelector('button.card-button')
            innerButton.style.backgroundColor = backgroundColor.value
          }
        }
      }
    };
    const changeContentColor = (event) => {
      if (contentColor.value) {
        let cards = document.getElementsByClassName('card-container');
        for (let card of cards) {
          if (card.contains(event.target)) {
            let innerButton = card.querySelector('button.card-button')
            innerButton.style.color = contentColor.value
          }
        }
      }
    };
    const backgroundColor = ref(props.backgroundColor);
    const contentColor = ref(props.contentColor);

    const buttonContent = ref(props.content);
    const changeButtonContent = (event) => {
      let cards = document.getElementsByClassName('card-container');
      for (let card of cards) {
        if (card.contains(event.target)) {
          let innerButton = card.querySelector('button.card-button')
          innerButton.textContent = buttonContent.value;
        }
      }
    }

    const buttonAction = ref(props.contentAction)
    const changeButtonAction = (event) => {
      // this.buttonAction = event;
    }

    const sizes = ref([
      'very-small', 'small', 'medium', 'large', 'very-large'
    ]);
    const contentSize = ref(props.contentSize);
    const buttonSize = ref(props.size);
    const changeContentSize = (event) => {
      if (contentSize.value) {
        let cards = document.getElementsByClassName('card-container');
        for (let card of cards) {
          if (card.contains(event.target)) {
            let innerButton = card.querySelector('button.card-button')
            setStyleBySizeName(innerButton, contentSize.value)
          }
        }
      }

      function setStyleBySizeName(innerButton, value) {
        switch (value) {
          case 'very-small':
            innerButton.style.fontSize = '1rem';
            break;
          case 'small':
            innerButton.style.fontSize = '1.2rem';
            break;
          case 'medium':
            innerButton.style.fontSize = '1.4rem';
            break;
          case 'large':
            innerButton.style.fontSize = '1.6rem';
            break;
          case 'very-large':
            innerButton.style.fontSize = '1.8rem';
            break;
          default:
            innerButton.style.fontSize = '2rem';
        }
      }
    };
    const changeButtonSize = (event) => {
      if (buttonSize.value) {
        let cards = document.getElementsByClassName('card-container');
        for (let card of cards) {
          if (card.contains(event.target)) {
            let innerButton = card.querySelector('button.card-button')
            setStyleBySizeName(innerButton, buttonSize.value)
          }
        }
      }

      function setStyleBySizeName(innerButton, value) {
        switch (value) {
          case 'very-small':
            innerButton.style.width = '40%';
            innerButton.style.height = '35%';
            break;
          case 'small':
            innerButton.style.width = '50%';
            innerButton.style.height = '45%';
            break;
          case 'medium':
            innerButton.style.width = '60%';
            innerButton.style.height = '55%';
            break;
          case 'large':
            innerButton.style.width = '70%';
            innerButton.style.height = '65%';
            break;
          case 'very-large':
            innerButton.style.width = '80%';
            innerButton.style.height = '75%';
            break;
          default:
            innerButton.style.width = '60%';
            innerButton.style.height = '55%';
        }
      }
    };

    const updateButtonStyle = () => {
      asduiStore.updateButtonStyleById(props.cardId, props.buttonId,
          backgroundColor.value, buttonSize.value, buttonContent.value,
          contentColor.value, contentSize.value, buttonAction.value);
    }

    return {
      updateButtonStyle,
      asduiStore,
      contentColor,
      backgroundColor,
      changeContentColor,
      buttonContent,
      changeButtonSize,
      buttonSize,
      changeButtonContent,
      changeBackgroundColor,
      sizes,
      contentSize,
      changeContentSize,
      colors,
      buttonAction,
      changeButtonAction
    }
  }
}
</script>

<style scoped>
label {
  font-size: 1rem;
  margin: 0.5vh;
  padding: 0 2vw;
  width: 100%;
}

input {
  width: 60%;
}

select {
  appearance: none;
  border: none;
  width: 60%;
  background: #FFFFFF url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat calc(100% - 0.75rem) center;
  padding: 0.2vh 0.2vh;
}

i {
  position: absolute;
  top: -1vh;
  left: 1vh;
  background-color: #FAA43E;
  border-radius: 5px;
  padding: 0 0.2vh;
}
</style>