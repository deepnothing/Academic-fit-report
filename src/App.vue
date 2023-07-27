<script setup lang="ts">
import { ref } from "vue";
import AcademicFitReport from "./components/AcademicFitReport.vue";
import AthleteData from "./assets/data.json";

const athlete_info = ref(AthleteData.data[0])
</script>

<template>
  <div class="container">
    <AcademicFitReport :athlete="athlete_info" />
  </div>
</template>

