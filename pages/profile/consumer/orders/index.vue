<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Orders</h1>
          <div id="suggestions" class="mt-4">
            <!-- <h2 class="text-xl font-semibold">
              Items you added to your favourites
            </h2>
            <p>
              This suggestion list is generated based on your last purshases
            </p> -->

            <table class="w-2 min-w-full md:w-100 lg:w-250">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4 text-left"
                  >
                    Created at
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4 text-left"
                  >
                    Number of items
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4 text-left"
                  >
                    Status
                  </th>
                  <!-- <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4 text-left"
                  >
                    Arrival Date
                  </th> -->
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4text-left"
                  >
                    Export Data
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4text-left"
                  >
                    Cancel Order
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(order, index) in orders"
                  :key="index"
                  class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                    @click="goToOrder(order)"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                    @click="goToOrder(order)"
                  >
                    {{ order.createdAt }}
                  </td>

                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    @click="goToOrder(order)"
                  >
                    {{ order.productQuantity }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    @click="goToOrder(order)"
                  >
                    {{ order.price }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    @click="goToOrder(order)"
                  >
                    {{ order.status.name }}
                  </td>
                  <!-- <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                    @click="goToOrder(order)"
                  >
                    {{ order.arrivalDate || 'no arrival date' }}
                  </td> -->
                  <td class="text-center">
                    <button @click="getJsonOrder(order)">
                      <DocumentDownloadIcon
                        class="h-6 w-6 text-violet-400"
                        aria-hidden="true"
                      />
                    </button>
                  </td>
                  <td class="text-center">
                    <div class="text-center my-1.5">
                      <div
                        v-if="
                          ['created', 'waiting for transport'].includes(
                            order.status.name
                          )
                        "
                      >
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
                      <div v-else>--</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <pre>{{ orders }}</pre> -->
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { DocumentDownloadIcon } from '@heroicons/vue/outline';
const router = useRouter();
const user = useUser();
const orders = ref([]);
// console.log(`/api/users/${user.data._id}/orders`);
orders.value = await $fetch(`/api/users/${user.data._id}/orders`);

if (orders.value.error) {
  orders.value = [];
}

showOrderDetails();

watch(orders.value, () => {});

function showOrderDetails() {
  for (const order of orders.value) {
    order.price = ref(0);
    order.productQuantity = ref(0);
    for (const product of order.products) {
      order.price += product.product.price * product.quantity;
      order.productQuantity += product.quantity;
    }
  }
  return orders.value;
}

async function goToOrder(order) {
  let checkOrder = [];
  checkOrder = await $fetch(`/api/users/${user.data._id}/orders/${order._id}`);

  router.push(`/profile/consumer/orders/${order._id}`);
  // if (checkOrder.length !== 0) {
  // }
}

async function cancelOrder(order) {
  const newDate = new Date();
  const oldDate = new Date(order.createdAt);
  console.log(newDate.getTime());
  console.log(oldDate.getTime());
  const timeMS = newDate.getTime() - oldDate.getTime();
  if (timeMS <= 15 * 60000) {
    await $fetch(`/api/users/${user.data._id}/orders/${order._id}`, {
      method: 'PUT',
      body: {
        statusId: order.status._id,
        status: 'canceled'
      }
    });
    orders.value = await $fetch(`/api/users/${user.data._id}/orders`);
    orders.value = showOrderDetails();
    console.log(orders.value);
  }
}
function getJsonOrder(order) {
  // const prettyOrder = [];
  // prettyOrder.push(order[0].status.name);
  exportToJsonFile(order);
  // const dataStr = JSON.stringify(order);
  // console.log('DATA JSON DERULOOOOOOOOOO');
  // console.log(dataStr);
}

function exportToJsonFile(jsonData) {
  const dataStr = JSON.stringify(jsonData);
  // const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  const dataUri =
    'data:text/plain/json;charset=utf-8,' + encodeURIComponent(dataStr);

  const exportFileDefaultName = 'data.json';

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}
</script>
