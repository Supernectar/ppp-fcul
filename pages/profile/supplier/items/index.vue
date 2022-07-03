<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Items</h1>
          <!-- <div id="products" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">
              Items your're currently selling
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
          </div> -->
          <div id="sellProduct" class="mt-4 border rounded-xl">
            <h2 class="text-xl font-semibold">Create a new item here</h2>
            <!-- <p>description here</p> -->
            <div v-if="user.data.supplierData.storages.length > 0">
              <div>
                <br />
                Specify the item you want to sell:
                <!-- <br />
                <input class="border" type="text" name="" id="" /> -->
                <!-- cannot find the item you're looking for?
                <NuxtLink
                  class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                  to="/profile/supplier/createItem"
                  >register your item in our system</NuxtLink
                > -->
              </div>
              <div>
                <img src="/img/627.png" alt="" />
              </div>
            </div>
            <div v-else>
              you must create a storage first
              <img src="/img/a.jpg" class="h-60" alt="" />
            </div>

            <!-- <div class="flex gap-4 mt-5"> -->
            <FormKit type="form" @submit="createItem">
              <div>
                <FormKit
                  v-model="name"
                  label="Item name"
                  type="text"
                  name="name"
                  validation="required|length:3"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <FormKit
                  v-model="weigth"
                  label="Weight of item"
                  type="text"
                  name="weigth|length:6"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <FormKit
                  v-model="brand"
                  label="Brand of Item"
                  type="text"
                  name="brand"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <FormKit
                  v-model="description"
                  label="Description"
                  type="text"
                  name="description"
                  validation="required|length:4"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <FormKit
                  v-model="producer"
                  label="Producer"
                  type="text"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <FormKit
                  v-model="categories2"
                  label="Category of item"
                  type="select"
                  :value="categories[0]"
                  :options="categories"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <FormKit
                  v-model="isConsumable"
                  type="checkbox"
                  label="Is this item a consumable?"
                  name="isConsumable"
                />
              </div>
              <div class="h-80">
                Choose which items are part of your new item
                <Listbox
                  class="z-20 inline-block w-60"
                  v-model="selectedItems"
                  multiple
                >
                  <div class="relative mt-1">
                    <ListboxButton
                      class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                      <span class="block truncate">
                        {{ selectedItems.map((item) => item.name).join(', ') }}
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
                          v-for="item in items"
                          :key="item.name"
                          :value="item"
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
                              >{{ item.name }}</span
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
                <br />
                <button class="bg-gray-200 border rounded">Add item</button>
              </div>
            </FormKit>
          </div>
          <!-- </div> -->
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

const items = ref([]);
items.value = await $fetch(`/api/items`);
const selectedItems = ref([]);

const categories = ref([]);
categories.value = await $fetch(`/api/categories`);
console.log(categories.value);
for (const category of categories.value) {
  category.label = category.name;
  category.value = category._id;
}
console.log(categories.value);

// Create new storage
const name = ref('');
const weight = ref('');
const brand = ref('');
const website = ref('');
const description = ref('');
const producer = ref('');
const isConsumable = ref('');
const category = ref('');
const categories2 = ref('');
const itemss = ref('');

async function createItem() {
  // for (const item2 of selectedItems.value) {
  // }
  const res = await $fetch(`/api/items`, {
    method: 'POST',
    body: {
      name: name.value,
      weight: weight.value,
      brand: brand.value,
      website: website.value,
      description: description.value,
      producer: producer.value,
      isConsumable: isConsumable.value,
      category: categories2.value,
      itemss: selectedItems.value
    }
  });
  console.log(res);
}
</script>
