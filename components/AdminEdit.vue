<template>
  <div>
    <div class="flex">
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-2xl font-bold">Information</h1>
          <br />

          <FormKit type="form" @submit="updateInfo">
            <FormKit
              v-model="name"
              label="Name"
              type="text"
              validation="length:3"
              outer-class="mb-4"
              label-class="form-label inline-block mb-2 text-gray-700"
              input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
              input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
              input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
              input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              help-class="text-sm text-gray-500 mt-1"
              message-class="mt-1 text-sm text-red-600"
              placeholder="********"
            />

            <hr />

            <div class="mt-2">
              <FormKit
                v-model="phone"
                label="Phone number"
                type="text"
                validation="length:9"
                outer-class="mb-4"
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                  input-class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                />
              </div>
            </template>
          </FormKit>
        </section>
      </div>
    </div>

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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

const props = defineProps(['userId']);

const router = useRouter();
const info = ref({});

watch(props, async () => {
  info.value = await $fetch(`/api/users/${props.userId}`);
});

// Countries
const names = ref([]);
const result2 = await $fetch(`https://restcountries.com/v3.1/all`);
for (let i = 0; i < result2.length; i++) {
  names.value.push(result2[i].name.common);
}
names.value.sort((a, b) => a.localeCompare(b));

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

async function updateInfo() {
  const res = await $fetch(`/api/users/${info.value._id}`, {
    method: 'PUT',
    body: {
      username: username.value === '' ? info.value.username : username.value,
      email: email.value === '' ? info.value.email : email.value,
      name: name.value === '' ? info.value.name : name.value,
      phone: phone.value === '' ? info.value.phone : phone.value,
      nif: nif.value === '' ? info.value.nif : nif.value,
      password: password.value === '' ? info.value.password : password.value
    }
  });
  console.log(res);

  openModal('Account was updated successfully');
}
</script>
