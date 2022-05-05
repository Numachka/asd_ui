<template>
  <div>
    <h3>
      Background Color
    </h3>
    <select v-model="Color" name="colorPick" @click="changeColor('card')">
      <option v-for="(color, colorName) in colors" :id="color" :value="color">
        {{ colorName }}
      </option>
    </select>
    <h3>
      Font size
    </h3>
    <select v-model="fontSize" name="sizePick" @click="changeFontSize('header')">
      <option v-for="size in sizes" :value="size"> {{ size }} </option>
    </select>
    <h3>
      Picture size
    </h3>
    <select v-model="imageSize" name="imageSize" @click="changeImageSize('image')">
      <option v-for="size in sizes" :value="size"> {{ size }} </option>
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
    const sizes = ref([
      11, 12, 14, 16, 18, 20
    ]);

    const Color = ref(null);
    const fontSize = ref(null);
    const imageSize = ref(null);

    const changeColor = (id) => {
      if (Color.value) {
        document.getElementById(id).style.backgroundColor = Color.value;
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
    return { Color, colors, fontSize, sizes, imageSize, changeColor, changeFontSize, changeImageSize }
  }
}
</script>

<style scoped>
div {
  color: black;
  background: white;
  width: 10vw;
  height: 30vh;
  padding: 50px 0;
  margin: auto;
  border-radius: 10px;
}
</style>