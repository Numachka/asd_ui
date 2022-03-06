<template>
  <div class="card round">
    <img alt="failed to load the image" class="roundImg Image" src="../assets/dad.jpg">
    <p>
      Call Dad
    </p>
    <img alt="failed to load the image" class="smallImage" src="../assets/phone.png">
  </div>
</template>

<script>

export default {
  name: "CareTakerCard",
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