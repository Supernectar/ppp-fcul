<template>
  <div>
    <GMap class="h-60 w-80" :markers-positions="storagePositions" />
  </div>
</template>

<script setup>
const storagePositions = ref([
  {
    lat: 38.730292,
    lng: -9.16323
  },
  {
    lat: 38.591152,
    lng: -8.933824
  },
  {
    lat: 38.744067,
    lng: -9.365785
  }
]);
</script>
