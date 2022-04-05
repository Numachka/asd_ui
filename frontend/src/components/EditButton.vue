<template>
  <head>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <button class="glyphicon glyphicon-pencil" @click="editMenu"> Edit</button>
  <div v-if="editMode">
    <p>Color</p>
    <select name="colorPick" id="colorPick" v-model="Color" @click="changeColor">
      <option v-for="color in colors" :value="color"> {{color}} </option>
    </select>
    <br> <br>
    <p>Font size</p>
    <select name="sizePick" id="sizePick" v-model="fontSize" @click="changeFontSize">
      <option v-for="size in sizes" :value="size"> {{size}} </option>
    </select>
    <br> <br>  <br> <br>  <br> <br>
    <p>
      {{Color}}
    </p>
    <p>
      {{fontSize}}
    </p>
    <br> <br>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "EditButton",
  setup(){
    let editMode = ref(false);
    let colors = ref([
        "Yellow", "Blue", "Red", "Green", "White","Black"
    ]);
    let sizes = ref([
        11, 12, 14, 16, 18, 20
    ]);
    let Color = ref(null);
    let fontSize = ref(null);
    let editMenu = () => {
      editMode.value = !editMode.value;
    }
    let changeColor = () => {
      if(Color.value) {
        document.getElementById("CTC").style.backgroundColor = Color.value;
      }
    };
    let changeFontSize = () => {
      if(fontSize.value) {
        document.getElementById("CTCP").style.fontSize = fontSize.value+"px";
      }
    };
    return { editMode, editMenu, Color, colors, fontSize, sizes, changeColor, changeFontSize }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
button {
  font-family: 'Comfortaa', cursive, sans-serif;
  background-color: grey;
  color: white;
  border-radius: 5px;
  margin: 1vw;
  padding: 1vw;
  border: none;
}
button:hover{
  cursor: pointer;
}

</style>