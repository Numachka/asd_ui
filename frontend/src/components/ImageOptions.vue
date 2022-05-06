<template>
  <i>Image</i>
  <label for="file" class="upload-file ">Upload image</label>
  <input id="file" type="file" @change="onFileChange">
  <label>Image size</label>
  <select v-model="imageSize" name="imageSize" @click="changeImageSize('image')">
    <option v-for="size in sizes" :value="size"> {{ size }}</option>
  </select>
</template>

<script>
export default {
  name: "ImageOptions"
}
</script>

<style scoped>

input[type="file"] {
  display: none;
}

.upload-file {
  display: block;
  background-color: #FAA43E;
  color: #FFFFFF;
  border-radius: 5px;
  margin: 1vw 1vw;
  padding: 1vw;
  border: none;
  width: 10vw;
  transition: 0.5s;
}

.upload-file:hover {
  cursor: pointer;
  opacity: 0.9;
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