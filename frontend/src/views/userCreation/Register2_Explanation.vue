<template>
  <div>
     <h2>
      Welcome {{ camelCase($route.params.name) }}!
    </h2>
    <p>
      ASDUI tries it’s best to be customizable so that you can help
      your cared use it as best as they can. <br><br>
      Not every one is a designer though! <br><br>
      We’ve done some homework and created template ideas to fit your requirements as much as possible<br><br>
      All that’s for you is to answer some question and finalize by adding the finishing touches in case you want to. <br><br>
      The process includes some basic details about the cared including some behavioral questions.<br><br>
      We promise not to share anything with anyone. <br>It will only be used to generate the template.
    </p>
    <div>
      <router-link :to="{name: 'Details'}">
        <asdui-button button-type="next"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import AsduiButton from "@/components/general/MenuButton";
import AsduiLogo from "@/components/general/AsduiLogo";
import {camelCase} from "@/utils/utils"


export default {
  name: "Explanation",
  components: {AsduiLogo, AsduiButton},
  methods: {
    camelCase
  }
}
</script>

<style scoped>
p {
  text-align: start;
  font-size: 1.2em;
}
</style>