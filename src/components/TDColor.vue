<script setup lang="ts">
import Rainbow from 'rainbowvis.js';

const { gpa, athleteGPA } = defineProps<{
    gpa: number,
    athleteGPA: number,
}>();

const rainbow = new Rainbow();
rainbow.setSpectrum('#75ace5', '#a6a8da', '#b4a7d6', '#c194b5', '#d7737d');
const s: string[] = Array.from({ length: 100 }, (_, i) => rainbow.colourAt(i + 1));

const gpaColor = (schoolGPA: number) => {
    const difference = Math.round((schoolGPA - athleteGPA) * 1000);
    const index = difference <= -100 ? 0 : difference >= 100 ? 99 : ((difference + 100) / 200) * 100;
    return `#${s[index]}`;
};

</script>

<template>
    <td :style="{ backgroundColor: gpaColor(gpa) }">{{ gpa }}</td>
</template>

