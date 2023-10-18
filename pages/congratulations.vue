<template>
  <div
    class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center"
  >
    <h1 class="mt-4 text-3xl text-orange-600">Congratulations !!!</h1>
    <p class="mt-4 text-xl">Time you use to compled this game is</p>
    <h2 class="mt-4 text-xl">
      {{ timeToPlay.totalTime.reduce((total, el) => (total += el)) }}s
    </h2>
  </div>
</template>

<script setup>
const timeToPlay = useTimeToPlay();
</script>

<style></style>
