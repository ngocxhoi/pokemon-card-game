<template>
  <div class="grid-layout grid-col">
    <Card
      class="h-[130px] w-[90px]"
      v-for="(el, index) in arr"
      :key="index"
      ref="elements"
      :cardValue="{ el, index }"
      @locationCard="takeLocation"
    />
  </div>
</template>

<script setup>
import totalFunc from "@/utils/shuffle.js";
import LogicPlay from "@/utils/logicPlay.js";

const timeToPlay = useTimeToPlay();
const levelPlay = useLevelStore();
let level = ref(levelPlay.mode);

let arr = totalFunc.shuffleArr(level.value);
let elements = ref(null);

// Logic game
let numOfCardFlipped = ref(0);
let amountCard = [];
let takeLocation = async (location) => {
  LogicPlay.logicFlip(location, numOfCardFlipped, amountCard, elements);
  LogicPlay.logicEnd(numOfCardFlipped);
};
</script>

<style scoped>
.grid-layout {
  grid-template-columns: repeat(v-bind(level), 90px);
}
</style>
