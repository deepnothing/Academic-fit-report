<script setup lang="ts">
import { useAthleteStore } from '../stores/athlete';
import Row from './Row.vue';

const { athlete } = useAthleteStore();

const gpaPercents = ['Min', '25%', '50%', '75%', 'Max'];
</script>

<template>
    <div class="table-container overflow-x-auto">
        <table class="table table-auto w-full overflow-x-auto" role="table" aria-label="Athlete Report">
            <thead class="bg-dark text-white">
                <tr>
                    <th class="sticky left-0" scope="col" rowspan="2">School Name</th>
                    <th scope="col" rowspan="2">Athletic Div</th>
                    <th scope="col" rowspan="2">Conference</th>
                    <th scope="col" rowspan="2">
                        Ranking* <br>
                        <span class="font-normal">(DI NCAA)</span> <br>
                        <span class="font-normal">(DII & DIII Hero Sports)</span>
                    </th>
                    <th scope="colgroup" colspan="5">GPA**</th>
                    <th scope="col" rowspan="2">SAT Reading*** <br> 25%-75%</th>
                    <th scope="col" rowspan="2">SAT Math*** <br> 25%-75%</th>
                    <th scope="col" rowspan="2">ACT Composite*** <br> 25%-75%</th>
                </tr>
                <tr>
                    <th v-for="(gpa, index) in gpaPercents" :key="index" scope="col" class="px-1 align-bottom">{{ gpa }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <Row v-for="(report, index) in athlete.report" :key="index" :index="index" :report="report"
                    :athleteGPA="athlete.gpa" />
            </tbody>
        </table>
    </div>
</template>





