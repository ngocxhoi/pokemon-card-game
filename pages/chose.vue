<template>
  <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
    <UButton class="mx-8 scale-[1.3]" to="/">Restart game</UButton>
    <UButton class="mx-8 scale-[1.3]" to="/congratulations">End game</UButton>
    <UButton
      class="mx-8 scale-[1.3]"
      @click="level.nextLevel()"
      to="/playScreen"
      >Next Level</UButton
    >
  </div>
</template>

<script setup lang="ts">
const timeToPlay = useTimeToPlay();
const level = useLevelStore();
</script>
<style></style>
