<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
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
                            Name
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Number of products
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Location
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Popularity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="storage in storages"
                          :key="storage._id"
                          class="border-b"
                        >
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                          >
                            {{ storage.name }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ storage.products.length }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{
                              storage.address.street +
                              ', ' +
                              storage.address.zipCode +
                              ' ' +
                              storage.address.city +
                              ', ' +
                              storage.address.country
                            }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ storage.popularity }}
                          </td>
                          <td
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <NuxtLink
                              :to="`/profile/supplier/storages/${storage._id}`"
                            >
                              <button
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Manage Storage
                              </button>
                            </NuxtLink>
                          </td>

                          <td
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <button
                              type="button"
                              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                              @click="deleteStorage(storage._id)"
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
              <div>
                <h3>Add a new storage:</h3>

                <div class="flex gap-4">
                  <div>
                    <FormKit
                      v-model="name"
                      placeholder="Storage name"
                      type="text"
                      name="name"
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
                      v-model="street"
                      placeholder="street"
                      type="text"
                      name="street"
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
                      v-model="zipCode"
                      placeholder="zipCode"
                      type="text"
                      name="zipCode"
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
                      v-model="city"
                      placeholder="city"
                      type="text"
                      name="city"
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
                      v-model="country"
                      placeholder="country"
                      type="text"
                      name="country"
                      validation="required"
                      outer-class="mb-4"
                      label-class="form-label inline-block mb-2 text-gray-700"
                      input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      help-class="text-sm text-gray-500 mt-1"
                      message-class="mt-1 text-sm text-red-600"
                    />
                  </div>
                  <div class="form-check">
                    <label for="visibility">Private?</label>
                    <input
                      id="visibility"
                      v-model="visibility"
                      class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                    />
                  </div>
                  <button
                    class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    @click="createStorage"
                  >
                    ADD
                  </button>
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
const user = useUser();

const storages = ref([]);
storages.value = await $fetch(`/api/users/${user.data._id}/storages`).data
  .items;

// Create new storage
const name = ref('');
const street = ref('');
const zipCode = ref('');
const city = ref('');
const country = ref('');
const visibility = ref('');

async function createStorage() {
  await $fetch(`/api/users/${user.data._id}/storages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: name.value,
      address: {
        street: street.value,
        zipCode: zipCode.value,
        city: city.value,
        country: country.value
      },
      visibility: visibility.value
    })
  });

  const userdb = (await $fetch(`/api/users/${user.data._id}`)).data.items[0];

  user.$patch({
    data: userdb
  });
}

async function deleteStorage(storageId) {
  await $fetch(`/api/users/${user.data._id}/storages/${storageId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: name.value,
      address: {
        street: street.value,
        zipCode: zipCode.value,
        city: city.value,
        country: country.value
      },
      visibility: visibility.value
    })
  });

  const userdb = (await $fetch(`/api/users/${user.data._id}`)).data.items[0];

  user.$patch({
    data: userdb
  });
}
</script>
