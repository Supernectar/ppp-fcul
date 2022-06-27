<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">My transports</h1>
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
                      Resources consumed
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
                    v-for="(transport, index) in transports"
                    :key="index"
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
                      <!-- {{
                        resourcesTransports[index].quantity +
                        ' ' +
                        resourcesTransports[index].unit +
                        '/km'
                      }} -->
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
            <div>
              <div class="flex gap-4">
                <div>
                  <FormKit
                    label="Brand of vehicle"
                    v-model="brand"
                    placeholder=""
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
                    label="Model of vehicle"
                    v-model="model"
                    placeholder=""
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
                    label="Status of vehicle"
                    v-model="status"
                    placeholder=""
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
                <!--
                
                <div>
                  <FormKit
                    label="Maximum load"
                    v-model="maxLoad"
                    placeholder=""
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
                    label="Quantity consumed"
                    v-model="quantityPerKm"
                    placeholder="per km"
                    type="text"
                    name="quantityPerKm"
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
                    label="Unit"
                    v-model="unit"
                    placeholder=""
                    type="select"
                    name="unit"
                    :options="['L', 'kWh']"
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
                    label="Type Of Fuel"
                    v-model="fueltype"
                    placeholder=""
                    type="select"
                    name="fuel"
                    :options="['Diesel', 'Gasoline', 'Biodiesel', 'Electric']"
                    validation="required"
                    outer-class="mb-4"
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    help-class="text-sm text-gray-500 mt-1"
                    message-class="mt-1 text-sm text-red-600"
                  />
                </div>-->
                <div>
                  <FormKit
                    label="Plate of vehicle"
                    v-model="plate"
                    placeholder=""
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
                <div>
                  <FormKit
                    label="Address"
                    v-model="address"
                    placeholder=""
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
                  class="form-control block px-3 py-1 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @click="createVehicle"
                >
                  Add vehicle
                </button>
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

const transports = ref([]);
transports.value = (
  await $fetch(`/api/users/${user.data._id}/transports`)
).data.items;

// const resourcesTransports = ref([]);
// for (const transport of transports.value) {
//   resourcesTransports.value.push(
//     (
//       await $fetch(
//         `/api/users/${user.data._id}/transports/${transport._id}/resources`
//       )
//     ).data.items[0]
//   );
// }
// console.log(resourcesTransports.value);

// Create new transport
// const maxLoad = ref('');
const status = ref('');
const brand = ref('');
const model = ref('');
// const quantityPerKm = ref('');
// const unit = ref('');
const plate = ref('');
// const fueltype = ref('');
// const resource = ref('');
// const resQuantity = ref(30);
// const polQuantity = ref(300);
async function createVehicle() {
  // resource.value = (
  //   await $fetch(`/api/resources?nameId?=${fueltype}`)
  // ).data.items[0];

  await $fetch(`/api/users/${user.data._id}/transports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      // maxLoad: maxLoad.value,
      brand: brand.value,
      model: model.value,
      status: status.value,
      // quantity: quantityPerKm.value,
      // unit: unit.value,
      plate: plate.value
      // resources: [{ quantity: resQuantity.value, resource: resource.value._id }]
      // polutions: [polQuantity.value]
    })
  });
}

async function deleteVehicle(transportId) {
  await $fetch(`/api/users/${user.data._id}/transports/${transportId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      // maxLoad: maxLoad.value,
      brand: brand.value,
      model: model.value,
      status: status.value,
      plate: plate.value
    })
  });
}
</script>
