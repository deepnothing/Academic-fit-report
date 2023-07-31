import { defineStore } from "pinia";
import { ref } from "vue";
import AthleteData from "../assets/data.json";
import { Athlete } from "../types/athlete";

export const useAthleteStore = defineStore("athlete", () => {
  const athlete = ref<Athlete>(AthleteData.data[0]);
  const isEditing = ref<boolean>(false);

  function editName(text: string) {
    athlete.value.name = text;
    isEditing.value = true;
  }
  return { athlete, editName, isEditing };
});
