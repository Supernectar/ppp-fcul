<template>
  <div>
    <Navbar />
    <section class="bg-light-300 py-10 relative overflow-hidden">
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
      <div class="grid grid-cols-2 mx-20 relative z-2">
        <div class="flex justify-center items-center">
          <div class="bg-white rounded-xl shadow-lg">
            <img src="/items/627.png" alt="itemImage" class="w-80 h-80 p-4" />
          </div>
        </div>
        <div>
          <h1 class="text-4xl font-bold">{{ item.name }}</h1>
          <p class="overflow-auto h-30 mt-6 border-b">
            {{ item.description }}
          </p>
          <div class="mt-6">
            <h4 class="text-lg font-semibold">Attributes</h4>
            <ul>
              <li v-for="(attr, index) in item.attributes" :key="index">
                {{ attr.name }}: {{ attr.value }}
              </li>
            </ul>
          </div>
          <div class="flex mt-6">
            <button class="bg-white p-2 border rounded">
              <a href="#suppliers">See available suppliers</a>
            </button>
            <div class="flex items-center">
              <CurrencyEuroIcon class="h-6 mx-2" />
              price range: 0€ - 20€
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="suppliers" class="pt-28 -mt-20">
      <h1 class="text-center font-bold text-6xl">Available Suppliers</h1>
      <div class="grid grid-cols-2 mt-6">
        <div class="p-2">
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
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="px-6 py-4">fff</td>
                  <td class="px-6 py-4">rere</td>
                  <td class="px-6 py-4">abab</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="p-2">
          <GMap
            class="h-80 rounded-xl border-4 shadow"
            :markers-positions="storagePositions"
          />
        </div>
      </div>
    </section>

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
          <table class="bg-light-100 h-full">
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
                <th
                  class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
                ></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300">
              <tr
                v-for="(productLine, index) in productLines"
                :id="productLine"
                :key="index"
                class="bg-white"
                @click="redirectToProduct(productLine.product._id)"
              >
                <td
                  class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                >
                  <p>
                    {{ product.productLine.supplier.username }}
                  </p>
                  <p>
                    {{ product.productLine.supplier.email }}
                  </p>
                </td>
                <td
                  class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                >
                  {{ product.productLine.price }}
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
                    class="text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    @click="addToCart(product._id)"
                  >
                    Add to cart
                  </button>
                </td>
              </tr>
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
            <PolutionTable :product="product" :item="item" />
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
          <GMap
            class="h-80 w-full rounded-xl border-4 shadow"
            :markers-positions="storagePositions"
          />
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
    <section>
      <ItemTree />
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { CurrencyEuroIcon } from '@heroicons/vue/outline';
import useCart from '~/stores/cart';
import useCompare from '~/stores/compare';

const storeCompare = useCompare();
const store = useCart();
const route = useRoute();

const item = ref({});
const product = ref({});
const productStorages = ref([]);

const category = ref('');
const categoryPath = ref([]);
const productLines = ref([]);

// ---- Local Storage Cart ---- //
const myCart = ref([]);

console.log(route.params.itemId);
productLines.value = await $fetch(
  `/api/productLines?item=${route.params.itemId}`
);
console.log(productLines.value);

item.value = await $fetch('/api/items/' + route.params.itemId);
product.value = await $fetch('/api/products/' + route.params.productId);

console.log(item.value);
console.log(product.value);

category.value = await $fetch(`/api/categories/${item.value.category}`);

// ---- Category Path ---- //
let current = category.value;
categoryPath.value.push(current);
while (current.parent) {
  current = await $fetch(`/api/categories/${current.parent}`);
  categoryPath.value.push(current);
}
categoryPath.value.reverse();
categoryPath.value.shift();

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

// ---- Storage positions ---- //
const storagePositions = ref([
  {
    lat: 38.730292,
    lng: -9.16323
  },
  {
    lat: 38.591152,
    lng: -8.933824
  },
  {
    lat: 38.744067,
    lng: -9.365785
  }
]);

function addToCart(pid) {
  myCart.value = store.getCart;
  if (myCart.value.some((el) => el.product === pid)) {
    myCart.value[myCart.value.findIndex((el) => el.product === pid)].quantity++;
  } else {
    myCart.value.push({ product: pid, quantity: 1 });
  }

  store.$patch({ myCart });
}

function redirectToProduct(id) {
  const router = useRouter();
  router.push(`/items/${route.params.itemId}/products/${id}`);
}
</script>
