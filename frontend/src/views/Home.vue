<template>
  <div class="home">
    <Header title="Weather" />
    <div v-if="!showWeather">
      <Button text="Show Weather" @click="toggleShowWeather" />
    </div>
    <div v-else>
      <Button text="Close" @click="toggleShowWeather" />
    </div>
    <br><br>
    <div v-if="showWeather">
      <input type="text" class="inp" v-if="showWeather" v-model="search" placeholder="filter cities">
      <br><br>
      <div class="cities" v-if="search" v-for="weather in filteredCities" :key="weather.id">
        <router-link :to="{name: 'CityDetails', params: {name: weather.city}}">
          <h3> {{ weather.city }}: {{weather.temp}} </h3>
        </router-link>
      </div>
      <div class="cities" v-else v-for="weather in weathers" :key="weather.id">
        <router-link :to="{name: 'CityDetails', params: {name: weather.city}}">
          <h3> {{ weather.city }}: {{weather.temp}} </h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Button from "../components/Button";
import { ref, computed } from 'vue'

export default {
  name: 'Home',
  components: {
    Header,
    Button
  },
  setup() {
    const weathers = ref([
      {"id": 1, "city": 'Barcelona', "temp": 25},
      {"id": 2, "city": 'Berlin', "temp": 21},
      {"id": 3, "city": 'London', "temp": 10},
      {"id": 4, "city": 'Paris', "temp": 20},
      {"id": 5, "city": 'Tel Aviv', "temp": 30},
    ])
    let showWeather = ref(false)
    const search = ref('')
    const toggleShowWeather = (() => showWeather.value = !showWeather.value)
    const filteredCities = computed(() =>
        weathers.value.filter(weather => weather.city.toLowerCase()
          .includes(search.value.toLowerCase())))
    return { weathers, showWeather, search, toggleShowWeather, filteredCities }
  }
}

</script>
<style>
  .inp {
    width: 200px;
    height: 40px;
  }
  .cities h3 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 350px;
    cursor: pointer;
    color: #444;
  }
  .cities h3:hover {
    background: #ddd;
  }
  .cities a {
    text-decoration: none;
  }

</style>
