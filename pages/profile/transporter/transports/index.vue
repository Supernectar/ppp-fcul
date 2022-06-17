<template>
  <div>
    <Navbar />
    <section>
      <div class="flex">
        <div>
          <SideNav />
        </div>

        <div class="bg-light-100 p-2 w-full">
          <h1>Transports</h1>
          <div id="orders" class="mt-4">
            <h2 class="text-xl font-semibold">Registered vehicles</h2>
            <p>See your registered vehicles here</p>
            <div>
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Max Load
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
                    >
                      Plate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="transport in transports"
                    :key="transport._id"
                    class="border-b"
                  >
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.brand }}
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.model }}
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.maxLoad }}
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.status }}
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.plate }}
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        @click="deleteVehicle(transport._id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="orders" class="mt-4">
            <h2 class="text-xl font-semibold">Register a new vehicle</h2>
            <!-- <p>See your registered vehicles here</p> 
            <div>
              <table class="min-w-full">
                <thead class="bg-white border-b">
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
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Manage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      My Special Friend
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      Peujot
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      Manage
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      Vihacle
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      Citroën
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      Manage
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            -->
            <div>
              <h3>Add a new vehicle:</h3>

              <div class="flex gap-4">
                <div>
                  <FormKit
                    v-model="brand"
                    placeholder="brand of vehicle"
                    type="text"
                    name="brand"
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
                    v-model="model"
                    placeholder="Model of vehicle"
                    type="text"
                    name="model"
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
                    v-model="maxLoad"
                    placeholder="Maximum load"
                    type="number"
                    name="maxLoad"
                    validation="required|min:0"
                    outer-class="mb-4"
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    help-class="text-sm text-gray-500 mt-1"
                    message-class="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <FormKit
                    v-model="status"
                    placeholder="status of vehicle"
                    type="text"
                    name="status"
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
                    v-model="plate"
                    placeholder="plate of vehicle"
                    type="text"
                    name="plate"
                    validation="required"
                    outer-class="mb-4"
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    help-class="text-sm text-gray-500 mt-1"
                    message-class="mt-1 text-sm text-red-600"
                  />
                </div>
                <button
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @click="createVehicle"
                >
                  ADD
                </button>
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

const transports = ref([]);
transports.value = (
  await $fetch(`/api/users/${store.user.userId}/transports`)
).data.items;

// Create new transport
const maxLoad = ref('');
const status = ref('');
const brand = ref('');
const model = ref('');
const plate = ref('');

async function createVehicle() {
  await $fetch(`/api/users/${store.user.userId}/transports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      maxLoad: maxLoad.value,
      brand: brand.value,
      model: model.value,
      status: status.value,
      plate: plate.value
    })
  });
}

async function deleteVehicle(transportId) {
  await $fetch(`/api/users/${store.user.userId}/transports/${transportId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      maxLoad: maxLoad.value,
      brand: brand.value,
      model: model.value,
      status: status.value,
      plate: plate.value
    })
  });
}
</script>
