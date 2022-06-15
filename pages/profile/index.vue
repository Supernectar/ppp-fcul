<template>
  <div>
    <Navbar />
    <section>
      <div class="flex">
        <div>
          <SideNav />
        </div>
        <div class="p-2 grow overflow-hidden">
          <h1 class="text-4xl font-bold">Dashboard</h1>
          <div id="orders" class="mt-4">
            <h2 class="text-xl font-semibold">Orders</h2>
            <p>See your orders history</p>
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
                <tr
                  v-for="(order, index) in orders"
                  :key="index"
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
              </tbody>
            </table>
          </div>
          <div id="statistics" class="mt-4">
            <h2 class="text-xl font-semibold">Statistics</h2>
            <p>Find your statistics here</p>
            <div class="grid auto-rows-auto grid-cols-1 md:grid-cols-2 gap-2">
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
            </div>
          </div>
          <div id="suggestions" class="mt-4">
            <h2 class="text-xl font-semibold">Products you might like</h2>
            <p>
              This suggestion list is generated based on your last purshases
            </p>
            <div class="bg-light-600 rounded-xl p-2">
              <ul class="flex gap-2 overflow-auto pb-2">
                <li v-for="(item, index) in suggestedItems" :key="index">
                  <ItemCard
                    :itemValue="item"
                    @open-modal="(info) => openModal(info)"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div>-referencia à ultima encomenda realizada</div>
          <div>
            -estatistica relativamente ao total de recursos gerados em
            encomendas (nos ultimos x dias, ou desda primeira encomenda)
          </div>
          <div>-recomendações de produtos?</div>
        </div>
      </div>
    </section>
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
    <Footer />
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
import { useUser } from '~/store/user';

const store = useUser();
const suggestedItems = ref([]);

// ---- Loading Items ---- //
suggestedItems.value = (await $fetch(`/api/items`)).data.items;

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

// ---- Loading Orders ---- //
let orders = [];
orders = (await $fetch(`/api/users/${store.user.userId}/orders`)).data.items;

async function goToOrder(order) {
  let checkOrder = [];
  checkOrder = (
    await $fetch(`/api/users/${store.user.userId}/orders/${order._id}`)
  ).data.items;
  if (checkOrder.length !== 0) {
    router.push(`/profile/consumer/orders/${order._id}`);
  }
}

async function cancelOrder(order) {
  await $fetch(`/api/users/${store.user.userId}/orders/${order._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}
</script>
