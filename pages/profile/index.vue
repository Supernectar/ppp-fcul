<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2 w-45">
        <section class="p-2 overflow-hidden">
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <div id="orders" class="mt-4">
            <h2 class="text-xl font-semibold">Orders</h2>
            <p>See your orders history</p>
            <div class="overflow-auto rounded-lg shadow">
              <table class="w-full">
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
                      Nº of items
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
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4 text-left"
                    >
                      Arrival Date
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-2 py-2 md:px-6 md:py-4text-left"
                    >
                      Cancel order
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(order, index) in orders"
                    :key="index"
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    @click="goToOrder(order)"
                  >
                    <td
                      class="w-20 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      {{ index + 1 }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                    >
                      {{ order.createdAt }}
                    </td>
                    <td
                      class="w-20 text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap"
                    >
                      {{ order.products.length }}
                    </td>
                    <td
                      class="w-20 text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap"
                    >
                      {{ order.price }}
                    </td>
                    <td
                      class="w-30 text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap"
                    >
                      {{ order.status.name }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                    >
                      {{ order.arrivalDate || 'no arrival date' }}
                    </td>
                    <td>
                      <div class="text-center my-1.5">
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="statistics" class="mt-4">
            <h2 class="text-xl font-semibold">Statistics</h2>
            <p>Find your statistics here</p>
            <!--<div class="grid auto-rows-auto grid-cols-1 md:grid-cols-2 gap-2">
              <div class="bg-light-600 rounded-xl p-2">
                <img src="/img/chart.png" alt="" class="w-full" />
                <div>polution generated over last month</div>
              </div>
              <div class="bg-light-600 rounded-xl p-2">
                <img src="/img/chart.png" alt="" class="w-full" />
                <div>Resources generated over last month</div>
              </div>
              <div class="bg-light-600 rounded-xl p-2 md:col-span-2">
                <img src="/img/chart.png" alt="" class="w-full h-20" />
                <div>Number of items bought per day</div>
              </div>
            </div>-->
            <div v-if="user.data.consumerData.orders.length !== 0">
              <div class="shadow-lg rounded-lg w-75 sm:w-95 md:w-125">
                <div class="py-3 px-1 bg-gray-50">
                  Polution generated in the first half of the year
                </div>
                <canvas id="chartLine" class="p-1 w-2"></canvas>
              </div>
            </div>
          </div>
          <div id="suggestions" class="mt-4">
            <h2 class="text-xl font-semibold">Products you might like</h2>
            <p class="max-w-80">
              This suggestion list is generated based on your last purchases
            </p>
            <div class="bg-light-600 rounded-xl p-2">
              <ul>
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
                >
                  <li v-for="(item, index) in suggestedItems" :key="index">
                    <ItemCard
                      :itemValue="item"
                      @open-modal="(info) => openModal(info)"
                    />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
    <!-- <div class="flex">
      <SideNavigationBar />
      <div class="bg-blue-200">dsda</div> -->

    <!-- </div> -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog class="relative z-10" as="div" @close="closeModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ modalContent.name }}
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ modalContent.description }}
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';
import 'https://cdn.jsdelivr.net/npm/chart.js';

const router = useRouter();
const user = useUser();
const suggestedItems = ref([]);
let orders = [];

const totalPolutionP = ref(0);
const totalPolutionPg = ref(0);
const totalPolutionPKg = ref(0);

onMounted(async () => {
  const totalPolutionO = [];
  const polutions = [];
  for (let a = 0; a < 7; a++) {
    polutions[a] = 0;
  }

  for (const order of orders) {
    for (const product of order.products) {
      for (const polution of product.product.polutions) {
        const unit = await $fetch(`/api/polutions/${polution.polution}`);
        if (unit.unit === 'g') {
          totalPolutionPg.value += polution.quantity * product.product.quantity;
        } else if (unit.unit === 'kg') {
          totalPolutionPKg.value +=
            polution.quantity * product.product.quantity;
        }
      }
      totalPolutionP.value =
        totalPolutionPg.value / 1000 + totalPolutionPKg.value;
      totalPolutionO.push(totalPolutionP.value);
    }
    if (order.arrivalDate !== undefined) {
      const month = order.arrivalDate.split(' ');

      for (const totalPolution of totalPolutionO) {
        switch (month[1]) {
          case 'Jan':
            polutions[0] += totalPolution;
            break;
          case 'Feb':
            polutions[1] += totalPolution;
            break;
          case 'Mar':
            polutions[2] += totalPolution;
            break;
          case 'Apr':
            polutions[3] += totalPolution;
            break;
          case 'May':
            polutions[4] += totalPolution;
            break;
          case 'Jun':
            polutions[5] += totalPolution;
            break;
        }
      }
    }
  }

  if (user.data.consumerData.orders.length !== 0) {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const data = {
      labels,
      datasets: [
        {
          label: 'Polution generated in kg',
          backgroundColor: 'hsl(252, 82.9%, 67.8%)',
          borderColor: 'hsl(252, 82.9%, 67.8%)',
          data: polutions
        }
      ]
    };

    const configLineChart = {
      type: 'line',
      data,
      options: {}
    };

    const chartLine = new Chart(
      document.getElementById('chartLine'),
      configLineChart
    );
  }
});

onBeforeMount(async () => {
  // ---- Loading Items ---- //
  suggestedItems.value = await $fetch(`/api/items`);
  // ---- Loading Orders ---- //
});

orders = await $fetch(`/api/users/${user.data._id}/orders`);
for (const order of orders) {
  order.price = ref(0);
  for (const product of order.products) {
    order.price.value += product.product.price * product.quantity;
  }
}
console.log(orders);
// ---- Dialog ---- //
const modalContent = ref({});
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal(info) {
  modalContent.value = info;
  isOpen.value = true;
}

async function goToOrder(order) {
  let checkOrder = [];
  checkOrder = await $fetch(`/api/users/${user.data._id}/orders/${order._id}`);
  router.push(`/profile/consumer/orders/${order._id}`);
  // if (checkOrder.length !== 0) {
  // }
}

async function cancelOrder(order) {
  await $fetch(`/api/users/${user.data._id}/orders/${order._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}
</script>
