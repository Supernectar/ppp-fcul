<template>
  <div>
    <Navbar />
    <div class="rounded-lg shadow hidden md:block mx-10 m-10 bg-indigo-100">
      <div class="h-full w-full bg-indigo-100 py-16">
        <div class="container mx-auto text-center">
          <div class="w-11/12 lg:w-1/2 mx-auto">
            <div class="bg-gray-400 h-1 flex items-center justify-between">
              <div
                class="w-0 flex justify-between bg-indigo-700 h-1 items-center relative"
              >
                <div class="absolute right-0 -mr-2">
                  <div
                    class="relative bg-gray-200 shadow-lg px-2 py-1 rounded mt-16 -mr-12"
                  >
                    <p class="text-indigo-700 text-xs font-bold">
                      Step 1: Products
                    </p>
                  </div>
                </div>

                <div
                  class="h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative"
                >
                  <div class="h-4 w-4 bg-indigo-700 rounded-full"></div>
                </div>
              </div>

              <div class="w-1/2 flex justify-end">
                <div class="bg-gray-200 h-6 w-6 rounded-full shadow"></div>
              </div>

              <div class="w-1/2 flex justify-end">
                <div class="bg-gray-200 h-6 w-6 rounded-full shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table v-if="cart.length != 0" class="m-auto w-10/12">
          <thead class="bg-gray-500 border-gray-500">
            <tr>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                &nbsp;
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Product
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Polution
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Quantity
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Price
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300 text-center">
            <tr
              v-for="(product, index) in products"
              :key="index"
              class="bg-white"
            >
              <td class="text-sm text-gray-700 whitespace-nowrap text-center">
                <img
                  :src="product.item.imgPath"
                  class="h-16 rounded-lg border ml-1/2"
                />
              </td>

              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                {{ product.item.name }}
                <br />
                {{ product.supplier.username }}
              </td>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                heehee
              </td>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                {{ cart[index].quantity }}
              </td>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                {{ product.price * cart[index].quantity }}€
              </td>
            </tr>
            <tr>
              <td>
                <br />
              </td>
            </tr>
            <tr class="p-2">
              <td></td>
              <td></td>
              <td></td>
              <td
                class="p-2 text-sm text-gray-700 bg-white whitespace-nowrap text-center"
              >
                Total:
              </td>
              <td
                class="text-sm text-gray-700 bg-white whitespace-nowrap text-center"
              >
                {{ total }}€
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          @click="$router.push('pages/carttest')"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-gray-700 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="$router.push('transporter')"
        >
          Next >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCart from '~/stores/cart';
const store = useCart();
const cart = ref(store.getCart);
const products = ref([]);
const total = ref(0);

for (const cartProduct of cart.value) {
  products.value.push(await $fetch(`/api/products/${cartProduct.product}`));
}

console.log(products.value[0]);

for (let i = 0; i < products.value.length; i++) {
  console.log(products.value[0]);
  total.value += products.value[i].price * cart.value[i].quantity;
}
</script>
