<template>
  <div>
    <Navbar />
    <section class="m-4 p-4 rounded-xl overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col">
          <img
            src="/items/washingMachine_black.png"
            alt=""
            class="w-80 m-auto"
          />
          <div>
            <h2>Components:</h2>
            <ul class="flex gap-2 overflow-auto">
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
              <li>
                <div class="h-20 w-20 bg-blue-200"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-green-100 flex-grow">
          <table class="bg-light-100">
            <thead class="bg-gray-500 border-b-2 border-gray-500">
              <tr>
                <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
                  Supplier
                </th>
                <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
                  Price
                </th>
                <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
                  Quantity available
                </th>
                <th
                  class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
                ></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300">
              <NuxtLink
                v-for="(product, index) in products"
                :key="index"
                :to="`/items/${route.params.itemId}/products/${product._id}`"
              >
                <tr :id="product" class="bg-white">
                  <td
                    class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                  >
                    <p>
                      {{ product.supplier.username }}
                    </p>
                    <p>
                      {{ product.supplier.email }}
                    </p>
                  </td>
                  <td
                    class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                  >
                    {{ product.price }}
                    €
                  </td>
                  <td
                    class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                  >
                    {{ product.quantity }}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="text-white bg-gradient-to-br from-blue-700 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      @click="addToCompare(product._id)"
                    >
                      Compare
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium r ounded -lg text-sm px-5 py- 2.5 text-center mr-2 mb-2"
                      @click="addToCart(product._id)"
                    >
                      Add to cart
                    </button>
                  </td>
                </tr>
              </NuxtLink>
            </tbody>
          </table>
        </div>
      </div>
      <hr class="my-2" />
      <div id="description" class="mt-4">
        <h2 class="text-xl font-semibold">Description</h2>
        <div>
          {{ item.description }}
        </div>
      </div>
      <div id="attributes" class="mt-4">
        <h2 class="text-xl font-semibold">Attributes</h2>
        <div>
          {{ item.attributes }}
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div id="polution" class="mt-4">
          <h2 class="text-xl font-semibold">Polution</h2>
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left text-gray-500 dark:te xt-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th sco pe="col" class="p x-6 py-3">Type</th>

                    <th scope="col" class="px-6 py-3">Quantity</th>
                    <th scope="col" class="px-6 py-3">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(polution, index) in product.polutions"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="px-6 py-4">{{ polution.nameId }}</td>
                    <td class="px-6 py-4">{{ polution.quantity }}</td>
                    <td class="px-6 py-4">{{ polution.unit }}</td>
                  </tr>
                  <tr
                    v-for="(polution, index) in item.polutions"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="px-6 py-4">{{ polution.nameId }}</td>
                    <td class="px-6 py-4">{{ polution.quantity }}</td>
                    <td class="px-6 py-4">{{ polution.unit }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="resources" class="mt-4">
          <h2 class="text-xl font-semibold">Resources</h2>
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">Type</th>
                    <th scope="col" class="px-6 py-3">Quantity</th>
                    <th scope="col" class="px-6 py-3">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(resources, index) in product.resources"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="px-6 py-4">{{ resources.nameId }}</td>
                    <td class="px-6 py-4">{{ resources.quantity }}</td>
                    <td class="px-6 py-4">{{ resources.unit }}</td>
                  </tr>
                  <tr
                    v-for="(resources, index) in item.resources"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="px-6 py-4">{{ resources.nameId }}</td>
                    <td class="px-6 py-4">{{ resources.quantity }}</td>
                    <td class="px-6 py-4">{{ resources.unit }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="location" class="mt-4">
        <h2 class="text-xl font-semibold">Location</h2>
        <div>
          <gMap class="h-40 w-40" />
        </div>
      </div>
      <div id="details" class="mt-4">
        <h2 class="text-xl font-semibold">Details</h2>
        <div>
          <ul>
            <li>-validity</li>
            <li>-attributes?</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import useCart from '~/stores/cart';
import useCompare from '~/stores/compare';
const storeCompare = useCompare();
const store = useCart();
const route = useRoute();

const item = ref({});
item.value = (await $fetch('/api/items/' + route.params.itemId)).data.items[0];

const product = ref({});
product.value = (
  await $fetch('/api/products/' + route.params.productId)
).data.items[0];

const products = ref([]);
products.value = (
  await $fetch('/api/products?item=' + route.params.itemId)
).data.items;

const category = ref('');
const categoryPath = ref([]);
category.value = (
  await $fetch(`/api/categories?_id=${item.value.category}`)
).data.items[0];

// ---- Category Path ---- //
let current = category.value;
categoryPath.value.push(current);
while (current.parent) {
  current = (await $fetch(`/api/categories?_id=${current.parent}`)).data
    .items[0];
  categoryPath.value.push(current);
}
categoryPath.value.reverse();
categoryPath.value.shift();

// ---- Local Storage Cart ---- //
const myCart = ref([]);
function addToCart(pid) {
  myCart.value = store.getCart;
  if (myCart.value.some((el) => el.product === pid)) {
    myCart.value[myCart.value.findIndex((el) => el.product === pid)].quantity++;
  } else {
    myCart.value.push({ product: pid, quantity: 1 });
  }

  store.$patch({ myCart });
}
// ---- Local Storage Compare 2 Products ---- //
const compare = ref([]);
function addToCompare(pid) {
  compare.value = storeCompare.getCompare;
  if (
    compare.length <= 2 ||
    (compare.value[0] !== pid && compare.value[1] !== pid)
  ) {
    if (compare.value.length === 2) {
      compare.value.splice(0, 1);
      compare.value.push(pid);
    } else {
      compare.value.push(pid);
    }
    storeCompare.$patch({ compare });
  }
}
</script>
