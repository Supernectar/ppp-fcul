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

              <div
                class="w-0 flex justify-between bg-indigo-700 h-1 items-center relative"
              >
                <div class="absolute right-0 -mr-2">
                  <div
                    class="relative bg-gray-200 shadow-lg px-2 py-1 rounded mt-16 -mr-12"
                  >
                    <p class="text-indigo-700 text-xs font-bold">
                      Step 2: Transports
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
            </div>
          </div>
        </div>
      </div>
      <div>
        <table class="m-auto w-10/12">
          <thead class="bg-gray-500 border-gray-500">
            <tr>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Transporter
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Car</th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Status
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Location
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
                Polution
              </th>
              <th class="w-20 text-sm text-gray-200 whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300 text-center">
            <!-- <tr
            v-for="(cartItem, index) in cart"
            :id="cartItem.product"
            :key="index"
            class="bg-white"
          >
-->
            <tr>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                username
              </td>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                car_id
              </td>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                available
              </td>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                coords
              </td>
              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                10 g/CO2/km
              </td>

              <td
                class="p-4 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-orange-200 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Select
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          @click="$router.push('carttest')"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-indigo-500 to-indigo-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="$router.push('payment')"
        >
          Next >
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
