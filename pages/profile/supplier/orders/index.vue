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
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Client
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Created At
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Storage
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
                          v-for="order in user.supplierData.orders"
                          :key="order._id"
                          class="border-b"
                        >
                          <!-- <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                          >
                            {{ order.createdAt }}
                          </td> -->
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.consumer.name }}
                            <br />
                            {{ order.consumer.email }}
                          </td>

                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.date }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.product.item.name }}
                            <br />
                            {{ order.product.item.brand }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.quantity }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.product.storage.name }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.status.name }}
                          </td>
                          <td
                            v-if="order.status.name === 'created'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="sentOrder(order)">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                          <!-- <td
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <NuxtLink
                              :to="`/profile/supplier/orders/${order._id}`"
                            > 
                              <button
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                More details
                              </button>
                            </NuxtLink>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- <pre>{{ user }}</pre> -->
            <br />
            <br />
            <!-- {{ user.supplierData }} -->
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

// let user = [];
// console.log(`/api/users/${user.data._id}`);
console.log(userStore.data);
console.log(userStore.data._id);
const user = ref(await $fetch(`/api/users/${userStore.data._id}`));
console.log(user.value);
console.log(user);
console.log('----');
// console.log(user.supplierData.orders[0].order.status);
async function sentOrder(order) {
  console.log(order.status._id);
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
