<template>
  <button :style="calculateStyling" class="card-button" @click="performAction">
    {{ content }}
  </button>
</template>

<script>
import {useAsduiStore} from "@/stores/asduiStore";
import {computed} from "vue";
import {useRoute} from "vue-router";

export default {
  name: "AsduiButton",
  props: ["cardId", "id", "backgroundColor", "size", "content", "contentColor", "contentSize", "contentAction"],
  setup(props) {
    const asduiStore = useAsduiStore()
    const route = useRoute()
    const performAction = () => {
      if (isMainMenu) {
        /*Example: contentAction = 'call 0941290975' || 'visit google.com'*/
        const actionParts = props.contentAction.split(' ');
        if (actionParts[0].includes('visit')) {
          window.open(actionParts[1]);
        } else if (actionParts[0].startsWith('call')) {
          window.open('tel:+972' + actionParts[1].substring(1), '_self');
        } else {
          //TODO maybe this can be replaced with a v-if html element.
          alert('Sorry! This action is not supported yet');
          console.log('Sorry! This action is not supported yet');
        }
      }
    };
    const isMainMenu = computed(() => {
      return route.params.name === 'MainMenu';
    })
    const calculateStyling = computed(() => {
          let height = '', width = '', fontSize = '';
          switch (props.size) {
            case 'very-small':
              width = '40%';
              height = '35%';
              break;
            case 'small' :
              width = '50%';
              height = '45%';
              break;
            case 'medium':
              width = '60%';
              height = '55%';
              break;
            case 'large':
              width = '70%';
              height = '65%';
              break;
            case 'very-large':
              width = '80%';
              height = '75%';
              break;
            default:
              width = '60%';
              height = '55%';
              break;
          }
          switch (props.contentSize) {
            case 'very-small':
              fontSize = '1rem';
              break;
            case 'small':
              fontSize = '1.25rem';
              break;
            case 'medium':
              fontSize = '1.5rem';
              break;
            case 'large':
              fontSize = '1.75rem';
              break;
            case 'very-large':
              fontSize = '2rem';
              break;
            default:
              fontSize = '1.5rem';
              break;
          }
          return `background-color: ${props.backgroundColor};
              width: ${width};
              height: ${height};
              color: ${props.contentColor};
              font-size: ${fontSize};`
        })
    return {asduiStore, route, performAction, isMainMenu, calculateStyling};
  },
}
</script>

<style scoped>

button:hover {
  cursor: pointer;
  opacity: 0.9;
}

button {
  border-radius: 5px;
  margin: 1vw 1vw;
  padding: 1vw;
  border: none;
  width: 10vw;
  transition: 0.5s;
}


</style>