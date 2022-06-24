<template>
  <div class="bg-red-300">
    <NuxtLink
      class="flex items-center rounded-lg"
      active-class="bg-gray-200 before:(absolute w-1 h-6 rounded-r bg-blue-200)"
      to="/baby2"
    >
      <button class="p-2">
        <slot class="h-6 w-6" name="icon"></slot>
      </button>
      <div v-if="isOpen">Field</div>
    </NuxtLink>
  </div>
</template>

<script setup></script>
