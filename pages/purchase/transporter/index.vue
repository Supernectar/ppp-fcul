<template>
  <div>
    <Navbar />
    <div class="rounded-lg shadow hidden md:block mx-10 m-10 bg-indigo-100">
      <div class="h-full w-full bg-indigo-100 py-16">
        <div class="container mx-auto text-center">
          <div class="w-11/12 lg:w-1/2 mx-auto">
            <div class="bg-gray-400 h-1 flex items-center justify-between">
              <div class="w-1/2 bg-indigo-700 h-1 flex items-center">
                <div
                  class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-check"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>

              <div
                class="w-0 flex justify-between bg-indigo-700 h-1 items-center relative"
              >
                <div class="absolute right-0 -mr-2">
                  <div
                    class="relative bg-gray-200 shadow-lg px-2 py-1 rounded mt-16 -mr-12"
                  >
                    <p class="text-indigo-700 text-xs font-bold">
                      Step 2: Transports
                    </p>
                  </div>
                </div>

                <div
                  class="h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative"
                >
                  <div class="h-4 w-4 bg-indigo-700 rounded-full"></div>
                </div>
              </div>

              <div class="w-1/2 flex justify-end">
                <div class="bg-gray-200 h-6 w-6 rounded-full shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <!-- <label
          class="block text-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          Consumption
        </label>
        <div class="relative">
          <select
            class="block text-center appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>+ 4L/100km</option>
            <option>+ 5L/100km</option>
            <option>+ 6/100km</option>
          </select>
          <div
            class="text-center pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div> -->

        <div>
          <FormKit
            label="Type Of Fuel"
            v-model="fuel"
            placeholder=""
            type="select"
            name="fuel"
            :options="fuelResources"
            validation="required"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base
          font-normal text-gray-700 bg-white bg-clip-padding border border-solid
          border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
          focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm
          text-red-600"
          />
        </div>
        <!-- {{ fuel }} -->
        <div>
          <FormKit
            label="Consumption"
            v-model="consumption"
            placeholder=""
            type="range"
            name="consumption"
            :min="consumptionMin"
            :max="consumptionMax"
            :step="1"
            validation="required"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base
          font-normal text-gray-700 bg-white bg-clip-padding border border-solid
          border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
          focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm
          text-red-600"
          />{{ consumption }}
        </div>

        <!-- <div>
          <GMap
            class="h-80 w-80"
            :markers-positions="availableTransportsCoords"
          />
        </div> -->

        <!-- <div>
          <FormKit
            label="Address"
            v-model="address"
            placeholder=""
            type="select"
            name="address"
            :options="addresses"
            validation="required"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base
          font-normal text-gray-700 bg-white bg-clip-padding border border-solid
          border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
          focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm
          text-red-600"
          />
        </div> -->
      </div>

      <button
        type="button"
        class="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        @click="$router.push('carttest')"
      >
        Cancel
      </button>
      <!-- <button
        type="button"
        class="text-white bg-gradient-to-br from-indigo-500 to-indigo-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="$router.push('payment')"
      >
        Next >
      </button> -->
    </div>
    <table class="m-auto w-10/12">
      <thead class="bg-gray-500 border-gray-500">
        <tr>
          <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Brand</th>
          <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Model</th>
          <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Status</th>
          <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
            Resources
          </th>
          <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Polution</th>
          <th class="w-20 text-sm text-gray-200 whitespace-nowrap"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300 text-center">
        <tr
          v-for="(transport, index) in transportsFilter"
          :id="transport"
          :key="index"
          class="bg-white"
        >
          <td>{{ transport.brand }}</td>
          <td>{{ transport.model }}</td>
          <td>{{ transport.status }}</td>
          <td
            v-for="(res, index1) in transport.resources"
            :id="res"
            :key="index1"
            class="bg-white"
          >
            {{ res.quantity }} L/100km
            <br />
            {{ res.resource.name }}
            <br />
          </td>
          <td
            v-for="(pol, index2) in transport.polutions"
            :id="pol"
            :key="index2"
            class="bg-white flex"
          >
            {{ pol.quantity }} {{ pol.polution.unit }}/{{ pol.polution.name }}
          </td>
          <td>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-blue-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              @click="chooseTransport(transport)"
            >
              Choose
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <table>
      <p
        v-for="(transport, index) in transportsFilter"
        :id="transport"
        :key="index"
        class="bg-white"
      >
        {{ transport }}
      </p>
    </table> -->
    <br />
    <br />
    <!-- {{ transportsFilter.value }} -->
  </div>
</template>
<script setup>
import useOrder from '~/stores/orderTransport';
const router = useRouter();
const store = useOrder();
// const transp = ref(store.getTransport);
// const userStore = useUser();
const consumption = ref(0);
const transports = ref([]);
const transportsFilter = ref([]);
const fuel = ref('');
const fuelResources = ref([]);
const fuelConsumption = ref([]);
const consumptionMin = ref(0);
const consumptionMax = ref(90);
// const  addresses = ref([]);
// const user = userStore.data;

transports.value = await $fetch(`/api/transports`);

// addresses.value.push(
//   user.consumerData.address[0].street +
//     ', ' +
//     user.consumerData.address[0].country +
//     ', ' +
//     user.consumerData.address[0].city +
//     ', ' +
//     user.consumerData.address[0].zipCode
// );
// for (const addr of user.addresses) {
//   addresses.value.push(
//     addr.street + ', ' + addr.country + ', ' + addr.city + ', ' + addr.zipCode
//   );
// }

for (let i = 0; i < transports.value.length; i++) {
  if (transports.value[i].resources.some((el) => el.resource.type === 'fuel')) {
    const fuelIndex = transports.value[i].resources.findIndex(
      (el) => el.resource.type === 'fuel'
    );
    let quant = 0;
    if (
      i === 0 ||
      !fuelResources.value.includes(
        transports.value[i].resources[fuelIndex].resource.name
      )
    ) {
      fuelResources.value.push(
        transports.value[i].resources[fuelIndex].resource.name
      );
      quant = transports.value[i].resources[fuelIndex].quantity;
      fuelConsumption.value.push([quant, quant]);
    } else {
      const a = fuelResources.value.findIndex(
        (el) => el === transports.value[i].resources[fuelIndex].resource.name
      );
      quant = transports.value[i].resources[fuelIndex].quantity;

      if (quant < fuelConsumption.value[a][0]) {
        fuelConsumption.value[a][0] = quant;
      } else if (quant > fuelConsumption.value[a][1]) {
        fuelConsumption.value[a][1] = quant;
      }
    }
  }
}
for (const fuel of fuelConsumption.value) {
  if (fuel[0] === fuel[1]) {
    fuel[1]++;
  }
}
fuel.value = fuelResources.value[0];
consumptionMin.value = fuelConsumption.value[0][0];
consumptionMax.value = fuelConsumption.value[0][1];
consumption.value = consumptionMin.value;

filterTranports();

watch(fuel, () => {
  const fuelI = fuelResources.value.findIndex((el) => el === fuel.value);
  consumptionMin.value = fuelConsumption.value[fuelI][0];
  consumptionMax.value = fuelConsumption.value[fuelI][1];
  consumption.value = consumptionMin.value;
});
watch(consumption, () => {
  filterTranports();
});
function filterTranports() {
  transportsFilter.value = [];
  for (const transport of transports.value) {
    const resFuel = transport.resources.findIndex(
      (el) => el.resource.type === 'fuel'
    );
    if (
      (resFuel !== -1) &
      (transport.resources[resFuel].resource.name === fuel.value) &
      (transport.resources[resFuel].quantity <= consumption.value)
    ) {
      transportsFilter.value.push(transport);
    }
  }
}

function chooseTransport(transp) {
  const orderTransport = ref([]);
  orderTransport.value.push(transp._id);
  store.$patch({ orderTransport: orderTransport.value });
  router.push(`payment`);
}
</script>
