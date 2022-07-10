<template>
  <div>
    <Navbar />
    <div class="relative">
      <div id="decoration" class="absolute h-full w-full z-1">
        <div class="absolute -left-30 -top-30">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 909 892"
            width="609"
          >
            <path
              id="Layer 1"
              class="fill-red-300"
              d="m173 890c-199.6-24.1-197.8-347-134-537 63.8-190 396.7-358.5 527-352 130.3 6.5 343 178.9 343 372 0 193.1-497.6 545.7-736 517z"
            />
          </svg>
        </div>
        <div class="absolute right-0 bottom-0">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1566 644"
            height="200"
          >
            <path
              id="Shape 2"
              class="fill-red-300"
              d="m1566 644h-1566c0 0 127.5-143.9 374-165 287.2-24.5 418.1-157.7 483.8-200.2 64.4-41.5 221-117.1 351.5-145.4 139.1-30.2 356.7-74.7 356.7-134.4 0-59.7 0 645 0 645z"
            />
          </svg>
        </div>
      </div>
      <section class="px-8 pt-4 relative z-2">
        <h1 class="text-4xl font-semibold text-center my-4">Categories</h1>
        <div class="bg-white rounded-xl p-2 shadow-md">
          <div>
            <NuxtLink
              to="/categories"
              class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >See more categories</NuxtLink
            >
          </div>
          <ul class="md:(flex flex-wrap) flex overflow-auto">
            <template v-for="a in 2">
              <li
                v-for="(category, index) in categories"
                :key="index"
                class="hover:bg-gray-100 text-center p-2 rounded m-2 group flex-shrink-0"
              >
                <NuxtLink :to="`/items?category=${category.name}`">
                  <img
                    :src="category.imgPath || '/items/627.png'"
                    class="h-20 w-20 rounded-full border p-2 m-auto"
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
      </section>

      <section class="px-8 pt-4 pb-4 relative z-2">
        <h1 class="text-4xl font-semibold text-center my-4">
          Trending products
        </h1>
        <div class="flex bg-white rounded-xl p-2 shadow-md">
          <ItemCard
            v-for="(item, index) in popularItems"
            :key="index"
            :itemValue="item"
          />
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { handleAuth } from '~/plugins/authfile';

const router = useRouter();

const categoryMain = (await $fetch('/api/categories?name=main'))[0];
const categories = ref([]);
onBeforeMount(async () => {
  handleAuth((error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log('logged in');
    // router.push('/');
  });

  for (const categoryId of categoryMain.children) {
    categories.value.push(await $fetch(`/api/categories/${categoryId}`));
  }
});

const popularItems = ref([]);
onBeforeMount(async () => {
  popularItems.value = await $fetch('/api/items');
});
</script>
