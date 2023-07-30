<script setup lang="ts">
import { useAthleteStore } from '../stores/athlete';

const athlete = useAthleteStore().athlete;
</script>

<template>
  <div class="flex flex-row justify-between">
    <div class="flex flex-row">
      <img :src="athlete.profile_image" class="rounded-full" />
      <div class="info">
        <input  v-model="athlete.name" class="outline-none" />
        <ul>
          <li>
            <label>Sport:</label>
            {{ athlete.sport }}
          </li>
          <li>
            <label>Class:</label>
            {{ athlete.grad_year }}
          </li>
          <li>
            <label>Club:</label>
            {{ athlete.club.name }}
          </li>
          <li>
            <label>High School:</label>
            {{ athlete.high_school.name }}
          </li>
          <li>
            <label>GPA:</label>
            {{ athlete.gpa }}
          </li>
          <li>
            <label>Desired Major:</label>
            {{ athlete.major }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <img src="../assets/logo.png" />
      <div>
        Academic Fit Report
      </div>
    </div>
  </div>
</template>