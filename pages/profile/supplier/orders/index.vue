<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Supplier orders</h1>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text- left"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text- left"
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
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(order, index) in orders"
                          :key="order"
                          class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          @click="
                            router.push(
                              `/profile/supplier/orders/${order[0].status._id}`
                            )
                          "
                        >
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ index + 1 }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
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
                          >
                            {{ order[0].status.name }}
                          </td>
                          <!-- <td></td> -->
                          <td
                            v-if="order[0].status.name === 'created'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="sentOrder(order[0])">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
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
import { CheckCircleIcon } from '@heroicons/vue/outline';
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
console.log(orders);

async function sentOrder(order) {
  console.log(order);
  await $fetch(`/api/users/${userStore.data._id}/orders/${order._id}`, {
    method: 'PUT',
    body: {
      statusId: order.status._id,
      status: 'waiting for transport'
    }
  });
  // console.log(order.status);
  // await $fetch(`/api/users/${userStore.data._id}`, {
  //   method: 'PUT',
  //   body: {
  //     supplierData: 'waiting for transport'
  //   }
  // });
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
