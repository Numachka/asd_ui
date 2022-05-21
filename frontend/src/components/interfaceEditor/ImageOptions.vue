<template>
  <i>Image</i>
  <label for="file" class="upload-file ">Upload image</label>
  <input id="file" type="file" @change="onFileChange($event)">
  <label>Image size</label>
  <select v-model="imageSize"
          name="imageSize"
          @click="changeImageSize($event)"
          @change="updateImageStyle"
          :value="size">
    <option v-for="size in sizes" :value="size">{{ size }}</option>
  </select>
</template>

<script>
import {ref} from "vue";
import {useAsduiStore} from "@/stores/asduiStore";

export default {
  name: "ImageOptions",
  props: ["cardId", "imageId", "size", "url"],
  setup(props) {
    const asduiStore = useAsduiStore();
    const sizes = ref([
      'very-small', 'small', 'medium', 'large', 'very-large'
    ]);
    const imageSize = ref(props.size);
    const url = ref(props.url);
    const changeImageSize = (event) => {
      if (imageSize.value) {
        let cards = document.getElementsByClassName('card-container');
        for (let card of cards) {
          if (card.contains(event.target)) {
            let innerImage = card.querySelector('div.card-image')
            setStyleBySizeName(innerImage, imageSize.value);
          }
        }
      }

      function setStyleBySizeName(image, value) {
        switch (value) {
          case 'very-small':
            image.style.width = '40%';
            image.style.height = '35%';
            break;
          case 'small':
            image.style.width = '50%';
            image.style.height = '45%';
            break;
          case 'medium':
            image.style.width = '60%';
            image.style.height = '55%';
            break;
          case 'large':
            image.style.width = '70%';
            image.style.height = '65%';
            break;
          case 'very-large':
            image.style.width = '80%';
            image.style.height = '75%';
            break;
          default:
            image.style.width = '60%';
            image.style.height = '55%';
        }
      }
    };
    const onFileChange = (event) => {
      const file = event.target.files[0];
      let cards = document.getElementsByClassName('card-container');
      for (let card of cards) {
        console.log(card)
        if (card.contains(event.target)) {
          let innerImage = card.querySelector('img.asdui-image-inner')
          innerImage.src = URL.createObjectURL(file);
          innerImage.parentElement.style.border = 'none';
          this.url = file.name;
          //TODO upload is initiated here -> filename + content sent to backend for keeping.
        }
      }
    }
    const updateImageStyle = () => {
      asduiStore.updateImageStyleById(props.cardId, props.imageId, imageSize.value, url.value)
    }
    return {asduiStore, sizes, url, onFileChange, imageSize, changeImageSize, updateImageStyle}
  },
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