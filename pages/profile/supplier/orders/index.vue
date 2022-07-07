<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2 w-45">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Supplier orders</h1>
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
                            Client
                          </th>
                          <th
                            scope="
                              col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Created At
                          </th>
                          <!-- <th
                            scope="
                              col"
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              px-6
                              py-4
                              text-left
                            "
                          >
                            Number of products
                          </th> -->
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
                            Request transport
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Send order
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(order, index) in orders"
                          :key="order"
                          class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            @click="
                              router.push(
                                `/profile/supplier/orders/${order[0].status._id}`
                              )
                            "
                          >
                            {{ index + 1 }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            @click="
                              router.push(
                                `/profile/supplier/orders/${order[0].status._id}`
                              )
                            "
                          >
                            {{
                              order[0].consumer.name ||
                              order[0].consumer.username
                            }}
                            <br />
                            {{ order[0].consumer.email }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            @click="
                              router.push(
                                `/profile/supplier/orders/${order[0].status._id}`
                              )
                            "
                          >
                            {{ order[0].date }}
                          </td>
                          <!-- <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            num
                          </td> -->
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            @click="
                              router.push(
                                `/profile/supplier/orders/${order[0].status._id}`
                              )
                            "
                          >
                            {{ order[0].status.name }}
                          </td>
                          <!-- <td></td> -->
                          <!-- <td
                            v-if="order[0].status.name === 'created'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="sentOrder(order[0])">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td> -->
                          <!-- <td
                            v-if="order[0].status.name === 'ready to transport'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <TruckIcon
                              class="h-6 w-6 text-violet-400"
                              aria-hidden="true"
                            />
                          </td> -->
                          <td
                            v-if="order[0].status.name === 'created'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="transportRequest(order[0])">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                          <td
                            v-else-if="
                              [
                                'waiting for transport',
                                'ready to transport',
                                'arrived at storage',
                                'left storage'
                              ].includes(order[0].status.name)
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
                            v-if="order[0].status.name === 'arrived at storage'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="sendOrder(order[0])">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                          <td
                            v-else-if="
                              ['left storage'].includes(order[0].status.name)
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
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, CheckIcon, TruckIcon } from '@heroicons/vue/outline';
const router = useRouter();
const userStore = useUser();

const user = ref(await $fetch(`/api/users/${userStore.data._id}`));

const allStatus = [];
const orders = [];

for (const order of user.value.supplierData.orders) {
  if (!allStatus.includes(order.status._id)) {
    allStatus.push(order.status._id);
    const inn = allStatus.indexOf(order.status._id);
    orders[inn] = [order];
  } else {
    const inn = allStatus.indexOf(order.status._id);
    orders[inn].push(order);
  }
}

async function transportRequest(order) {
  // console.log(order);
  // console.log(order.transport.owner);
  await $fetch(`/api/users/${userStore.data._id}/orders/${order._id}`, {
    method: 'PUT',
    body: {
      statusId: order.status._id,
      status: 'waiting for transport'
    }
  });

  await $fetch(`/api/users/${order.transport.owner}`, {
    method: 'PUT',
    body: {
      notification: {
        name: 'new delivery',
        type: 'transporter',
        reference_id: order.status._id
      }
    }
  });
}
async function sendOrder(order) {
  // console.log(order.consumer._id);
  await $fetch(`/api/users/${userStore.data._id}/orders/${order._id}`, {
    method: 'PUT',
    body: {
      statusId: order.status._id,
      status: 'left storage'
    }
  });

  await $fetch(`/api/users/${order.consumer._id}`, {
    method: 'PUT',
    body: {
      notification: {
        name: 'order left supplier storage',
        type: 'consumer',
        reference_id: order.status._id
      }
    }
  });
}
// console.log(user[0].supplierData);
// async function goToOrder(order) {
//   let checkOrder = [];
//   checkOrder = await $fetch(`/api/users/${user.data._id}/orders/${order._id}`);

//   router.push(`/profile/consumer/orders/${order._id}`);
// }

// async function cancelOrder(order) {
//   await $fetch(`/api/users/${user.data._id}/orders/${order._id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' }
//   });
// }
</script>
