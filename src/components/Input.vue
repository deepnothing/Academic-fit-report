<script setup lang="ts">
import { useAthleteStore } from '../stores/athlete';

const athleteStore = useAthleteStore();
const { editName, athlete } = athleteStore;

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
</script>

<template>
    <input v-model="athlete.name" @keydown="(e) => handleInput(e)" />
</template>