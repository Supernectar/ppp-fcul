<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2 w-45">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-4xl font-bold">My transports</h1>
          <div id="orders" class="mt-4">
            <h2 class="text-xl font-semibold">Registered vehicles</h2>
            <p>See your registered vehicles here</p>
            <div class="overflow-auto rounded-lg shadow">
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
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Location
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
                      class="bg-white w-10 border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.brand }}
                    </td>
                    <td
                      class="bg-white w-10 border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.model }}
                    </td>
                    <td
                      class="bg-white w-10 border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.maxLoad }}
                    </td>
                    <td
                      class="bg-white w-10 border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.status }}
                    </td>
                    <td
                      class="bg-white w-10 border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <!-- {{
                        resourcesTransports[index].quantity +
                        ' ' +
                        resourcesTransports[index].unit +
                        '/km'
                      }} -->
                    </td>
                    <td
                      class="bg-white w-10 border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{ transport.plate }}
                    </td>
                    <td
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      {{
                        transport.location.street +
                        ', ' +
                        transport.location.zipCode +
                        ', ' +
                        transport.location.city +
                        ', ' +
                        transport.location.country
                      }}
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
          <div class="mt-4 p-2">
            <h2 class="text-xl font-semibold">Register a new vehicle</h2>
            <FormKit type="form" @submit="createVehicle">
              <FormKit
                v-model="brand"
                label="Brand"
                placeholder=""
                type="text"
                name="brand"
                validation="required"
                outer-class="mb-4 mt-2"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />
              <FormKit
                v-model="model"
                label="Model"
                placeholder=""
                type="text"
                name="model"
                validation="required"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />
              <FormKit
                v-model="status"
                label="Status"
                placeholder=""
                type="text"
                name="status"
                validation="required"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />
              <FormKit
                v-model="plate"
                label="Plate"
                placeholder=""
                type="text"
                name="plate"
                validation="required"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />

              <FormKit
                v-model="street"
                label="Street"
                type="text"
                validation="required|length:6"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />
              <div class="flex gap-4">
                <FormKit
                  v-model="zipCode"
                  label="Zip Code"
                  type="text"
                  validation="required|matches:/^[0-9]{4}-[0-9]{3}$/"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full sm:w-24 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="city"
                  label="City"
                  type="text"
                  validation="required|length:4"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full sm:w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
              </div>
              <FormKit
                v-model="country"
                label="Country"
                type="select"
                placeholder="Choose a country"
                :options="names"
                validation="required"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
              />
              <template #submit>
                <div class="flex space-x-2 justify-center">
                  <FormKit
                    type="submit"
                    label="Add vehicle"
                    input-class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  />
                </div>
              </template>
            </FormKit>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useUser();

// Countries
const names = ref([]);
const result2 = await $fetch(`https://restcountries.com/v3.1/all`);
for (let i = 0; i < result2.length; i++) {
  names.value.push(result2[i].name.common);
}
names.value.sort((a, b) => a.localeCompare(b));

const transports = ref([]);
transports.value = await $fetch(`/api/users/${user.data._id}/transports`);
console.log(transports.value);

for (let i = 0; i < transports.value; i++) {
  console.log(transport);
}

// Create new transport
const status = ref('');
const brand = ref('');
const model = ref('');
const plate = ref('');
const street = ref('');
const zipCode = ref('');
const city = ref('');
const country = ref('');

async function createVehicle() {
  await $fetch(`/api/users/${user.data._id}/transports`, {
    method: 'POST',

    body: {
      brand: brand.value,
      model: model.value,
      status: status.value,
      plate: plate.value,
      location: {
        street: street.value,
        country: country.value,
        city: city.value,
        zipCode: zipCode.value
      }
    }
  });

  const userdb = await $fetch(`/api/users/${user.data._id}`);

  user.$patch({
    data: userdb
  });
}

async function deleteVehicle(transportId) {
  await $fetch(`/api/users/${user.data._id}/transports/${transportId}`, {
    method: 'DELETE',

    body: {
      // maxLoad: maxLoad.value,
      brand: brand.value,
      model: model.value,
      status: status.value,
      plate: plate.value
    }
  });

  const userdb = await $fetch(`/api/users/${user.data._id}`);

  user.$patch({
    data: userdb
  });
}
</script>
