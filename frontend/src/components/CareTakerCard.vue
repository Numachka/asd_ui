<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <div id="CTC" class="card center roundCard">
    <EditButtonCard/>
    <img alt="failed to load the image" class="Image" :src="require(`../assets/${careTaker}`)" >
    <lable id="CTCP">
      Call Dad
    </lable>
    <table>
      <tr>
        <td>
          <i style="font-size:24px" class="fa">&#xf095;</i>
        </td>
        <td>
          <i style='font-size:24px' class='fas'>&#xf03d;</i>
        </td>
        <td>
          <i class='fa-solid fa-message'></i>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import {ref} from 'vue'
import EditButtonCard from "./EditButtonCard";

export default {
  name: "CareTakerCard",
  components: {
    EditButtonCard,
  },
  props: ["careTaker"],
}

</script>

<style scoped>
.center {
  display: grid;
  justify-items: center;
  align-items: center;
}
.card, .card p {
  color: black;
  background: white;
  width: 95%;
  padding: 50px 0;
  margin: auto;
  border-radius: 10px;
}

.Image {
  width: 50%;
  border-radius: 50%;

}
.roundCard {
  border-radius: 3%;
}
td {
  width: 4vh;
}

</style>