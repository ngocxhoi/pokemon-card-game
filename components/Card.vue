<template>
  <div
    class="card-inner"
    @click="isFlip(), locationCard(cardValue)"
    :class="{ active: isActive, disable: isDone }"
  >
    <UCard class="card-front card" />
    <UCard
      class="card-back card"
      :style="`background: url(/img/${cardValue.el}.png) no-repeat center center; background-size: contain`"
    />
    <p>{{ cardValue.el }}</p>
  </div>
</template>

<script setup>
let props = defineProps({
  cardValue: Object,
});
let isActive = ref(false);
function isFlip() {
  isActive.value = !isActive.value;
}
let isDone = ref(false);

const emits = defineEmits(["locationCard"]);
const locationCard = (location) => {
  emits("locationCard", location);
};

defineExpose({ isFlip, isDone });
</script>

<style scoped>
.card-inner {
  transform-style: preserve-3d;
  perspective: 600px;
}
.card-inner.disable {
  pointer-events: none;
}
.card-inner.active .card-front {
  transform: rotateY(-180deg);
}
.card-inner.active .card-back {
  transform: rotateY(0deg);
}
.card {
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.4s ease;
}
.card-front {
  background: url(/img/icon_back.png) no-repeat center;
  background-size: contain;
}
.card-back {
  transform: rotateY(180deg);
}
</style>
