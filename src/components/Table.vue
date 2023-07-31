<script setup lang="ts">
import { useAthleteStore } from '../stores/athlete';
import Column from '../types/column';
import Row from './Row.vue';

const { athlete } = useAthleteStore();

const columns: Column[] = [
    { head: "School Name" },
    { head: "Athletic Div" },
    { head: "Conference", },
    { head: "Ranking* (DI NCAA) (DII & DIII Hero Sports)", },
    { head: "GPA**", subheads: ["Min", "25%", "50%", "75%", "Max"] },
    { head: "SAT Reading*** 25%-75%" },
    { head: "SAT Math*** 25%-75%" },
    { head: "ACT Composite*** 25%-75%" },
];
</script>

<template>
    <table>
        <thead class="bg-black text-white">
            <tr>
                <th class="px-5" v-for="(column, index) in columns" :key="index"
                    :colspan="column.subheads ? column.subheads.length : 1" :rowspan="column.subheads ? 1 : 2">
                    {{ column.head }}
            <tr v-if="column.subheads">
                <th class="px-3" v-for="(subhead, subIndex) in column.subheads" :key="subIndex">
                    {{ subhead }}
                </th>
            </tr>
            </th>
            </tr>
        </thead>
        <tbody>
            <Row v-for="(report, index) in  athlete.report " :key="index" :class="index % 2 === 0 ? '' : 'bg-secondary'"
                :report="report" :athleteGPA="athlete.gpa" />
        </tbody>
    </table>
</template>

