<template>
  <p>Hey there! {{ userFullName }}</p>
  <i>This page is where you have control on what happens in the app.</i>
  <div>
    <p>Your basic data:</p>
    <div class="information">
      <i>Name:</i><i>{{ userFullName }}</i>
      <i>Email:</i><i>{{ userEmail }}</i>
      <i>Phone:</i><i>{{ userPhone }}</i>
      <i>Password:</i><i @click="alert('Sorry, its not implemented yet!')">xxxxxxxx (Click to change)</i>
      <i>isActive:</i><i>{{ isActive }}</i>
      <i></i>
    </div>
  </div>
  <router-link :to="{name: 'UserInterface'}">
    <asdui-button button-type="submit" button-text="Customize Interface"/>
  </router-link>
</template>

<script>
import {useAsduiStore} from "@/stores/asduiStore";
import AsduiButton from "@/components/general/MenuButton";

export default {
  name: "Profile",
  components: {AsduiButton},
  computed: {
    userFullName() {
      return this.asduiStore.user.firstName + this.asduiStore.user.lastName;
    },
    userEmail() {
      return this.asduiStore.user.email;
    },
    userPhone() {
      return this.asduiStore.user.phoneNumber;
    },
    isActive() {
      return this.asduiStore.userSettings.isActive;
    },
  },
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

div.information {
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1vh;
  justify-items: center;
}
</style>