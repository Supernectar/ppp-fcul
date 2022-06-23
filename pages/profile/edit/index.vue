<template>
  <div>
    <Navbar />
    <section>
      <div class="flex">
        <div>
          <SideNav />
        </div>
        <div class="p-2 grow">
          <h1 class="text-4xl font-bold">My information</h1>
          <div id="addresses" class="mt-4 border rounded-xl p-2">
            <h2 class="text-xl font-semibold">My addresses</h2>
            <p>
              Here is a list of your saved addresses you can use to autocomplete
              storage locations, delivery locations, ...
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><LocationMarkerIcon class="w-5 h-5" /></td>
                    <td>
                      {{
                        info.address.street +
                        ', ' +
                        info.address.city +
                        ', ' +
                        info.address.country
                      }}
                    </td>
                  </tr>
                  <tr
                    v-for="(shipAddress, index) in info.consumerData
                      .shippingAddresses"
                    :key="index"
                  >
                    <td><LocationMarkerIcon class="w-5 h-5" /></td>
                    <td>
                      {{
                        shipAddress.street +
                        ', ' +
                        shipAddress.city +
                        ', ' +
                        shipAddress.country
                      }}
                    </td>
                  </tr>
                  <tr
                    v-for="(storageAddress, index) in info.supplierData
                      .storages"
                    :key="index"
                  >
                    <td><LocationMarkerIcon class="w-5 h-5" /></td>
                    <td>
                      {{
                        storageAddress.address.street +
                        ', ' +
                        storageAddress.address.city +
                        ', ' +
                        storageAddress.address.country
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>

              <button class="p-1 rounded border bg-blue-100">
                Register new address
              </button>
            </div>
          </div>
          <!--
          <FormKit
            v-model="password"
            label="Password"
            type="password"
            validation="required"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />
          -->
          <form class="col" @submit.prevent>
            <h2>Your personal information:</h2>
            <br />
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Name</label>
              <input
                id="exampleInputName1"
                v-model="name"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :placeholder="info.name"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputAddress1" class="form-label"
                >Username</label
              >

              <input
                id="exampleInputAddress1"
                v-model="username"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :placeholder="info.username"
              />
              <div :class="calculateAddressFeedbackClass">
                {{ calculateAddressFeedback }}
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">E-mail</label>

              <input
                id="exampleInputEmail1"
                v-model="email"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :placeholder="info.email"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPhone1" class="form-label">Phone</label>

              <input
                id="exampleInputPhone1"
                v-model="phone"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="calculatePhoneClass"
                :placeholder="info.phone"
              />
              <div :class="calculatePhoneFeedbackClass">
                {{ calculatePhoneFeedback }}
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputNIF1" class="form-label">NIF</label>

              <input
                id="exampleInputNIF1"
                v-model="nif"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="calculateNIFClass"
                :placeholder="info.nif"
              />
              <div :class="calculateNIFFeedbackClass">
                {{ calculateNIFFeedback }}
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >

              <input
                id="exampleInputPassword1"
                v-model="password"
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="calculatePasswordClass"
                placeholder="*********"
              />
              <div :class="calculatePasswordFeedbackClass">
                {{ calculatePasswordFeedback }}
              </div>
            </div>

            <div class="flex space-x-2 justify-center">
              <input
                type="submit"
                class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                name=""
                value="Update account"
                @click="updateInfo"
              />
            </div>
            <hr />
            <br />
            <p class="flex space-x-2 justify-center">
              You have 60 days to recover your account, after that your account
              will be permanently deleted.
            </p>
            <div class="flex space-x-2 justify-center">
              <input
                type="submit"
                class="inline-block my-4 w-40 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                name=""
                value="Delete account"
                @click="deleteAcc"
              />
            </div>
          </form>
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
    <Footer />
  </div>
</template>

<script setup>
import { LocationMarkerIcon } from '@heroicons/vue/outline/index.js';

const user = useUser();
const router = useRouter();

const info = ref([]);
info.value = (
  await $fetch(`/api/users?email=${user.data.email}`)
).data.items[0];

const username = ref('');
const email = ref('');
const name = ref('');
const address = ref('');
const phone = ref('');
const nif = ref('');
const password = ref('');

const modalContent = ref('');
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal(msg) {
  modalContent.value = msg;
  isOpen.value = true;
}

async function deleteAcc() {
  await $fetch(`/api/users/${user.data._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  user.reset();

  openModal('Your account was deleted successfully');
  setTimeout(() => {
    router.push('/signup');
  }, 3000);
}
async function updateInfo() {
  const res = await fetch(`/api/users/${user.data._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user.data.username === '' ? user.data.username : username.value,
      email: user.data.email === '' ? user.data.email : email.value,
      name: user.data.name === '' ? user.data.name : name.value,
      address: {
        street: user.data.address === '' ? user.data.address : address.value
      },
      phone: user.data.phone === '' ? user.data.phone : phone.value,
      nif: user.data.nif === '' ? user.data.nif : nif.value,
      password: user.data.password === '' ? user.data.password : password.value
    })
  });
  const resjson = await res.json();
  console.log(resjson);
  const res3 = (
    await $fetch(`/api/users?email=${email.value}&password=${password.value}`)
  ).data.items[0];
  user.$patch({ data: res3 });
}
</script>
