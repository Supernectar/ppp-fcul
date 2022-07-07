<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2 w-45">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Transporter deliveries</h1>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-auto rounded-lg shadow">
                    <table class="min-w-full">
                      <thead class="border-b">
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
                            Transport
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Plate
                          </th>
                          <th
                            scope="
                              col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Storage
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Destination
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
                          >
                            Accept Transport
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Arrived at storage
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Arrived at consumer
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(order, index) in orders"
                          :key="index"
                          class="bg-white border-b text-left transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ index + 1 }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.transport.model }}
                            <br />
                            {{ order.transport.brand }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.transport.plate }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.from.street }}, {{ order.from.city }},
                            {{ order.from.country }},
                            {{ order.from.zipCode }}
                          </td>

                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.to.street }}, {{ order.to.city }},
                            {{ order.to.country }}, {{ order.to.zipCode }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.status.name }}
                          </td>
                          <td
                            v-if="order.status.name === 'waiting for transport'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="readyToTransport(order)">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                          <td
                            v-else-if="
                              [
                                'arrived at storage',
                                'left storage',
                                'arrived'
                              ].includes(order.status.name)
                            "
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <CheckIcon
                              class="h-6 w-6 text-vblack"
                              aria-hidden="true"
                            />
                          </td>
                          <td
                            v-if="order.status.name === 'ready to transport'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="arrivedAtStorage(order)">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                          <td
                            v-else-if="
                              [
                                'arrived at storage',
                                'left storage',
                                'arrived'
                              ].includes(order.status.name)
                            "
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <CheckIcon
                              class="h-6 w-6 text-vblack"
                              aria-hidden="true"
                            />
                          </td>
                          <td
                            v-else
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          ></td>
                          <td
                            v-if="order.status.name === 'left storage'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="arrivedAtConsumer(order)">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                          <td
                            v-else-if="['arrived'].includes(order.status.name)"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <CheckIcon
                              class="h-6 w-6 text-black"
                              aria-hidden="true"
                            />
                          </td>
                          <td
                            v-else
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          ></td>

                          <!-- <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <TruckIcon
                              class="h-6 w-6 text-violet-400"
                              aria-hidden="true"
                            />
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <pre>{{ orders }}</pre>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
import { CheckCircleIcon, TruckIcon, CheckIcon } from '@heroicons/vue/outline';
const router = useRouter();
const userStore = useUser();
const user = ref(await $fetch(`/api/users/${userStore.data._id}`));
const orders = ref([]);
// const status = ref('Accept Transport');
orders.value = await $fetch(
  `/api/users/${userStore.data._id}/orders?type=transport`
);
console.log(orders.value);

async function readyToTransport(order) {
  await $fetch(`/api/users/${userStore.data._id}/orders/${order._id}`, {
    method: 'PUT',
    body: {
      statusId: order.status._id,
      status: 'ready to transport'
    }
  });
  // status.value = 'Arrived at storage';
  orders.value = await $fetch(
    `/api/users/${userStore.data._id}/orders?type=transport`
  );
}

async function arrivedAtStorage(order) {
  await $fetch(`/api/users/${userStore.data._id}/orders/${order._id}`, {
    method: 'PUT',
    body: {
      statusId: order.status._id,
      status: 'arrived at storage'
    }
  });
  await $fetch(`/api/users/${order.supplier}`, {
    method: 'PUT',
    body: {
      notification: {
        name: 'transport arrived',
        type: 'supplier',
        reference_id: order.status._id
      }
    }
  });
  orders.value = await $fetch(
    `/api/users/${userStore.data._id}/orders?type=transport`
  );
}
async function arrivedAtConsumer(order) {
  await $fetch(`/api/users/${userStore.data._id}/orders/${order._id}`, {
    method: 'PUT',
    body: {
      statusId: order.status._id,
      status: 'arrived',
      arrivalDate: new Date()
    }
  });

  await $fetch(`/api/users/${order.consumer}`, {
    method: 'PUT',
    body: {
      notification: {
        name: 'order arrived',
        type: 'consumer',
        reference_id: order.status._id
      }
    }
  });
  orders.value = await $fetch(
    `/api/users/${userStore.data._id}/orders?type=transport`
  );
}
</script>
