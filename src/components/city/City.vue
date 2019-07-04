<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "components/city/base/Header";
import CityAlphabet from "components/city/base/Alphabet";
import CityList from "components/city/base/List";
import CitySearch from "components/city/base/Search";

import { getCities } from "@/api";

export default {
  name: "City",
  data() {
    return {
      hotCities: [],
      cities: []
    };
  },
  components: {
    CityHeader,
    CityAlphabet,
    CityList,
    CitySearch
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let { hotCities, cities } = await getCities();
      this.hotCities = hotCities;
      this.cities = cities;
    }
  }
};
</script>

<style lang="scss" scoped></style>
