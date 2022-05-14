<template>
  <button @click="performAction(action)" :style="calculateStyling" class="card-button">
    {{ content }}
  </button>
</template>

<script>

export default {
  name: "AsduiButton",
  props: ["backgroundColor", "size", "content", "contentColor", "contentSize", "action"],
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
    }
  },
  setup() {
    const performAction = (action) => {
      switch (action) {
        default:
          console.log(action);
          break;
      }
    }
    return {performAction};
  }
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