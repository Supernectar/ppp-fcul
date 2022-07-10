<template>
  <div class="px-2 pt-2">
    <div class="bg-white rounded p-2 shadow-md">
      <div>
        <h1 class="text-sm font-semibold">
          Categories
          <NuxtLink
            to="/categories"
            class="ml-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >See all categories</NuxtLink
          >
        </h1>
      </div>
      <ul class="flex overflow-auto">
        <template v-for="a in 3">
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="hover:bg-gray-100 text-center p-2 rounded m-2 group flex-shrink-0"
          >
            <NuxtLink :to="`/items?category=${category.name}`">
              <img
                :src="category.imgPath || '/items/627.png'"
                class="h-12 w-12 rounded-full border p-2 m-auto"
                :style="`background-color: #${category.color}`"
                :alt="`category ${category.name}`"
              />
              <div class="group-hover:underline">
                {{ category.name }}
              </div>
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
const categoryMain = (await $fetch('/api/categories?name=main'))[0];
const categories = ref([]);
onBeforeMount(async () => {
  for (const categoryId of categoryMain.children) {
    categories.value.push(await $fetch(`/api/categories/${categoryId}`));
  }
});
</script>
