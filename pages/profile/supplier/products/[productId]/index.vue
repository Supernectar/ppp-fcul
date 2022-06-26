<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Products</h1>
          <div id="details" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">Details</h2>
            <p>Here are some details:</p>
            <div>
              product name: {{ products[0].productLine.name }}
              <br />
              <b>item it is referencing:</b>
              {{ products[0].productLine.item.name }}
            </div>
          </div>
          <div id="storages" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">Storages</h2>
            <p>Here are the storages in which you are selling this product:</p>
            <div>
              <ul>
                <li v-for="(product, i) in products" :key="i">
                  <b>storage: </b>
                  <NuxtLink
                    :to="`/profile/supplier/storages/${product.storage._id}`"
                    >{{ product.storage.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div id="statistics" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">Statistics</h2>
            <p>Here are some stats about this product:</p>
            <div>
              <ul>
                <li>-num vendas</li>
                <li>-frequencia de compra por localização</li>
                <li>-total poluição gerada</li>
                <li>-outro?</li>
              </ul>
            </div>
          </div>
          <div id="remove" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">Remove product</h2>
            <p>
              You must delete this product from each storage to remove it from
              our system
            </p>
            <div></div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue';

import { CheckIcon, SelectorIcon } from '@heroicons/vue/outline';

const route = useRoute();
const user = useUser();

const products = (
  await $fetch(`/api/products?productLine=${route.params.productId}`)
).data.items;
console.log(products);
const storages = ref([]);

storages.value = (
  await $fetch(`/api/users/${user.data._id}/storages`)
).data.items;
const selectedStorages = ref([]);

async function createProducts() {
  for (const storage of selectedStorages.value) {
    console.log(storage._id);
    await $fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'pipo',
        item: '62b7297435430a463a5864de', // washing machine 1
        price: Math.floor(Math.random() * 20),
        currencyUnit: '€',
        stripeId: 'price_1LEa8fAIdQC80EPdihds8cUG',
        quantity: 2,
        supplier: user.data._id,
        storage: storage._id
      })
    });
  }
}
</script>
