<template>
  <div
    v-if="$attrs.itemValue.minPrice < 999999"
    class="group hover:shadow rounded overflow-hidden"
  >
    <NuxtLink :to="`/items/${$attrs.itemValue._id}`">
      <div class="p-2 overflow-hidden">
        <img
          :src="$attrs.itemValue.imgPath"
          class="p-2 h-30 w-30 group-hover:scale-100 transition-all m-auto"
        />
      </div>
    </NuxtLink>

    <div class="p-2 bg-white">
      <h5 class="font-semibold text-left">
        {{ $attrs.itemValue.name }}
      </h5>
      <h6 class="text-left">
        {{ $attrs.itemValue.brand }}
      </h6>
      <div class="flex items-center justify-between">
        <ul class="flex">
          <li v-for="i in 5" :key="i">
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="star"
              class="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                :d="
                  $attrs.itemValue.rating < i
                    ? 'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
                    : 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                "
              ></path>
            </svg>
          </li>
        </ul>
        <div class="text-gray-500">(23)</div>
      </div>
      <div class="flex">
        <p>
          {{ $attrs.itemValue.minPrice }}€ - {{ $attrs.itemValue.maxPrice }}€
        </p>
      </div>
      <div class="flex justify-end">
        <button
          v-if="user.isLoggedIn"
          class="rounded hover:(bg-black bg-opacity-5)"
          @click="toggleFavourite($attrs.itemValue._id)"
        >
          <HeartIconSolid
            v-if="
              user.data.consumerData.wishlist.includes($attrs.itemValue._id)
            "
            class="h-8 w-8 p-1 text-purple-500"
          />
          <HeartIconOutline v-else class="h-8 w-8 p-1 text-purple-500" />
        </button>
        <button
          class="rounded hover:(bg-black bg-opacity-5)"
          @click="$emit('openModal', $attrs.itemValue)"
        >
          <InformationCircleIcon class="h-8 w-8 p-1 text-purple-500" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  InformationCircleIcon,
  HeartIcon as HeartIconOutline
} from '@heroicons/vue/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/solid';

const user = useUser();
const { itemValue } = useAttrs();
const products = ref([])

onBeforeMount(() => {
  products.value = await $fetch(`/api/products?item=${itemValue._id}`);
})

const toggleFavourite = (itemId) => {
  if (user.data.consumerData.wishlist.includes(itemId)) {
    user.data.consumerData.wishlist.splice(
      user.data.consumerData.wishlist.indexOf(itemId),
      1
    );
  } else user.data.consumerData.wishlist.push(itemId);
};
</script>
