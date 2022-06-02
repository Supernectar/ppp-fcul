<template>
  <div>
    <Navbar />
    <div class="flex h-[calc(100vh-4rem)] items-center">
      <div class="w-100 m-auto bg-white rounded p-4">
        <h1 class="text-center text-3xl font-semibold">Login</h1>
        <hr class="my-2" />
        <FormKit type="form" @submit="login">
          <FormKit label="Email address" v-model="email" type="email" validation="required|email" outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1" message-class="mt-1 text-sm text-red-600" />

          <FormKit label="Password" v-model="password" type="password" validation="required" outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1" message-class="mt-1 text-sm text-red-600" />

          <template #submit>
            <FormKit type="submit" label="Continue"
              input-class="w-full  ml-auto px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" />
          </template>
        </FormKit>
        <div class="relative flex py-2 items-center">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-4">or</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div>
        <FormKit type="button" label="Sign in with Google"
          input-class="w-full  ml-auto px-2 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { useUser } from "~/store/user";
const store = useUser();
// console.log("LOCALSTORAGE");
// console.log(state);

// store.$patch(state);

// console.log("STORE");
// console.log(store);

const router = useRouter();
let email = ref("");
let password = ref("");

async function login() {
  const res = await fetch(`/api/users?email=${email.value}&password=${password.value}`);
  const resJson = await res.json();
  console.log(resJson);

  if (resJson.data.items.length === 1) {
    const res = await fetch(`/api/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
    });
    const res2 = await res.json();
    if (res2.error === "Invalid username or password") {
      console.log("User does not exist");
      alert("Invalid username or password");
    } else {
      store.$patch({
        user: {
          userId: resJson.data.items[0]._id,
          username: resJson.data.items[0].username,
          email: resJson.data.items[0].email,
          password: resJson.data.items[0].password,
        },
      });
      console.log(store.user.username);
      //localStorage.setItem("token", res2.data.items);
      alert("User was successfully logged in");
      router.push("/orders");
    }
  } else {
    alert("Invalid email or password");
  }
}
</script>

<!-- <script setup>


// console.log(state);
// console.log(store);

// // definePageMeta({
// //   middleware: ["checkLogin"],
// //   // or middleware: 'auth'
// // });

</script> -->
