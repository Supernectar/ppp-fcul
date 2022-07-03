<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />

      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-2xl font-bold">Orders</h1>
          <div class="mt-4">
            <h2 class="text-xl font-semibold">
              {{ route.params.order }}
            </h2>
            <p>order details</p>
            <div class="w-60 bg-purple-50 min-w-full">
              <div class="grid grid-cols-3">
                <div
                  class="m-1 font-medium font-medium text-gray-900 px-6 py-4 bg-white"
                >
                  Product
                </div>
                <div
                  class="m-1 font-medium font-medium text-gray-900 px-6 py-4 bg-white"
                >
                  Supplier
                </div>
                <div
                  class="m-1 font-medium font-medium text-gray-900 px-6 py-4 bg-white"
                >
                  Price
                </div>
              </div>

              <div
                v-for="(prod, index) in order.products"
                :key="index"
                class="bg-purple-50 m-1 border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <div class="grid grid-cols-3">
                  <div
                    class="font-medium text-gray-900 px-6 py-4 font-medium bg-white"
                  >
                    {{ prod.product.productLine.item.name }}
                    <br />
                    {{ prod.product.productLine.item.brand }}
                  </div>
                  <div
                    class="font-medium text-gray-900 px-6 py-4 font-medium bg-white"
                  >
                    {{ prod.product.productLine.supplier.name }}
                  </div>
                  <div
                    class="font-medium text-gray-900 px-6 py-4 font-medium bg-white"
                  >
                    {{ prod.product.productLine.price * prod.quantity }}
                    {{ prod.product.productLine.currencyUnit }}
                  </div>
                </div>
                <div class="mb-4 mt-1">
                  <Disclosure>
                    <DisclosureButton
                      class="w-full bg-purple-100 px-6 py-1 text-left text-sm font-medium text-purple-900 hover:bg-purple-c focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    >
                      <div class="text-left font-light">
                        <b>More Details</b>
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="py-2 px-6 font-light text-sm flex w-full bg-purple-50 font-medium text-purple-900"
                    >
                      <ul>
                        <li class="mb-2 mr-8">
                          <u>Description:</u>
                          <br />
                          {{ prod.product.productLine.item.description }}
                        </li>
                        <u>attributes:</u>
                        <li
                          v-for="(attribute, index2) in prod.product.productLine
                            .item.attributes"
                          :key="index2"
                          class="text-sm"
                        >
                          <b> {{ index2 }}:</b> {{ attribute }}
                        </li>
                      </ul>
                      <ul class="mx-8">
                        <u>Polution:</u>
                        <li
                          v-for="(pol, index3) in prod.product.polutions"
                          :key="index3"
                          class="text-sm"
                        >
                          <b> {{ pol.polution.name }}: </b>{{ pol.quantity }}
                          {{ pol.polution.unit }}
                        </li>
                      </ul>
                      <ul class="mx-8">
                        <u>Resources:</u>
                        <li
                          v-for="(res, index3) in prod.product.resources"
                          :key="index3"
                          class="text-sm"
                        >
                          <b> {{ res.recource.name }}: </b>{{ res.quantity }}
                          {{ res.resource.unit }}
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
          <GMap class="h-70 w-70 sm:(w-95) md:(h-60 w-full)"></GMap>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/solid';

// const router = useRouter();
const route = useRoute();
const user = useUser();

const order = ref({});
// const products = ref({});
order.value = await $fetch(
  `/api/users/${user.data._id}/orders/${route.params.order}`
);
console.log('order');
console.log(order.value);
// products.value = await $fetch(
//   `/api/users/${user.data._id}/orders/${route.params.order}/products`
// );
// console.log('products');
// console.log(products.value);
</script>
<style></style>
