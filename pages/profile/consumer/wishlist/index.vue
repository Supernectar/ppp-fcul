<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">WishList</h1>
          <div id="suggestions" class="mt-4">
            <h2 class="text-xl font-semibold">
              Items you added to your favourites
            </h2>
            <p>
              <!-- This suggestion list is generated based on your last purshases -->
            </p>
            <div
              v-if="whishlistItems.length > 0"
              class="bg-light-600 rounded-xl p-2"
            >
              <ul class="flex gap-2 overflow-auto pb-2">
                <li v-for="(item, index) in whishlistItems" :key="index">
                  <ItemCard
                    :itemValue="item"
                    @open-modal="(info) => openModal(info)"
                  />
                </li>
              </ul>
            </div>
            <div v-else>
              You have no items added to your favourites,
              <NuxtLink to="/test" class="text-blue-500"
                >start browsing items</NuxtLink
              >
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useUser();

const wishlistIds = user.data.consumerData.wishlist;

const whishlistItems = ref([]);
for (let i = 0; i < wishlistIds.length; i++) {
  const item = await $fetch(`/api/items/${wishlistIds[i]}`);
  whishlistItems.value.push(item);
}
</script>
