<template>
  <div>
    <Navbar />
    <div class="bg-white py-2 m-6 rounded flex">
      <div class="border-r px-4">
        <img src="/img/logo.png" width="70" class="rounded-circle border" alt="" />
        <p>{{ user.username }}</p>
        <hr />
        <ul class="py-2"></ul>

        <button
          class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
        >
          <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
          Settings
        </button>

        <button
          class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
        >
          <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
          My consumer info
        </button>

        <button
          class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
        >
          <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
          My transporter info
        </button>

        <button
          class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
        >
          <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
          My supplier info
        </button>

        <button
          class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
        >
          <!-- <tIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
          Sign out
        </button>

        <!--</ul>-->
      </div>

      <div class="m-auto">
        <form v-on:submit.prevent class="col">
          <h2>Your personal information:</h2>
          <br />
          <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputName1"
              :placeholder="user.name"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputAddress1" class="form-label">Username</label>

            <input
              v-model="username"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputAddress1"
              :placeholder="user.username"
            />
            <div :class="calculateAddressFeedbackClass">
              {{ calculateAddressFeedback }}
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputAddress1" class="form-label">Address</label>

            <input
              v-model="address"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="calculateAddressClass"
              id="exampleInputAddress1"
              placeholder="address"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">E-mail</label>

            <input
              v-model="email"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              :placeholder="user.email"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPhone1" class="form-label">Phone</label>

            <input
              v-model="phone"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="calculatePhoneClass"
              id="exampleInputPhone1"
              :placeholder="user.phone"
            />
            <div :class="calculatePhoneFeedbackClass">
              {{ calculatePhoneFeedback }}
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputNIF1" class="form-label">NIF</label>

            <input
              v-model="nif"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="calculateNIFClass"
              id="exampleInputNIF1"
              :placeholder="user.nif"
            />
            <div :class="calculateNIFFeedbackClass">
              {{ calculateNIFFeedback }}
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>

            <input
              v-model="password"
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="calculatePasswordClass"
              id="exampleInputPassword1"
              placeholder="*********"
            />
            <div :class="calculatePasswordFeedbackClass">
              {{ calculatePasswordFeedback }}
            </div>
          </div>

          <div class="flex space-x-2 justify-center">
            <input
              type="submit"
              @click="updateInfo"
              class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              name=""
              value="Update account"
            />
          </div>
          <hr />
          <br />
          <p class="flex space-x-2 justify-center">
            You have 60 days to recover your account, after that your account will be
            permanently deleted.
          </p>
          <div class="flex space-x-2 justify-center">
            <input
              type="submit"
              @click="deleteAcc"
              class="inline-block my-4 w-40 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
              name=""
              value="Delete account"
            />
          </div>
        </form>
      </div>
    </div>
    <pre>
    {{ user }}
    </pre>
    <Footer></Footer>
  </div>
</template>

<script>
import { useUser } from "/store/user";

export default {
  name: "ProfileView",
  data() {
    return {
      user: {},
      name: null,
      address: null,
      phone: null,
      credit_card: null,
      nif: null,
      password: null,
    };
  },
  async mounted() {
    const store = useUser();
    const user = store;
    let result = await $fetch(`/api/users?email=${user.email}`);
    this.user = result.data.items[0];
    // this.name =
  },
  methods: {
    deleteAcc() {
      fetch(`api/users/${this.user._id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    },
    async updateInfo() {
      console.log(this.name);
      const res = await fetch(`api/users/${this.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          address: this.address,
          phone: this.phone,
          credit_card: this.credit_card,
          nif: this.nif,
          password: this.password,
        }),
      });
      const res2 = await res.json();

      console.log(res2);
    },
  },
};
</script>
