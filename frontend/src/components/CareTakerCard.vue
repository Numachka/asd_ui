<template>
  <div class="card round">
    <EditButton/>
    <img alt="failed to load the image" class="roundImg Image" src="../assets/dad.jpg">
    <p>
      Call Dad
    </p>
    <img alt="failed to load the image" class="smallImage" src="../assets/phone.png">
  </div>
</template>

<script>
import {ref} from 'vue'
import EditButton from "../components/EditButton";

export default {
  name: "CareTakerCard",
  components: {
    EditButton,
  },
}
</script>

<style scoped>

.card {
  -background: #ECEFF1;
  background: white;
  width: 95%;
  padding: 50px 0;
  margin: auto;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
}

.card {
  color: black;
}

.smallImage {
  width: 10%;
}

.Image {
  width: 50%;
}

.roundImg {
  border-radius: 50%;
}

.round {
  border-radius: 3%;
}

</style>