<script setup lang="ts">
import { Report } from '../types/athlete';
import TDColor from './TDColor.vue';
import { addZeroes, formatScores } from '../utils/utils'

const { report, athleteGPA } = defineProps<{
    report: Report,
    athleteGPA: number,
}>();
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
        <td>{{ formatScores(report.sat.reading.min, report.sat.reading.max) }}</td>
        <td>{{ formatScores(report.sat.math.min, report.sat.math.max) }}</td>
        <td>{{ formatScores(report.act.max, report.act.min) }}</td>
    </tr>
</template>

