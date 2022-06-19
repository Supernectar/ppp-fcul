<template>
  <div>
    <Navbar />
    <div class="rounded-lg shadow hidden md:block mx-10 m-10 bg-indigo-100">
      <div class="h-full w-full bg-indigo-100 py-16">
        <div class="container mx-auto text-center">
          <div class="w-11/12 lg:w-1/2 mx-auto">
            <div class="bg-gray-400 h-1 flex items-center justify-between">
              <div class="w-1/2 bg-indigo-700 h-1 flex items-center">
                <div
                  class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-check"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <div class="w-1/2 bg-indigo-700 h-1 flex items-center">
                <div
                  class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-check"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>

              <div
                class="w-0 flex justify-between bg-indigo-700 h-1 items-center relative"
              >
                <div class="absolute right-0 -mr-2">
                  <div
                    class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12"
                  >
                    <p class="text-indigo-700 text-xs font-bold">
                      Step 3: Payment
                    </p>
                  </div>
                </div>
                <div
                  class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative"
                >
                  <div class="h-4 w-4 bg-indigo-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--
      <table v-if="cart.length != 0" class="m-auto">
        <thead class="bg-gray-500 border-gray-500">
          <tr>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">&nbsp;</th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
              Product
            </th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
              Quantity
            </th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Price</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300 text-center">
          <tr
            v-for="(cartItem, index) in cart"
            :id="cartItem.product"
            :key="index"
            class="bg-white"
          >
            <td
              class="py-2 text-sm text-gray-700 whitespace-nowrap text-center"
            >
              <img src="/img/627.png" class="h-16 rounded-lg border" />
            </td>

            <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ myItems[index].name }}
              <br />
              {{ myProducts[index].supplier.username }}
            </td>

            <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ cartItem.quantity }}
            </td>
            <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ myProducts[index].price * cartItem.quantity }}€
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr class="p-2">
            <td class=""></td>
            <td></td>

            <td class="text-sm text-gray-700 whitespace-nowrap text-center">
              Total:
            </td>
            <td class="text-sm text-gray-700 whitespace-nowrap text-center">
              {{ total }}€
            </td>
          </tr>
        </tbody>
      </table>-->
    </div>
    <div class="w-11/12 bg-white lg:w-1/2 mx-auto">
      <button
        type="button"
        class="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Cancel
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-indigo-500 to-indigo-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Next >
      </button>
    </div>
  </div>
</template>

<script setup></script>
