<template>
  <h1 class="text-center text-3xl text-red-400">Start play at level ?</h1>
  <div class="h-full flex items-center justify-center text-red-400 text-xl">
    <NuxtLink to="/playScreen">
      <UCard
        @click="timeToPlay.checkTime(), levelPlay.changeLevel(2)"
        class="mr-4"
        >Mode 2x2</UCard
      >
    </NuxtLink>
    <NuxtLink to="/playScreen">
      <UCard
        @click="timeToPlay.checkTime(), levelPlay.changeLevel(4)"
        class="mr-4"
        >Mode 4x4</UCard
      >
    </NuxtLink>
    <NuxtLink to="playScreen">
      <UCard
        @click="timeToPlay.checkTime(), levelPlay.changeLevel(6)"
        class="mr-4"
        >Mode 6x6</UCard
      >
    </NuxtLink>
    <NuxtLink to="playScreen">
      <UCard @click="timeToPlay.checkTime(), levelPlay.changeLevel(8)"
        >Mode 8x8</UCard
      >
    </NuxtLink>
  </div>
</template>

<script setup>
const timeToPlay = useTimeToPlay();
const levelPlay = useLevelStore();
</script>

<style></style>
