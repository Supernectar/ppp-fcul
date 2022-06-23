<template>
  <div>
    <Navbar />
    <section>
      <div class="flex">
        <div>
          <SideNav />
        </div>
        <div class="bg-light-100 rounded p-2 shadow w-full">
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <h3>Storage: {{ storage.name }}</h3>
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
                            Total of polution consumed
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Total of resources consumed
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
                            {{ product.name }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ product.price + product.unit }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ product.quantity }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <!-- {{ totalPolution + ' ' + polutionsItems[0].unit }} -->
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            <!-- {{ totalResources + ' ' + resourcesItems[0].unit }} -->
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
                  <br />
                  <div>
                    <h3>Add a new product to the storage:</h3>
                    <br />
                    <div class="flex gap-4">
                      <div>
                        <FormKit
                          v-model="item"
                          type="select"
                          placeholder="Choose your item"
                          :options="items"
                          validation="required"
                          outer-class="mb-4"
                          label-class="form-label inline-block mb-2 text-gray-700"
                          input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          help-class="text-sm text-gray-500 mt-1"
                          message-class="mt-1 text-sm text-red-600"
                        />
                      </div>
                      <div>
                        <FormKit
                          v-model="price"
                          placeholder="Price"
                          type="text"
                          name="price"
                          validation="required"
                          outer-class="mb-4"
                          label-class="form-label inline-block mb-2 text-gray-700"
                          input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          help-class="text-sm text-gray-500 mt-1"
                          message-class="mt-1 text-sm text-red-600"
                        />
                      </div>
                      <div>
                        <FormKit
                          v-model="unit"
                          placeholder="Unit"
                          type="select"
                          name="unit"
                          :options="['$', '€']"
                          validation="required"
                          outer-class="mb-4"
                          label-class="form-label inline-block mb-2 text-gray-700"
                          input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          help-class="text-sm text-gray-500 mt-1"
                          message-class="mt-1 text-sm text-red-600"
                        />
                      </div>
                      <div>
                        <FormKit
                          v-model="quantity"
                          placeholder="Quantity of product"
                          type="text"
                          name="quantity"
                          validation="required"
                          outer-class="mb-4"
                          label-class="form-label inline-block mb-2 text-gray-700"
                          input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          help-class="text-sm text-gray-500 mt-1"
                          message-class="mt-1 text-sm text-red-600"
                        />
                      </div>

                      <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        @click="addProduct"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table>
            <tr>
              <th>Type</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
            <div v-for="(product, i) in products" :key="i">
              <tr v-for="(polution, j) in product.polutions" :key="j">
                <td>{{ polution.nameId }}</td>
                <td>{{ polution.quantity }}</td>
                <td>{{ polution.unit }}</td>
              </tr>
            </div>
            <div v-for="(itemss, i) in items" :key="i">
              <tr v-for="(polution, j) in itemss.polutions" :key="j">
                <td>{{ polution.nameId }}</td>
                <td>{{ polution.quantity }}</td>
                <td>{{ polution.unit }}</td>
              </tr>
            </div>
          </table>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const route = useRoute();
const user = useUser();

const storage = ref([]);

const item = ref({});
const price = ref('');
const unit = ref('');
const quantity = ref('');

storage.value = (
  await $fetch(`/api/users/${user.data._id}/storages/${route.params.storageId}`)
).data.items[0];

const items = ref([]);
items.value = (await $fetch(`/api/items`)).data.items;
for (const item of items.value) {
  item.label = item.name;
  item.value = item._id;
}

const products = ref([]);
products.value = (
  await $fetch(
    `/api/users/${user.data._id}/storages/${route.params.storageId}/products`
  )
).data.items;

for (const product of products.value) {
  product.name = (
    await $fetch(`/api/items/${product.item}`)
  ).data.items[0].name;
}

const itemsOfProducts = ref([]);
for (const product of products.value) {
  for (const item of items.value) {
    if (product.item === item.value) {
      itemsOfProducts.value.push(item);
    }
  }
}

// Polutions

const polutionsItems = ref([]);
for (const itemOfProduct of itemsOfProducts.value) {
  polutionsItems.value = (
    await $fetch(`/api/items/${itemOfProduct._id}/polutions`)
  ).data.items;
}

const polutionsProducts = ref([]);
for (const product of products.value) {
  polutionsProducts.value = (
    await $fetch(`/api/products/${product._id}/polutions`)
  ).data.items;
}

const totalPolution = ref(0);
for (const polutionItem of polutionsItems.value) {
  totalPolution.value += polutionItem.quantity;
}
for (const polutionProduct of polutionsProducts.value) {
  if (polutionsProducts.length !== 0) {
    totalPolution.value += polutionProduct.quantity;
  }
}

// Resources

const resourcesItems = ref([]);
for (const itemOfProduct of itemsOfProducts.value) {
  resourcesItems.value = (
    await $fetch(`/api/items/${itemOfProduct._id}/resources`)
  ).data.items;
}

const resourcesProducts = ref([]);
for (const product of products.value) {
  resourcesProducts.value = (
    await $fetch(`/api/products/${product._id}/resources`)
  ).data.items;
}

const totalResources = ref(0);
for (const resourceItem of resourcesItems.value) {
  totalResources.value += resourceItem.quantity;
}
for (const resourceProduct of resourcesProducts.value) {
  if (resourcesProducts.length !== 0) {
    totalResources.value += resourceProduct.quantity;
  }
}
console.log('unit value:');
console.log(unit.value);

async function addProduct() {
  await $fetch(`/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      item: item.value,
      price: price.value,
      unit: unit.value,
      supplier: user.data._id,
      quantity: quantity.value,
      storageId: route.params.storageId
    })
  });
}

async function deleteProduct() {
  await $fetch(
    `/api/users/${user.data._id}/storages/${route.params.storageId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        item: item.value,
        price: price.value,
        unit: unit.value,
        supplier: supplier.value,
        quantity: quantity.value
      })
    }
  );
}
</script>
