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
                v-for="(product, index) in products"
                :key="index"
                class="bg-purple-50 m-1 border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <div class="grid grid-cols-3">
                  <div
                    class="font-medium text-gray-900 px-6 py-4 font-medium bg-white"
                  >
                    {{ product.productLine.item.name }}
                    <br />
                    {{ product.productLine.item.brand }}
                  </div>
                  <div
                    class="font-medium text-gray-900 px-6 py-4 font-medium bg-white"
                  >
                    {{ product.productLine.supplier.name }}
                  </div>
                  <div
                    class="font-medium text-gray-900 px-6 py-4 font-medium bg-white"
                  >
                    {{ product.productLine.price }}
                    {{ product.productLine.currencyUnit }}
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
                          {{ product.productLine.item.description }}
                        </li>
                        <u>attributes:</u>
                        <li
                          v-for="(attribute, index2) in product.productLine.item
                            .attributes"
                          :key="index2"
                          class="text-sm"
                        >
                          <b> {{ index2 }}:</b> {{ attribute }}
                        </li>
                      </ul>
                      <ul class="mx-8">
                        <u>Polution:</u>
                        <li
                          v-for="(pol, index3) in product.polutions"
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
                          v-for="(res, index3) in product.resources"
                          :key="index3"
                          class="text-sm"
                        >
                          <b> {{ res.recource.name }}</b
                          >{{ res.quantity }}
                          {{ res.resource.unit }}
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </div>
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
                    Product
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
                    Supplier
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Polution
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
                  v-for="(product, index) in order"
                  :key="index"
                  :to="`/profile/consumer/orders/${order._id}`"
                > 
                <tr
                  v-for="(product, index) in products"
                  :key="index"
                  class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                   <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ order.status }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex flex-col justify-center"
                  >
                    {{ product.productLine.item.name }}
                    <Disclosure>
                      <DisclosureButton
                        class="flex w-80 justify-between rounded-lg bg-purple-100 px-8 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                      >
                        More details
                      </DisclosureButton>
                      <DisclosurePanel
                        class="px-4 pt-4 pb-2 text-sm flex w-full bg-purple-50 font-medium text-purple-900"
                      >
                        attribues:
                        <div
                          v-for="(attribute, index2) in product.productLine.item
                            .attributes"
                          :key="index2"
                          class="px-4 pt-4 pb-2 text-sm flex w-full justify-between bg-purple-50 font-medium text-purple-900"
                        >
                          {{ attribute }}
                        </div>

                        description:
                        {{ product.productLine.item.description }}
                        <br />
                      </DisclosurePanel>
                    </Disclosure>
                  </td>
                  <td></td>
                  <td>
                    {{ product.productLine.price }}
                    {{ product.productLine.currencyUnit }}
                  </td>
                  <td>
                    {{ product.productLine.supplier.name }}
                  </td>
                  <td>
                    <Disclosure>
                      <DisclosureButton
                        class="flex w-80 justify-between rounded-lg bg-purple-100 px-8 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                      >
                        Polution details
                      </DisclosureButton>
                      <DisclosurePanel
                        class="px-4 pt-4 pb-2 text-sm flex w-full bg-purple-50 font-medium text-purple-900"
                      >
                        <div
                          v-for="(pol, index3) in product.polutions"
                          :key="index3"
                          class=""
                        >
                          {{ pol.quantity }}
                          {{ pol.polution.unit }}
                          {{ pol.polution.name }}
                        </div>
                        <div
                          v-for="(res, index3) in product.resources"
                          :key="index3"
                          class="px-4 pt-4 pb-2 text-sm flex w-full justify-between bg-purple-50 font-medium text-purple-900"
                        >
                          {{ res }}
                          {{ res.resource.unit }}
                          {{ res.recource.name }}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  </td>
                </tr>

                <td
                    v-for="(pol, index2) in product.polutions"
                    :key="index2"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ polution.quantity }} / {{ pol.polution }}
                  </td> 

               </NuxtLink>{{
                  order
                }}
                <br />{{
                  products[0]
                }}
              </tbody>
            </table> -->
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
const products = ref({});
order.value = await $fetch(
  `/api/users/${user.data._id}/orders/${route.params.order}`
);
products.value = await $fetch(
  `/api/users/${user.data._id}/orders/${route.params.order}/products`
);
</script>
<style></style>
