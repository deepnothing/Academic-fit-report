<script setup lang="ts">
import { addZeroes, getColorFromGPA } from '../utils/utils';

const { gpa, athleteGPA } = defineProps<{
    gpa: number,
    athleteGPA: number,
}>();
</script>

<template>
    <td :style="{ backgroundColor: getColorFromGPA(gpa, athleteGPA) }">{{ addZeroes(gpa) }}</td>
</template>

