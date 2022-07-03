<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-2xl font-bold">My storages</h1>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="w-2">
                      <thead class="border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-3 py-2 md:px-6 md:py-4 text-left"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-3 py-2 md:px-6 md:py-4 text-left"
                          >
                            Products
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-3 py-2 md:px-6 md:py-4 text-left"
                          >
                            Location
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-3 py-2 md:px-6 md:py-4 text-left"
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
                            class="px-2 py-4 whitespace-nowrap text-sm text-gray-900"
                          >
                            {{ storage.name }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                          >
                            {{ storage.products.length }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                          >
                            {{
                              storage.address.street
                              /*
                              +
                              ', ' +
                              storage.address.zipCode +
                              ' ' +
                              storage.address.city +
                              ', ' +
                              storage.address.country
                              */
                            }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
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
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-xs md:text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Manage
                              </button>
                            </NuxtLink>
                          </td>

                          <td
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <button
                              type="button"
                              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-xs md:text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

                <div class="flex gap-4 mt-5">
                  <div>
                    <FormKit
                      v-model="name"
                      label="Name"
                      type="text"
                      name="name"
                      validation="required|length:3"
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
                      label="Street"
                      type="text"
                      name="street|length:6"
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
                      label="Zip Code"
                      type="text"
                      name="zipCode"
                      validation="required|matches:/^[0-9]{4}-[0-9]{3}$/"
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
                      label="City"
                      type="text"
                      name="city"
                      validation="required|length:4"
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
                      label="Country"
                      type="select"
                      :options="names"
                      outer-class="mb-4"
                      label-class="form-label inline-block mb-2 text-gray-700"
                      input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      help-class="text-sm text-gray-500 mt-1"
                      message-class="mt-1 text-sm text-red-600"
                    />
                  </div>
                  <div>
                    <FormKit
                      v-model="visibility"
                      type="checkbox"
                      label="Visibility"
                      name="visibility"
                    />
                  </div>
                </div>
                <button
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @click="createStorage"
                >
                  Add storage
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Dialog -->
        <TransitionRoot appear :show="isOpen" as="template">
          <Dialog class="relative z-10" as="div" @close="closeModal">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div
                class="flex min-h-full items-center justify-center p-4 text-center"
              >
                <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95"
                >
                  <DialogPanel
                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                  >
                    <DialogTitle
                      as="h3"
                      class="text-lg font-medium leading-6 text-gray-900"
                    >
                      {{ 'Delete storage' }}
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{{ modalContent }}</p>
                    </div>

                    <div class="mt-4">
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="closeModal"
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

const modalContent = ref('');
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal(msg) {
  modalContent.value = msg;
  isOpen.value = true;
}

const user = useUser();

// Countries
const names = ref([]);
const result2 = await $fetch(`https://restcountries.com/v3.1/all`);
for (let i = 0; i < result2.length; i++) {
  names.value.push(result2[i].name.common);
}
names.value.sort((a, b) => a.localeCompare(b));

const storages = ref([]);
storages.value = await $fetch(`/api/users/${user.data._id}/storages`);

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
    body: {
      name: name.value,
      address: {
        street: street.value,
        zipCode: zipCode.value,
        city: city.value,
        country: country.value
      },
      visibility: visibility.value
    }
  });

  const userdb = await $fetch(`/api/users/${user.data._id}`);

  user.$patch({
    data: userdb
  });
}

async function deleteStorage(storageId) {
  const storage = await $fetch(
    `/api/users/${user.data._id}/storages/${storageId}`
  );
  console.log(storage);
  console.log(storage.products);

  if (storage.products.length === 0) {
    await $fetch(`/api/users/${user.data._id}/storages/${storageId}`, {
      method: 'DELETE',
      body: {
        name: name.value,
        address: {
          street: street.value,
          zipCode: zipCode.value,
          city: city.value,
          country: country.value
        },
        visibility: visibility.value
      }
    });
    openModal(`This storage was deleted successfully.`);
  } else {
    openModal(`Can't delete this storage because it still has products.`);
  }

  const userdb = await $fetch(`/api/users/${user.data._id}`);

  user.$patch({
    data: userdb
  });
}
</script>
