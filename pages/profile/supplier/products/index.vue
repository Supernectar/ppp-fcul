<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Products</h1>
          <div id="products" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">
              products your're currently selling
            </h2>
            <p>description here</p>
            <div>
              <ul>
                <li v-for="productLine in productLines">
                  <b>product: </b>
                  <NuxtLink
                    :to="`/profile/supplier/products/${productLine._id}`"
                    >{{ productLine.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div id="sellProduct" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">Create a new product here</h2>
            <p>description here</p>
            <div v-if="user.data.supplierData.storages.length > 0">
              <div>
                specify the item you want to sell: <br />
                <input class="border" type="text" name="" id="" />
                cannot find the item you're looking for?
                <NuxtLink
                  class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                  to="/profile/supplier/createItem"
                  >register your item in our system</NuxtLink
                >
              </div>
              <div>
                <img src="/img/627.png" alt="" />
              </div>
            </div>
            <div v-else>
              you must create a storage first
              <img src="/img/a.jpg" class="h-60" alt="" />
            </div>
            <div class="h-80">
              Choose in which storages your want to add your product
              <Listbox
                class="z-20 inline-block w-60"
                v-model="selectedStorages"
                multiple
              >
                <div class="relative mt-1">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                  >
                    <span class="block truncate">
                      {{
                        selectedStorages
                          .map((storage) => storage.name)
                          .join(', ')
                      }}
                    </span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <SelectorIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="storage in storages"
                        :key="storage.name"
                        :value="storage"
                        as="template"
                      >
                        <li
                          :class="[
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-10 pr-4'
                          ]"
                        >
                          <span
                            :class="[
                              selected ? 'font-medium' : 'font-normal',
                              'block truncate'
                            ]"
                            >{{ storage.name }}</span
                          >
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
              <button
                class="bg-gray-200 border rounded"
                @click="createProducts"
              >
                ADD ZA PRODUCT
              </button>
            </div>

            name:
            <input class="border" type="text" />
            price:
            <input class="border" type="text" />
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

const user = useUser();

const storages = ref([]);
const productLines = ref([]);

productLines.value = (
  await $fetch(`/api/users/${user.data._id}/productLines`)
).data.items;

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
