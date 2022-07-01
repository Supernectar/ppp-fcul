<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Orders</h1>
          <div class="mt-4">
            <h2 class="text-xl font-semibold">
              {{ route.params.order }}
            </h2>
            <p>see your order details here</p>

            <!-- <table class="min-w-full">
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
            </table> -->
          </div>
          <GMap class="h-20 w-20 md:(h-60 w-full)"></GMap>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
// const router = useRouter();
const route = useRoute();
const user = useUser();

const order = ref({});
order.value = (
  await $fetch(`/api/users/${user.data._id}/orders/${route.params.order}`)
).data.items;

// const items = [];
// const categories = [];

// for (let i = 0; i < order.products.length; i++) {
// const product = await $fetch(`/api/products/${order.products[i]}`);
// const category = await $fetch(
//   `/api/categories/${product.data.items[0].category}`
// );
// items.push(item.data.items[0]);
// categories.push(category.data.items[0].name);
// }


</script>
<style></style>
