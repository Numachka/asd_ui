<template>
  <div :style="getImageSize" class="image-container card-image">
    <img class="asdui-image-inner" alt="failed to load the image" :src="getImageUrl(url)">
  </div>
</template>

<script>
import {useAsduiStore} from "@/stores/asduiStore";
import {computed} from "vue";

export default {
  name: "Image",
  props: ["cardId", "id", "url", "size"],
  setup(props) {
    const asduiStore = useAsduiStore();
    const getImageUrl = (url) => {
      try {
        if (!url) {
          return require('../../../../backend/src/main/resources/userImages/0-admin/temp-woman.svg');
        }
        return require('../../../../backend/src/main/resources/userImages/'
            + asduiStore.user.userID + '-' + asduiStore.user.firstName + asduiStore.user.lastName + '/' + url);
      } catch (exc) {
        return ""
      }
    }
    const getImageSize = computed(() => {
      let height = '', width = '';
      switch (props.size) {
        case 'very-small':
          width = '80%';
          height = '60%';
          break;
        case 'small':
          width = '85%';
          height = '65%';
          break;
        case 'medium':
          width = '90%';
          height = '70%';
          break;
        case 'large':
          width = '95%';
          height = '75%';
          break;
        case 'very-large':
          width = '100%';
          height = '80%';
          break;
        default:
          width = '90%';
          height = '70%';
          break;
      }
      return `width: ${width};
              height: ${height};`
    })
    return {asduiStore, getImageUrl, getImageSize}
  }
}
</script>

<style scoped>
.image-container {
  width: 90%;
  border-radius: 7px;
}

.image-container:hover {
  cursor: pointer;
  background-color: #e7e7e7;
  opacity: 0.8;
}

img {
  width: 100%;
  height: 80%;
  border-radius: 50%;
}

</style>