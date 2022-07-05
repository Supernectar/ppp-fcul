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
            <img :src="item.imgPath" alt="itemImage" class="w-80 h-80 p-4" />
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

    <section id="suppliers" class="pt-28 -mt-20 relative overflow-hidden">
      <div id="decoration" class="absolute h-full w-full z-1">
        <div class="absolute left-10 top-80">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 909 892"
            width="1200"
          >
            <path
              id="Layer 1"
              class="fill-orange-300"
              d="m173 890c-199.6-24.1-197.8-347-134-537 63.8-190 396.7-358.5 527-352 130.3 6.5 343 178.9 343 372 0 193.1-497.6 545.7-736 517z"
            />
          </svg>
        </div>
        <div class="absolute left-0 top-96">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 909 892"
            width="1200"
          >
            <path
              id="Layer 1"
              class="fill-orange-200"
              d="m173 890c-199.6-24.1-197.8-347-134-537 63.8-190 396.7-358.5 527-352 130.3 6.5 343 178.9 343 372 0 193.1-497.6 545.7-736 517z"
            />
          </svg>
        </div>
      </div>
      <div class="relative z-2">
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
                    <th scope="col" class="px-6 py-3">Supplier</th>
                    <th scope="col" class="px-6 py-3">Price</th>
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(product, index) in products"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="px-6 py-4">
                      <p>{{ product.supplier.username }}</p>
                      <p>
                        {{ product.supplier.email }}
                      </p>
                    </td>
                    <td class="px-6 py-4">
                      {{ product.price }} {{ product.currencyUnit }}
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
          <div class="p-2">
            <GMap
              class="h-80 rounded-xl border-4 shadow"
              :markers-positions="storagePositions"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 mt-6">
          <div class="p-2">
            <h2 class="text-lg font-semibold text-center">Polutions</h2>
            <PolutionTable :item="item" />
          </div>
          <div class="p-2">
            <h2 class="text-lg font-semibold text-center">Resources</h2>
            <ResourceTable :item="item" />
          </div>
        </div>
      </div>
      <section id="itemTree" class="pt-28 -mt-20 relative z-2">
        <h1 class="text-center font-bold text-6xl">Item Tree</h1>

        <div class="flex justify-center my-6">
          <div class="bg-white p-2 rounded-xl">
            <ItemTree />
          </div>
        </div>
      </section>
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
const selectedSupplier = ref({});
const productStorages = ref([]);

const products = ref([]);

// ---- Local Storage Cart ---- //
const myCart = ref([]);

products.value = await $fetch(`/api/products?item=${route.params.itemId}`);

item.value = await $fetch(`/api/items/${route.params.itemId}`);
console.log(products.value);
// product.value = await $fetch('/api/products/' + route.params.productId);

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
