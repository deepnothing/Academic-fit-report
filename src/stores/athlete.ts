import { defineStore } from "pinia";
import { ref } from "vue";
import AthleteData from "../assets/data.json";

export const useAthleteStore = defineStore("athlete", () => {
  const athlete = ref(AthleteData.data[0]);
  // function increment() {
  //   count.value++;
  // }

  return { athlete };
});
