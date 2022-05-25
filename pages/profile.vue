<template>
  <Navbar />

  <div class="block m-auto p-6 rounded-lg shadow-lg bg-white max-w-md">
    <div class="container px-6 py-12 h-full">
      <div class="md:w-6/12 lg:w-3/12 mb-12 md:mb-0">
        <div>
          <img src="/img/logo.png" width="70" class="rounded-circle border" alt="" />
          <p>@username</p>
          <hr />
        </div>
        <div class="px-1 py-1">
          <ul>
            <li>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                Settings
              </button>
            </li>
            <li>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                My consumer info
              </button>
            </li>
            <li>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                My transporter info
              </button>
            </li>
            <li>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                My supplier info
              </button>
            </li>
            <li>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <tIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--
        <div class="flex justify-center">
          <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            <button aria-current="true" type="button"
              class="text-left px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white cursor-pointer">
              Basic Info
            </button>
            <button type="button"
              class="text-left px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer">
              A second link item
            </button>
            <button type="button"
              class="text-left px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer">
              A thi/button>button type="button" class="text-left px-6 py-2 border-b
              border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500
              focus:outline A fourth link item
            </button>
          </div>
        </div>-->
    <form v-on:submit.prevent class="col">
      <h2>Your personal information:</h2>
      <br />
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Name</label>

        <input v-model="name" type="text" class="form-control" :class="calculateNameClass" id="exampleInputName1" />
        <div :class="calculateNameFeedbackClass">
          {{ calculateNameFeedback }}
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputAddress1" class="form-label">Address</label>

        <input v-model="address" type="text" class="form-control" :class="calculateAddressClass"
          id="exampleInputAddress1" />
        <div :class="calculateAddressFeedbackClass">
          {{ calculateAddressFeedback }}
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputPhone1" class="form-label">Phone</label>

        <input v-model="phone" type="text" class="form-control" :class="calculatePhoneClass" id="exampleInputPhone1" />
        <div :class="calculatePhoneFeedbackClass">
          {{ calculatePhoneFeedback }}
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputNIF1" class="form-label">NIF</label>

        <input v-model="nif" type="text" class="form-control" :class="calculateNIFClass" id="exampleInputNIF1" />
        <div :class="calculateNIFFeedbackClass">
          {{ calculateNIFFeedback }}
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>

        <input v-model="password" type="password" class="form-control" :class="calculatePasswordClass"
          id="exampleInputPassword1" />
        <div :class="calculatePasswordFeedbackClass">
          {{ calculatePasswordFeedback }}
        </div>
      </div>

      <div class="flex space-x-2 justify-center">
        <input type="submit" @click="updateInfo"
          class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          name="" value="Update account" />
      </div>
      <hr />
      <br />
      <p class="flex space-x-2 justify-center">
        You have 60 days to recover your account, after that your account will be
        permanently deleted.
      </p>
      <div class="flex space-x-2 justify-center">
        <input type="submit" @click="deleteAcc"
          class="inline-block my-4 w-40 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
          name="" value="Delete account" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data() {
    return {
      name: null,
      address: null,
      phone: null,
      credit_card: null,
      nif: null,
      password: null,
    };
  },
  computed: {
    calculateNameClass() {
      if (this.name === null) return;
      return this.isValidName
        ? " bg-green-50 border-green-500"
        : " bg-red-50 border-red-500";
    },
    calculateNameFeedbackClass() {
      if (this.name === null) return;
      return this.isValidName ? " text-green-500" : "text-red-500";
    },
    calculateNameFeedback() {
      if (this.name === null) return;
      if (this.name.length < 3) return "Must have at least 3 characters";
      return "Looking good";
    },
    isValidName() {
      if (this.name === null) return;
      if (this.name.length < 3) return false;
      return true;
    },
    calculatePasswordClass() {
      if (this.password === null) return;
      return this.isValidPassword
        ? " bg-green-50 border-green-500"
        : " bg-red-50 border-red-500";
    },
    calculatePasswordFeedbackClass() {
      if (this.password === null) return;
      return this.isValidPassword ? " text-green-500" : "text-red-500";
    },
    calculatePasswordFeedback() {
      if (this.password === null) return;
      if (this.password.length < 6) return "Must be at least 6 characters";
      return "Looking good";
    },
    isValidPassword() {
      if (this.password === null) return;
      if (this.password.length < 6) return false;
      return true;
    },
    calculateAddressClass() {
      if (this.address === null) return;
      return this.isValidAddress
        ? " bg-green-50 border-green-500"
        : " bg-red-50 border-red-500";
    },
    calculateAddressFeedbackClass() {
      if (this.address === null) return;
      return this.isValidAddress ? " text-green-500" : "text-red-500";
    },
    calculateAddressFeedback() {
      if (this.address === null) return;
      if (this.address.length < 7) return "Must have at least 7 characters";
      return "Looking good";
    },
    isValidAddress() {
      if (this.address === null) return;
      if (this.address.length < 7) return false;
      return true;
    },
    calculatePhoneClass() {
      if (this.phone === null) return;
      return this.isValidPhone
        ? " bg-green-50 border-green-500"
        : " bg-red-50 border-red-500";
    },
    calculatePhoneFeedbackClass() {
      if (this.phone === null) return;
      return this.isValidPhone ? " text-green-500" : "text-red-500";
    },
    calculatePhoneFeedback() {
      if (this.phone === null) return;
      if (this.phone.length != 9) return "Must have 9 numbers";
      return "Looking good";
    },
    isValidPhone() {
      if (this.phone === null) return;
      if (this.phone.length != 9) return false;
      return true;
    },
    calculateNIFClass() {
      if (this.nif === null) return;
      return this.isValidNIF
        ? " bg-green-50 border-green-500"
        : " bg-red-50 border-red-500";
    },
    calculateNIFFeedbackClass() {
      if (this.nif === null) return;
      return this.isValidNIF ? " text-green-500" : "text-red-500";
    },
    calculateNIFFeedback() {
      if (this.nif === null) return;
      if (this.nif.length != 9) return "Must have 9 numbers";
      return "Looking good";
    },
    isValidNIF() {
      if (this.nif === null) return;
      if (this.nif.length != 9) return false;
      return true;
    },
  },
  mounted() {
    // this.name =
  },
  methods: {
    deleteAcc() {
      fetch(`api/users/${localStorage.getItem("id")}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    },
  },
  async updateInfo() {
    await fetch(`api/users/${localStorage.getItem("id")}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.name,
        address: this.address,
        phone: this.phone,
        credit_card: this.credit_card,
        nif: this.nif,
        password: this.password,
      }),
    });
  },
};
</script>

<style>
</style>
