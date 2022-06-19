<template>
  <div>
    <Navbar />
    <section class="">
      <div class="flex">
        <div>
          <SideNav />
        </div>

        <div class="bg-light-100 p-2 w-full">
          <h1>Products</h1>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <div>
                    <div class="flex">
                      <img
                        src="https://s1.minipreco.pt/medias/h59/h8c/8942827405342.jpg"
                        class="h-10"
                      />
                      ->
                      <FormKit
                        v-model="storage"
                        type="select"
                        placeholder="Choose your storage"
                        :options="storages"
                        validation="required"
                        outer-class="mb-4"
                        label-class="form-label inline-block mb-2 text-gray-700"
                        input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        help-class="text-sm text-gray-500 mt-1"
                        message-class="mt-1 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  <table class="min-w-full">
                    <thead class="border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Icon
                        </th>
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
                          iconSuposto
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                          {{ product.name }}
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

const storage = ref({});

const storages = ref([]);
storages.value = (
  await $fetch(`/api/users/${user.data._id}/storages`)
).data.items;
for (const storage of storages.value) {
  storage.label = storage.name;
  storage.value = storage._id;
}

// let products = [];

const products = ref([]);

watch(storage, async () => {
  console.log(storage.value);
  products.value = (
    await $fetch(
      `/api/users/${user.data._id}/storages/${storage.value}/products`
    )
  ).data.items;
  for (const product of products.value) {
    product.name = (
      await $fetch(`/api/items/${product.item}`)
    ).data.items[0].name;
  }

  console.log(products.value);
});

// for (let i = 0; i < productIds.length; i++) {
//   let product = (await $fetch(`/api/products/${productIds[i]}`)).data.items;
//   let item = (await $fetch(`/api/items/${product.item}`)).data.items[0].name;
//   products.push(product);
//   items.push(item);
// }

// let names = [];
// const allItems = (await $fetch(`/api/items`)).data.items;
// for (let j = 0; j < allItems.length; j++) {
//   names.push(allItems[j].name);
// }

// async function addProduct() {
//   console.log(item.value);
//   console.log(price.value);
//   console.log(unit.value);
//   console.log(toRaw(user.data));
//   console.log(quantity.value);
//   let product = await $fetch(`/api/products`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },

//     body: JSON.stringify({
//       item: item.value,
//       price: price.value,
//       unit: unit.value,
//       supplier: user.data._id,
//       quantity: quantity.value,
//       storageId: route.params.storageId
//     })
//   });
//   console.log(product);
// }

// async function deleteProduct(productId) {
//   await $fetch(`/api/users/${user.data._id}/storages/${storage._id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },

//     body: JSON.stringify({
//       item: item.value,
//       price: price.value,
//       unit: unit.value,
//       supplier: supplier.value,
//       quantity: quantity.value
//     })
//   });
// }
</script>
