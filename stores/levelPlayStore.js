import { defineStore } from "pinia";

export const useLevelStore = defineStore("levelStore", () => {
  let mode = ref(0);
  function changeLevel(n) {
    mode.value = n;
  }
  function nextLevel() {
    mode.value += 2;
  }
  return { mode, changeLevel, nextLevel };
});
