<template>
  <div class="card center roundCard">
    <a :href="url">
      <div>
        <img alt="failed to load the image" class="Image" :src="require(`../assets/${image}`)">
        <h3>
          {{ header }}
        </h3>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: ["image", "header", "url"],

}
</script>

<style scoped>
.card {
  color: black;
  background: white;
  width: 95%;
  padding: 50px 0;
  margin: auto;
  border-radius: 10px;
}
</style>