<template>
  <button :style="calculateStyling" class="card-button" @click="performAction">
    {{ content }}
  </button>
</template>

<script>
export default {
  name: "AsduiButton",
  props: ["backgroundColor", "size", "content", "contentColor", "contentSize", "contentAction"],
  computed: {
    calculateStyling() {
      let height = '', width = '', fontSize = '';
      switch (this.size) {
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
      switch (this.contentSize) {
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
      return `background-color: ${this.backgroundColor};
              width: ${width};
              height: ${height};
              color: ${this.contentColor};
              font-size: ${fontSize};`
    },
    isMainMenu() {
      return this.$route.name === 'MainMenu';
    }
  },
  methods: {
    performAction() {
      if (this.isMainMenu) {
        console.log(this.contentAction)
        const actionParts = this.contentAction.split(' ');
        if (actionParts[0].includes('visit')) {
          window.location.href = actionParts[1];
          console.log(actionParts[1]);
        } else if (actionParts[0].startsWith('call')) {
          window.open('tel:+972' + actionParts[1].substring(1), '_self');
          console.log(actionParts[1]);
        } else {
          console.log('Sorry! This action is not supported yet');
        }
      }
    }
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