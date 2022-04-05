<template>
  <head>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <button class="glyphicon glyphicon-pencil" @click="editMenu"> Edit</button>
  <div v-if="editMode">
    <form>
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
      <div v-if="fontSize || Color ">
        <Button background-color="#519872" text="Yes" text-color="black"/>
        <Button background-color="#E84855" text="No" text-color="black"/>
        <br>
        <Button type="submit" background-color="#FAA43E" text="Submit" text-color="white" />
        <Button type="clear" background-color="#bbbbbb" text="Clear" text-color="white" />
      </div>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import Button from "../components/Button";

export default {
  name: "EditButton",
  components: {Button},
  setup() {
    let editMode = ref(false);
    let colors = ref({
      "Light Yellow": '#fdf498',
      "Yellow": '#fed766',
      "Light Blue": '#84c1ff',
      "Blue": '#0057e7',
      "Dark Blue": '#3b5998',
      "Light Red": '#ff6f69',
      "Red": '#d62d20',
      "Bordeaux": '#854442',
      "Light Green": '#a8e6cf',
      "Green": '#009688',
      "White": '#FFFFFF',
      "Black": '#1e1f26',
      "Light Pink": '#fec8c1',
      "Pink": '#ffbbee',
      "Lavender": '#E6E6FA',
      "Purple": '#7b68ee',
      "Grey": '#e6e6ea',
      "Orange": '#ffa700',
      "Beige": '#faebd7',
      "Brown": '#be9b7b',
      "Turquoise": '#bdeaee',
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
  font-family: 'Comfortaa', cursive, sans-serif;
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

</style>