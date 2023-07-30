<script setup lang="ts">
import { Report } from '../types/athlete';
import TDColor from './TDColor.vue'

const { report, athleteGPA } = defineProps<{
    report: Report,
    athleteGPA: number,
}>();

const addZeroes = (num: number) => Number(num).toFixed(Math.max(num.toString().split('.')[1]?.length, 2) || 2);

const scores = (min: number | string, max: number | string) => {
    if (typeof min === 'number') {
        return `${min}-${max}`
    } else {
        return ' Not Reported'
    }
};
</script>

<template>
    <tr>
        <td>{{ report.school }}</td>
        <td>{{ report.division }}</td>
        <td>{{ report.conference }}</td>
        <td>{{ report.ranking }}</td>
        <td>{{ addZeroes(report.gpa.min) }}</td>
        <td>{{ addZeroes(report.gpa["25%"]) }}</td>
        <TDColor :gpa='report.gpa["50%"]' :athleteGPA="athleteGPA" />
        <td>{{ addZeroes(report.gpa["75%"]) }}</td>
        <td>{{ addZeroes(report.gpa.max) }}</td>
        <td>{{ scores(report.sat.reading.min, report.sat.reading.max) }}</td>
        <td>{{ scores(report.sat.math.min, report.sat.math.max) }}</td>
        <td>{{ scores(report.act.max, report.act.min) }}</td>
    </tr>
</template>

