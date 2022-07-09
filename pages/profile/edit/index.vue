<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-2xl font-bold">My information</h1>
          <div id="addresses" class="mt-4 border rounded-xl p-2">
            <h2 class="text-xl font-semibold">My addresses</h2>
            <p>
              Here is a list of your saved addresses you can use to autocomplete
              storage locations, delivery locations, etc
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <div>
                    <tr>
                      <td><LocationMarkerIcon class="w-5 h-5" /></td>
                      <td>Main address:</td>
                      <td></td>
                      <td>
                        {{
                          displayAddress.street +
                          ', ' +
                          displayAddress.zipCode +
                          ' ' +
                          displayAddress.city +
                          ', ' +
                          displayAddress.country
                        }}
                      </td>
                    </tr>
                  </div>
                  <div v-if="info.addresses.length !== 0">
                    <tr
                      v-for="(otherAddress, index) in info.addresses"
                      :key="index"
                    >
                      <td><LocationMarkerIcon class="w-5 h-5" /></td>
                      <td>
                        {{
                          otherAddress.street +
                          ', ' +
                          otherAddress.zipCode +
                          ' ' +
                          otherAddress.city +
                          ', ' +
                          otherAddress.country
                        }}
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>

              <p class="mt-4">Add a new address</p>

              <div class="flex gap-4 mt-2">
                <div>
                  <FormKit
                    v-model="newStreet"
                    label="Street"
                    placeholder=""
                    type="text"
                    name="brand"
                    validation="required|length:6"
                    outer-class="mb-4"
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    help-class="text-sm text-gray-500 mt-1"
                    message-class="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <FormKit
                    v-model="newZip"
                    label="Zipcode"
                    placeholder=""
                    type="text"
                    name="model"
                    validation="required|matches:/^[0-9]{4}-[0-9]{3}$/"
                    outer-class="mb-4"
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-full sm:w-24 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    help-class="text-sm text-gray-500 mt-1"
                    message-class="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <FormKit
                    v-model="newCity"
                    label="City"
                    placeholder=""
                    type="text"
                    name="model"
                    validation="required|length:4"
                    outer-class="mb-4"
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-full sm:w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    help-class="text-sm text-gray-500 mt-1"
                    message-class="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <FormKit
                    v-model="newCountry"
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
              </div>
              <button
                class="p-1 rounded border bg-violet-100"
                @click="addAddress"
              >
                Register new address
              </button>
            </div>
          </div>

          <FormKit type="form" @submit="updateInfo">
            <FormKit
              v-model="name"
              label="Name"
              type="text"
              validation="length:3"
              outer-class="mb-4"
              label-class="form-label inline-block mb-2 text-gray-700"
              input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              help-class="text-sm text-gray-500 mt-1"
              message-class="mt-1 text-sm text-red-600"
              :placeholder="info.name"
            />

            <FormKit
              v-model="username"
              label="Username"
              type="text"
              validation="length:3"
              outer-class="mb-4"
              label-class="form-label inline-block mb-2 text-gray-700"
              input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              help-class="text-sm text-gray-500 mt-1"
              message-class="mt-1 text-sm text-red-600"
              :placeholder="info.username"
            />

            <FormKit
              v-model="email"
              label="Email"
              type="text"
              validation="email"
              outer-class="mb-4"
              label-class="form-label inline-block mb-2 text-gray-700"
              input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              help-class="text-sm text-gray-500 mt-1"
              message-class="mt-1 text-sm text-red-600"
              :placeholder="info.email"
            />

            <FormKit
              v-model="password"
              label="Password"
              type="password"
              validation="length:6|matches:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/"
              :validation-messages="{
                matches:
                  'Password must contain at least 1 number, 1 uppercase character, 1 lowercase character, 1 special character'
              }"
              outer-class="mb-4"
              label-class="form-label inline-block mb-2 text-gray-700"
              input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              help-class="text-sm text-gray-500 mt-1"
              message-class="mt-1 text-sm text-red-600"
              placeholder="********"
            />

            <p>Main address</p>
            <hr />

            <div class="mt-2">
              <FormKit
                v-model="street"
                label="Street"
                type="text"
                validation="length:6"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
                :placeholder="displayAddress.street"
              />
              <div class="flex gap-4">
                <FormKit
                  v-model="zipCode"
                  label="Zip Code"
                  type="text"
                  validation="matches:/^[0-9]{4}-[0-9]{3}$/"
                  :validation-messages="{
                    matches: 'Zip code must be formatted: xxxx-xxx'
                  }"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full sm:w-24 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                  :placeholder="displayAddress.zipCode"
                />

                <FormKit
                  v-model="city"
                  label="City"
                  type="text"
                  validation="length:4"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full sm:w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                  :placeholder="displayAddress.city"
                />
              </div>

              <FormKit
                v-model="country"
                label="Country"
                type="select"
                :options="names"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
                :placeholder="displayAddress.country"
              />
            </div>

            <hr />

            <div class="mt-2">
              <FormKit
                v-model="phone"
                label="Phone number"
                type="text"
                validation="length:9"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
                :placeholder="info.phone"
              />

              <FormKit
                v-model="nif"
                label="NIF"
                type="text"
                validation="length:9"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full sm:w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="text-sm text-gray-500 mt-1"
                message-class="mt-1 text-sm text-red-600"
                :placeholder="info.nif"
              />
            </div>

            <template #submit>
              <div class="flex space-x-2 justify-center">
                <FormKit
                  type="submit"
                  label="Update account"
                  input-class="inline-block my-4 w-40 px-6 py-2.5 bg-violet-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-500 hover:shadow-lg focus:bg-violet-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-600 active:shadow-lg transition duration-150 ease-in-out"
                />
              </div>
              <hr />
              <p class="flex space-x-2 justify-center">
                You have 60 days to recover your account, after that your
                account will be permanently deleted.
              </p>
            </template>
          </FormKit>
          <div class="flex space-x-2 justify-center">
            <input
              type="submit"
              class="inline-block my-4 w-40 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
              name=""
              value="Delete account"
              @click="deleteAcc"
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
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
                  {{ 'Login' }}
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
  </div>
</template>

<script setup>
import { LocationMarkerIcon } from '@heroicons/vue/outline/index.js';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

const user = useUser();
const router = useRouter();

// Countries
const names = ref([]);
const result2 = await $fetch(`https://restcountries.com/v3.1/all`);
for (let i = 0; i < result2.length; i++) {
  names.value.push(result2[i].name.common);
}
names.value.sort((a, b) => a.localeCompare(b));

// User info
const info = ref([]);
info.value = await $fetch(`/api/users/${user.data._id}`);

// Address of user
const displayAddress = ref([]);
if (user.data.type === 'Consumer') {
  displayAddress.value = info.value.consumerData.address;
} else if (user.data.type === 'Supplier') {
  displayAddress.value = info.value.supplierData.address;
} else if (user.data.type === 'Transporter') {
  displayAddress.value = info.value.transporterData.address;
}

const newStreet = ref('');
const newZip = ref('');
const newCity = ref('');
const newCountry = ref('');

const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');

const street = ref('');
const zipCode = ref('');
const city = ref('');
const country = ref('');

const phone = ref('');
const nif = ref('');

const modalContent = ref('');
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal(msg) {
  modalContent.value = msg;
  isOpen.value = true;
}

async function addAddress() {
  const res = await $fetch(`/api/users/${user.data._id}`, {
    method: 'PUT',
    body: {
      type: user.data.type,
      newAddress: {
        street: newStreet.value,
        country: newCountry.value,
        city: newCity.value,
        zipCode: newZip.value
      }
    }
  });
  console.log(res);

  const userdb = await $fetch(`/api/users/${user.data._id}`);
  user.$patch({
    data: userdb
  });
}

async function deleteAcc() {
  await $fetch(`/api/users/${user.data._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  user.reset();

  openModal('Your account was deleted successfully');
  router.push('/signup');
}
async function updateInfo() {
  const res = await $fetch(`/api/users/${user.data._id}`, {
    method: 'PUT',
    body: {
      username: username.value === '' ? user.data.username : username.value,
      email: email.value === '' ? user.data.email : email.value,
      name: name.value === '' ? user.data.name : name.value,
      type: user.data.type,
      address: {
        street:
          street.value === '' ? displayAddress.value.street : street.value,
        country:
          country.value === '' ? displayAddress.value.country : country.value,
        city: city.value === '' ? displayAddress.value.city : city.value,
        zipCode:
          zipCode.value === '' ? displayAddress.value.zipCode : zipCode.value
      },
      phone: phone.value === '' ? user.data.phone : phone.value,
      nif: nif.value === '' ? user.data.nif : nif.value,
      password: password.value === '' ? user.data.password : password.value
    }
  });
  console.log(res);

  const userdb = await $fetch(`/api/users/${user.data._id}`);
  user.$patch({
    data: userdb
  });

  openModal('Your account was updated successfully');
}
</script>
