<template>
  <head>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <button class="glyphicon glyphicon-pencil" @click="editMenu"> Edit</button>
  <div v-if="editMode">
    <form class="center">
      <p>
        Color
      </p>
      <select id="colorPick" v-model="Color" name="colorPick" @click="changeColor('CTC')">
        <option v-for="(color, colorName) in colors" :id="color" :value="color">
          {{ colorName }}
        </option>
      </select>
      <br> <br>
      <p>
        Font size
      </p>
      <select id="sizePick" v-model="fontSize" name="sizePick" @click="changeFontSize('CTCP')">
        <option v-for="size in sizes" :value="size"> {{ size }}</option>
      </select>
      <br> <br>
      <div v-if="fontSize || Color" class="center">
        <p>
          Do you want to save the changes?
        </p>
        <div>
          <Button type="submit" background-color="#519872" text="Yes" text-color="black"/>
          <Button type="reset" background-color="#E84855" text="No" text-color="black"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import Button from "../components/Button";

export default {
  name: "EditButtonCard",
  components: {Button},
  setup() {
    let editMode = ref(false);
    let colors = ref({
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
    let sizes = ref([
      11, 12, 14, 16, 18, 20
    ]);
    let Color = ref(null);
    let fontSize = ref(null);
    let editMenu = () => {
      editMode.value = !editMode.value;
    }
    let changeColor = (id) => {
      if (Color.value) {
        document.getElementById(id).style.backgroundColor = Color.value;
      }
    };
    let changeFontSize = (id) => {
      if (fontSize.value) {
        document.getElementById(id).style.fontSize = fontSize.value + "px";
      }
    };
    return {editMode, editMenu, Color, colors, fontSize, sizes, changeColor, changeFontSize,}
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

button {
  font-family: 'Comfortaa', sans-serif;
  background-color: #bbbbbb;
  color: white;
  border-radius: 5px;
  margin: 1vw;
  padding: 1vw;
  border: none;
}

button:hover {
  cursor: pointer;
}

p, .center {
  display: grid;
  justify-items: center;
  align-items: center;
}
</style>