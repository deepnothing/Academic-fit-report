<script setup lang="ts">
import { useAthleteStore } from '../stores/athlete';
import { storeToRefs } from 'pinia';
import Info from "../types/info";
import { computed } from 'vue';
import { getInitials, getFirstLetterOfLastName } from '../utils/utils'

const athleteStore = useAthleteStore();
const { editName } = athleteStore;
const { isEditing, athlete } = storeToRefs(athleteStore);

const athleteInfo: Info[] = [
  { label: 'Sport:', value: athlete.value.sport },
  { label: 'Class:', value: athlete.value.grad_year },
  { label: 'Club:', value: athlete.value.club.name },
  { label: 'High School:', value: athlete.value.high_school.name },
  { label: 'GPA:', value: athlete.value.gpa },
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

const handleInput: Function = (event: KeyboardEvent) => {
  const inputElement = event.target as HTMLInputElement | null;
  if (inputElement) {
    const deleteKey = event.key === 'Backspace' || event.key === 'Delete'
    const isDeleteLast = inputElement.value.length === 1 && deleteKey;
    const isDeleteWhole = inputElement.selectionStart === 0 && inputElement.selectionEnd === inputElement.value.length && deleteKey;
    // Only alphabets and spaces are allowed
    const validInputPattern = /^[A-Za-z\s]+$/;
    if (validInputPattern.test(event.key) && !isDeleteLast && !isDeleteWhole) {
      editName(inputElement.value);
    } else {
      event.preventDefault();
    }
  }
};

const imageBubbleStyles = 'text-white rounded-full flex justify-center items-center'

</script>

<template>
  <div class="flex flex-row justify-between">
    <div class="flex flex-row">
      <div>
        <img v-if="!isEditing && athlete.profile_image" :src="athlete.profile_image" :class="imageBubbleStyles" />
        <div v-else :style="{ backgroundColor: placeholderColorScheme[colorIndex] }" :class="imageBubbleStyles">
          {{ getInitials(athlete.name) }} </div>
      </div>
      <div class="info">
        <input v-model="athlete.name" @keydown="(e) => handleInput(e)" class="outline-none caret-primary text-primary" />
        <ul>
          <li v-for=" item  in  athleteInfo " :key="item.label">
            <label>{{ item.label }}</label>
            {{ item.value }}
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