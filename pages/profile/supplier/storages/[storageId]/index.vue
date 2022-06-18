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
                            {{ items[index] }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ product.price }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ product.quantity }}
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
                          :options="names"
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
                          placeholder="Unit ($/€)"
                          type="text"
                          name="unit"
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

const item = ref('');
const price = ref('');
const unit = ref('');
const quantity = ref('');

storage.value = (
  await $fetch(`/api/users/${user.data._id}/storages/${route.params.storageId}`)
).data.items[0];

let products = [];
let items = [];
const productIds = storage.value.products;
for (let i = 0; i < productIds.length; i++) {
  let product = (await $fetch(`/api/products/${productIds[i]}`)).data.items;
  let item = (await $fetch(`/api/items/${product.item}`)).data.items[0].name;
  products.push(product);
  items.push(item);
}

let names = [];
const allItems = (await $fetch(`/api/items`)).data.items;
for (let j = 0; j < allItems.length; j++) {
  names.push(allItems[j].name);
}

async function addProduct() {
  console.log(item.value);
  console.log(price.value);
  console.log(unit.value);
  console.log(toRaw(user.data));
  console.log(quantity.value);
  let product = await $fetch(`/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      item: item.value,
      price: price.value,
      unit: unit.value,
      supplier: toRaw(user.data),
      quantity: quantity.value
    })
  });
  console.log(product);
}

async function deleteProduct(productId) {
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
