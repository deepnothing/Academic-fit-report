<script setup lang="ts">
import { useAthleteStore } from '../stores/athlete';
import { storeToRefs } from 'pinia';
import Info from "../types/info";
import Input from './Input.vue';
import { computed } from 'vue';
import { getInitials, getFirstLetterOfLastName } from '../utils/utils';

const athleteStore = useAthleteStore();
const { isEditing, athlete } = storeToRefs(athleteStore);

const athleteInfo: Info[] = [
  { label: 'Sport:', value: athlete.value.sport },
  { label: 'High School:', value: athlete.value.high_school.name },
  { label: 'Class:', value: athlete.value.grad_year },
  { label: 'GPA:', value: athlete.value.gpa },
  { label: 'Club:', value: athlete.value.club.name },
  { label: 'Desired Major:', value: athlete.value.major },
];

const placeholderColorScheme = [
  '#f1603c',
  '#6082fa',
  '#827cb8',
  '#0097a4',
  '#ffe066',
  '#ffa94d'
];

const colorIndex = computed(() => {
  const charIndex = getFirstLetterOfLastName(athlete.value.name).charCodeAt(0) - 65;
  return Math.abs(charIndex % 6);
});
</script>

<template>
  <div class="flex flex-col-reverse lg:flex-row justify-between py-14">
    <div class="flex  justify-center sm:flex-row flex-col items-center">
      <div
        class="bg-cover bg-no-repeat bg-center h-32 w-32 flex items-center justify-center text-6xl text-white rounded-full"
        :style="{
          backgroundColor: (isEditing || !athlete.profile_image) ? placeholderColorScheme[colorIndex] : '',
          backgroundImage: !isEditing ? `url(${athlete.profile_image})` : ''
        }">
        {{ (isEditing || !athlete.profile_image) ? getInitials(athlete.name) : '' }}
      </div>
      <div class="mx-6 flex flex-col justify-center">
        <Input />
        <ul class="grid md:grid-cols-2 grid-cols-1">
          <li v-for="item in athleteInfo" :key="item.label">
            <label class="font-bold">{{ item.label }}</label>
            {{ item.value }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col pb-10 lg:pb-0">
      <div class="flex justify-center">
        <img src="../assets/logo.png" class="max-h-14" />
      </div>
      <div class="text-right text-base max-lg:text-center w-auto">
        Academic Fit Report
      </div>
    </div>
  </div>
</template>