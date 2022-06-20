<template>
  <div>
    <Navbar />
    <section>
      <div class="flex">
        <div>
          <SideNav />
        </div>
        <div class="p-2 grow">
          <h1 class="text-4xl font-bold">Orders</h1>
          <div id="suggestions" class="mt-4">
            <!-- <h2 class="text-xl font-semibold">
              Items you added to your favourites
            </h2>
            <p>
              This suggestion list is generated based on your last purshases
            </p> -->

            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Number of items
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <NuxtLink
                  v-for="(order, index) in orders"
                  :key="index"
                  :to="`/profile/consumer/orders/${order._id}`"
                >
                  <tr
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    @click="goToOrder(order)"
                  >
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      {{ index + 1 }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ order.numberItems }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ order.price }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ order.status }}
                    </td>
                    <div class="flex space-x-2 justify-center">
                      <div>
                        <button
                          type="button"
                          class="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
                          @click="cancelOrder(order)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </tr>
                </NuxtLink>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
const router = useRouter();
const user = useUser();

let orders = [];
console.log(`/api/users/${user.data._id}/orders`);
orders = (await $fetch(`/api/users/${user.data._id}/orders`)).data.items;

async function goToOrder(order) {
  let checkOrder = [];
  checkOrder = (await $fetch(`/api/users/${user.data._id}/orders/${order._id}`))
    .data.items;
  if (checkOrder.length !== 0) {
    router.push(`/profile/consumer/orders/${order._id}`);
  }
}

async function cancelOrder(order) {
  await $fetch(`/api/users/${user.data._id}/orders/${order._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}
</script>
