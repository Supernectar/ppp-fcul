<template>
  <div>
    <Navbar />
    <section class="bg-light-600 bg-red-100">
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
                            {{ storage.location }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {{ storage.popularity }}
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
                      v-model="location"
                      placeholder="location"
                      type="number"
                      name="location"
                      validation="required|min:0"
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
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { useUser } from '~/store/user';

const store = useUser();

const storages = ref([]);
storages.value = (
  await $fetch(`/api/users/${store.user.userId}/storages`)
).data.items;

// Create new storage
const name = ref('');
const location = ref('');
// let visibility = ref('');

async function createStorage() {
  await $fetch(`/api/users/${store.user.userId}/storages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: name.value,
      location: location.value,
      visibility: visibility.value
    })
  });
}
</script>
