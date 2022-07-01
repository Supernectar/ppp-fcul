<template>
  <div>
    <p>{{ $attrs.name }}</p>
    <RecursiveCategory v-if="$attrs.children"></RecursiveCategory>
  </div>
</template>
