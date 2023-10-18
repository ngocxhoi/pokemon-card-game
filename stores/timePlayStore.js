import { defineStore } from "pinia";
import { now } from "lodash";

export const useTimeToPlay = defineStore("timePlayStore", () => {
  let totalTime = ref([]);
  let timeStart = ref(0);
  let timeEnd = ref(0);
  function checkTime() {
    timeStart.value = now();
    totalTime.value = [];
  }
  function stopTime() {
    timeEnd.value = now();
    totalTime.value.push(Math.floor((timeEnd.value - timeStart.value) / 1000));
    console.log(totalTime.value);
  }
  return { totalTime, timeStart, timeEnd, checkTime, stopTime };
});
