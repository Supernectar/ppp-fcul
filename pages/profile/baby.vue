<template>
  <div>
    <button @click="insertItem">Test insert Item</button>
  </div>
</template>

<script setup>
function insertItem() {
  $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'dsdaj',
      weight: 2,
      type: 'ds',
      brand: 'jdsk',
      website: 'test',
      description: 'test',
      exp_date: 'test',
      rating: 'test',
      category: 'test'
    }
  });
}
</script>
