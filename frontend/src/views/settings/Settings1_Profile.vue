<template>
  <p>Hey there! {{ asduiStore.user.firstName + ' ' + asduiStore.user.lastName }}</p>
  <i>This page is where you have control on what happens in the app.</i>
  <div>
    <p>Your basic data:</p>
    <div class="information">
      <i>Name:</i><i>{{ asduiStore.user.firstName + ' ' + asduiStore.user.lastName }}</i>
      <i>Email:</i><i>{{ asduiStore.user.email }}</i>
      <i>Phone:</i><i>{{ asduiStore.user.phoneNumber }}</i>
      <i>Password:</i><i @click="alert('Sorry, its not implemented yet!')">xxxxxxxx (Click to change)</i>
      <i>isActive:</i><i>{{ asduiStore.userSettings.isActive }}</i>
      <i></i>
    </div>
  </div>
  <router-link :to="{name: 'UserInterface'}">
    <asdui-button button-type="submit" button-text="Customize Interface"/>
  </router-link>
  <div class="copyright">
    <i>Made by Ron Borower, Itay Danino and Nahum Kletkin. Guided by Yoram Rozenwaks. <br> Made as a project for Afeka
    College of Engineering, 2022 &copy; </i>
  </div>
</template>

<script>
import {useAsduiStore} from "@/stores/asduiStore";
import AsduiButton from "@/components/general/MenuButton";

export default {
  name: "Profile",
  components: {AsduiButton},
  setup() {
    const asduiStore = useAsduiStore();
    return {asduiStore};
  }
}
</script>

<style scoped>
div {
  display: grid;
}

div.copyright {
  margin-top: 20vh;
}

div.information {
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1vh;
  justify-items: center;
}
</style>