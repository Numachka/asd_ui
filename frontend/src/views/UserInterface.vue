<template>
  <h1>
    Settings the Cards
  </h1>
  <table>
    <tr>
      <td>
        <SettingsOptions />
      </td>
      <td>
        <Card image="Youtube.svg" header="YouTube" url="https://www.youtube.com/"/>
      </td>
    </tr>
  </table>
</template>

<script>
import {ref} from 'vue'
import Card from "../components/Card";
import SettingsOptions from "../components/SettingsOptions";

export default {
  name: "UserInterface",
  components: {
    Card,
    SettingsOptions
  },
}
</script>

<style scoped>
td {
  width: 30vh;
}
</style>