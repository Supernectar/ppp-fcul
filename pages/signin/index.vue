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
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              input-class="w-full  ml-auto px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
          input-class="w-full  ml-auto px-2 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        />
      </div>
    </div>
    <!-- Modal -->
    <div
      id="exampleModal"
      class="modal fade fixed top-60 left-120 hidden w-100 h-100 outline-none overflow-x-hidden overflow-y-auto"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          >
            <h5
              id="exampleModalLabel"
              class="text-xl font-medium leading-normal text-gray-800"
            >
              Login
            </h5>
            <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body relative p-4">
            User was logged successfully.
          </div>
          <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <button
              type="button"
              class="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const user = useUser();

const router = useRouter();
const email = ref('');
const password = ref('');

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
      router.push('/profile/consumer/orders');
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
