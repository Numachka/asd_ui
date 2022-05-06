<template>
  <i>Card</i>
  <div>
    <label>Background Color</label>
    <select v-model="Color" name="colorPick" @click="changeColor('card')">
      <option v-for="(color, colorName) in colors" :id="color" :value="color">
        {{ colorName }}
      </option>
    </select>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "SettingsOptions",
  setup() {
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

    const color = ref(null);
    const fontSize = ref(null);
    const imageSize = ref(null);

    const changeColor = (id) => {
      if (color.value) {
        document.getElementById(id).style.backgroundColor = color.value;
      }
    };
    const changeFontSize = (id) => {
      if (fontSize.value) {
        document.getElementById(id).style.fontSize = fontSize.value * 0.1 + "rem";
      }
    };
    const changeImageSize = (id) => {
      if (imageSize.value) {
        document.getElementById(id).style.width = imageSize.value + "vw";
        document.getElementById(id).style.height = imageSize.value + "vh";
      }
    };
    return {Color: color, colors, fontSize, imageSize, changeColor, changeFontSize, changeImageSize}
  }
}
</script>

<style scoped>
div {
  display: grid;
  justify-items: center;
  border-radius: 5px;
}

label {
  font-size: 1rem;
  margin: 0.5vh;
  padding: 0 2vw;
  width: 100%;
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