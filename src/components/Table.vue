<script setup lang="ts">
import { useAthleteStore } from '../stores/athlete';
import Column from '../types/column';
import Row from './Row.vue';

const { athlete } = useAthleteStore();

const columns: Column[] = [
    { head: "School Name" },
    { head: "Athletic Div" },
    { head: "Conference", },
    { head: "Ranking* <br> <span class='font-normal'>(DI NCAA)<span> <br> <span class='font-normal'>(DII & DIII Hero Sports)<span>", },
    { head: "GPA**", subheads: ["Min", "25%", "50%", "75%", "Max"] },
    { head: "SAT Reading*** <br> 25%-75%" },
    { head: "SAT Math*** <br> 25%-75%" },
    { head: "ACT Composite*** <br> 25%-75%" },
];
</script>

<template>
    <div class="table-container overflow-x-auto">
        <table class="table table-auto w-full">
            <thead class="bg-dark text-white">
                <tr>
                    <th class="px-0 whitespace-nowrap" v-for="(column, index) in columns" :key="index"
                        :class="{ 'sticky left-0': index === 0 }" :colspan="column.subheads ? column.subheads.length : 1"
                        :rowspan="column.subheads ? 1 : 2">
                        <span v-html="column.head"></span>
                <tr v-if="column.subheads">
                    <th class="px-1 align-bottom" v-for="(subhead, subIndex) in column.subheads" :key="subIndex">
                        {{ subhead }}
                    </th>
                </tr>
                </th>
                </tr>
            </thead>
            <tbody>
                <Row v-for="(report, index) in  athlete.report " :key="index"
                    :class="index % 2 === 0 ? 'bg-' : 'bg-secondary'" :report="report" :athleteGPA="athlete.gpa" />
            </tbody>
        </table>
    </div>
</template>

