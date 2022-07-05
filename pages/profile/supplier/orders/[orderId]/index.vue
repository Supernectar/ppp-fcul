<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">Order information</h1>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <b class="font-medium">
                      Client:
                      {{
                        products[0].consumer.name ||
                        products[0].consumer.username
                      }}<br />
                      Client E-mail: {{ products[0].consumer.email }} <br />
                      Created at: {{ products[0].date }} <br />Status:
                      {{ products[0].status.name }}
                    </b>
                    <table class="min-w-full">
                      <thead class="border-b">
                        <tr>
                          <!-- <th
                            scope="col"
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              px-6
                              py-4
                              text-
                              left
                            "
                          >
                            Client
                          </th> -->
                          <th
                            scope="
                              col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            #
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
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(prod, index) in products"
                          :key="index"
                          class="border-b"
                        >
                          <!-- <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            {{ order.consumer.name }}
                            <br />
                            {{ order.consumer.email }}
                          </td> -->

                          <!-- <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ order.date }}
                          </td> -->
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ index + 1 }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ prod.product.item.name }}
                            <br />
                            {{ prod.product.item.producer }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ prod.quantity }}
                          </td>
                          <td
                            v-for="storage in prod.product.storages"
                            :key="storage"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ storage.name }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <!-- {{ order.status.name }} -->
                          </td>
                          <!-- <td
                            v-if="order.status.name === 'created'"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <button @click="sentOrder(order)">
                              <CheckCircleIcon
                                class="h-6 w-6 text-violet-400"
                                aria-hidden="true"
                              />
                            </button>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- <pre>{{ products }}</pre>  -->
            <!-- {{ user.supplierData }} -->
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.params.orderId);
const router = useRouter();
const userStore = useUser();
const user = ref(await $fetch(`/api/users/${userStore.data._id}`));
console.log('_--');
console.log(user);
const products = ref([]);
for (const product of user.value.supplierData.orders) {
  if (product.status._id === route.params.orderId) {
    products.value.push(product);
  }
}
console.log(products.value);
</script>
<style></style>
