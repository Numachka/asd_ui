<template>
  <h1>
    Setting the Cards
  </h1>
  <table>
    <tr>
<!--      <td>-->
<!--        <SettingsOptions />-->
<!--      </td>-->
      <td>
        <settings-card/>
      </td>
    </tr>
  </table>
</template>

<script>
import {ref} from 'vue'
import Card from "../../components/Card";
import SettingsCard from "@/components/SettingsCard";
import SettingsOptions from "../../components/SettingsOptions";

export default {
  name: "UserInterface",
  components: {
    Card,
    SettingsOptions,
    SettingsCard
  },
}
</script>

<style scoped>
td {
  width: 30vh;
}
</style>