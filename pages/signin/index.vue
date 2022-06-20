<template>
  <div class="bg-blue-200">
    <Navbar />
    <div class="flex h-[calc(100vh-4rem)] items-center">
      <div class="w-100 m-auto bg-white rounded p-4">
        <h1 class="text-center text-3xl font-semibold">Login</h1>
        <hr class="my-2" />
        <FormKit type="form" @submit="login">
          <FormKit
            v-model="email"
            label="Email address"
            type="email"
            validation="required|email"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

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

          <template #submit>
            <FormKit
              type="submit"
              label="Continue"
              input-class="w-full ml-auto px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            />
          </template>
        </FormKit>
        <div class="relative flex py-2 items-center">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-4">or</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div>
        <FormKit
          type="button"
          label="Sign in with Google"
          input-class="w-full ml-auto px-2 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="googleSignIn"
        />
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
                  {{ 'You were logged successfully' }}
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Gooooood :)</p>
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

async function googleSignIn() {
  try {
    const res = await gapi.auth2.getAuthInstance().signIn();
    console.log(res.getBasicProfile());
  } catch (err) {
    console.log('something went wrong');
  }
}

const user = useUser();

const router = useRouter();
const email = ref('');
const password = ref('');

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

async function login() {
  const users = (
    await $fetch(`/api/users?email=${email.value}&password=${password.value}`)
  ).data.items;

  if (users.length === 1) {
    const res = await $fetch(`/api/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    if (res.error === 'Invalid username or password') {
      console.log('User does not exist');
    } else {
      user.$patch({
        data: users[0]
      });

      openModal();
      setTimeout(() => {
        router.push('/profile/consumer/orders');
      }, 3000);
    }
  } else {
    console.log('Invalid email or password');
  }
}
</script>

<!-- <script setup>


// console.log(state);
// console.log(user);

// // definePageMeta({
// //   middleware: ["checkLogin"],
// //   // or middleware: 'auth'
// // });

</script> -->
