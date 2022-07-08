<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Products</h1>
          <div id="products" class="mt-4 p-2 border rounded-xl">
            <h2 class="text-xl font-semibold">
              Products you're currently selling
            </h2>
            <div>
              <ul>
                <li v-for="product in products">
                  <b>product: </b>
                  <NuxtLink :to="`/profile/supplier/products/${product._id}`">{{
                    product.name
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div id="sellProduct" class="mt-4 p-2 border rounded-xl">
            <h2 class="text-xl font-semibold">Create a new product here</h2>
            <div v-if="user.data.supplierData.storages.length > 0">
              <div>
                Specify the item you want to sell: <br />
                <FormKit
                  v-model="item"
                  type="select"
                  label="Item"
                  placeholder="Choose your item"
                  :options="items"
                  :value="items[0]"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                Cannot find the item you're looking for?
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
            <div>
              Choose in which storages your want to add your product:
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

              <FormKit
                v-model="name"
                type="text"
                label="Name"
                validation="required"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />
              <div class="flex gap-4">
                <FormKit
                  v-model="price"
                  label="Price"
                  type="text"
                  name="price"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full sm:w-30 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="currencyUnit"
                  label="Currency unit"
                  type="select"
                  name="currencyUnit"
                  :options="['$', '€']"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full sm:w-15 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <FormKit
                v-model="quantity"
                label="Quantity of product"
                type="text"
                name="quantity"
                validation="required"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />
              <button
                class="bg-gray-200 border rounded"
                @click="createProducts"
              >
                Add product
              </button>
            </div>
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
const products = ref([]);

const item = ref({});
const storage = ref({});
const price = ref('');
const currencyUnit = ref('');
const quantity = ref('');
const name = ref('');

storages.value = await $fetch(`/api/users/${user.data._id}/storages`);
for (const storage of storages.value) {
  const productsStorage = await $fetch(
    `/api/users/${user.data._id}/storages/${storage._id}/products`
  );
  for (const productStorage of productsStorage) {
    products.value.push(productStorage);
  }
}

const items = ref([]);
items.value = await $fetch(`/api/items`);
for (const item of items.value) {
  item.label = item.name;
  item.value = item._id;
}

const selectedStorages = ref([]);
const storageIds = ref([]);

async function createProducts() {
  for (const selectedStorage of selectedStorages.value) {
    storageIds.value.push(selectedStorage._id);
  }
  console.log(storageIds.value);
  await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: name.value,
      item: item.value,
      price: price.value,
      currencyUnit: currencyUnit.value,
      stripeId: 'price_1LEa8fAIdQC80EPdihds8cUG',
      quantity: quantity.value,
      supplier: user.data._id,
      storages: [storageIds.value]
    }
  });
}
</script>
