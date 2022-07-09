<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-2xl font-bold">My storages</h1>
          <div id="storageList" class="mt-4">
            <h2 class="text-xl font-semibold">
              Storage: {{ storageName || storage.name }}
            </h2>
            <div class="overflow-auto rounded-lg bg-white p-2 shadow">
              <div v-if="storage.products.length > 0" class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
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
                        Quantity
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Expiracy date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(product, index) in products"
                      :key="index"
                      class="border-b"
                    >
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        <b class="">
                          {{ product.name || 'Unnamed product' }}
                        </b>
                        <i class="block text-sm text-gray-600">
                          {{ product.item.name }}
                        </i>
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ product.price + product.currencyUnit }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ product.quantity }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        <!-- {{
                                product.item.isConsumable
                                  ? product.expirationDate
                                  : 'does not apply'
                              }} -->
                        <!-- {{ totalPolution + ' ' + polutionsItems[0].unit }} -->
                      </td>
                      <td
                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <button
                          type="button"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          @click="deleteProduct(product._id)"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else>
                You didn't add any products yet,
                <NuxtLink to="/profile/supplier/products"
                  >create a new product</NuxtLink
                >
              </div>
            </div>
          </div>
          <div id="info" class="mt-4">
            <h2 class="text-xl font-semibold">Add products</h2>
            <p>Add a new product to this storage</p>
            <div class="overflow-auto rounded-lg bg-white p-2 shadow">
              <FormKit
                form-class="md:(grid grid-cols-2) gap-4"
                type="form"
                @submit="addProduct"
              >
                <FormKit
                  v-model="name"
                  type="text"
                  label="Name"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="item"
                  type="select"
                  label="Item"
                  placeholder="Choose your item"
                  :options="items"
                  :value="items[0]"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="price"
                  label="Price"
                  type="text"
                  name="price"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="currencyUnit"
                  label="Unit"
                  type="select"
                  name="currencyUnit"
                  :options="['$', '€']"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="quantity"
                  label="Quantity of product"
                  type="text"
                  name="quantity"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <template #submit>
                  <FormKit
                    type="submit"
                    label="Add product"
                    input-class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  />
                </template>
              </FormKit>
            </div>
          </div>
          <div id="polution" class="mt-4">
            <h2 class="text-xl font-semibold">Polution of this storage</h2>
            <div class="overflow-auto rounded-lg bg-white shadow">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-light-100 uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">Type</th>
                    <th scope="col" class="px-6 py-3">Quantity</th>
                    <th scope="col" class="px-6 py-3">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(polution, j) in polutions"
                    :key="j"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="px-6 py-4">{{ polution.polutionType }}</td>
                    <td class="px-6 py-4">{{ polution.quantity }}</td>
                    <td class="px-6 py-4">{{ polution.polutionUnit }}</td>
                  </tr>
                </tbody>
              </table>
              <div
                class="w-80 relative overflow-x-auto shadow-md sm:rounded-lg"
              ></div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const user = useUser();

const storage = ref({});
const polutions = ref([]);
const products = ref([]);

storage.value = await $fetch(
  `/api/users/${user.data._id}/storages/${route.params.storageId}`
);

const items = ref([]);
items.value = await $fetch(`/api/items`);
for (const item of items.value) {
  item.label = item.name;
  item.value = item._id;
}

products.value = await $fetch(
  `/api/users/${user.data._id}/storages/${route.params.storageId}/products`
);

for (const product of products.value) {
  for (const polution of product.polutions) {
    const polutionObject = await $fetch(`/api/polutions/${polution.polution}`);
    console.log(polutionObject);

    const quantityPlusPolution = {
      quantity: polution.quantity * product.quantity,
      polutionType: polutionObject.name,
      polutionUnit: polutionObject.unit
    };

    let exists = false;
    for (let i = 0; i < polutions.value.length; i++) {
      if (
        polutions.value[i].polutionType === quantityPlusPolution.polutionType
      ) {
        polutions.value[i].quantity += quantityPlusPolution.quantity;
        exists = true;
      }
    }
    if (!exists) polutions.value.push(quantityPlusPolution);
  }
}

const item = ref(items.value[0]);
const price = ref('');
const currencyUnit = ref('$');
const quantity = ref('');
const name = ref('');

async function addProduct() {
  await $fetch(`/api/products`, {
    method: 'POST',
    body: {
      name: name.value,
      itemId: item.value,
      price: price.value,
      currencyUnit: currencyUnit.value,
      stripeId: 'kaodkapsd',
      quantity: quantity.value,
      supplier: user.data._id,
      storages: [route.params.storageId]
    }
  });
}

async function deleteProduct(productId) {
  await $fetch(`/api/products/${productId}`, {
    method: 'DELETE'
  });
}
</script>
