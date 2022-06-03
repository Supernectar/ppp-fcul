<template>
  <div>
    <Navbar />
    <div class="flex h-[calc(100vh-4rem)] items-center">
      <div class="w-100 m-auto bg-white rounded p-4">
        <form v-on:submit.prevent class="col">
          <h2>Setup your account</h2>
          <div class="form-text">Add some basic info to your account</div>

          <hr />
          <div class="flex justify-center">
            <div class="form-check form-check-inline">
              <input
                v-model="type"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="type"
                id="inlineRadio1"
                value="consumer"
                checked
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
                >Consumer</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="type"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="type"
                id="inlineRadio2"
                value="supplier"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >Supplier</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="type"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="type"
                id="inlineRadio3"
                value="transporter"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio30"
                >Transporter</label
              >
            </div>
          </div>
          <div class="mb-6">
            <label for="firstName" class="form-label">First Name</label>

            <input
              v-model="firstName"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp123"
              placeholder="First name"
              id="firstName"
            />
          </div>
          <div class="mb-6">
            <label for="lastName" class="form-label">Last Name</label>

            <input
              v-model="lastName"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="lastName"
              aria-describedby="emailHelp124"
              placeholder="Last name"
            />
          </div>
          <div class="mb-3">
            <label for="phonenumber" class="form-label">Phone number</label>

            <input
              v-model="phone"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="phonenumber"
              placeholder="Phone number"
            />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Street</label>

            <input
              v-model="street"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="street"
              placeholder="Street"
            />
          </div>
          <label for="address" class="form-label">Country</label>
          <select
            v-model="country"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="Africa">Africa</option>
            <option value="Paris">Paris</option>
            <option value="America">America</option>
          </select>
          <div class="mb-3">
            <label for="address" class="form-label">City</label>

            <input
              v-model="city"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="city"
              placeholder="City"
            />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Postal code</label>

            <input
              v-model="pcode"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="pcode"
              placeholder="Postal code"
            />
          </div>
          <div class="mb-3">
            <label for="nif" class="form-label">NIF</label>

            <input
              v-model="nif"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="nif"
              placeholder="NIF"
            />
          </div>
          <button
            type="submit"
            @click="updateInfo"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUser } from "/store/user";

export default {
  name: "RegisterView",
  data() {
    return {
      type: "consumer",
      firstName: "",
      lastName: "",
      phone: "",
      street: "",
      country: "",
      city: "",
      pcode: "",
      nif: "",
    };
  },
  async mounted() {
    const store = useUser();
    const user = store;
    let result = await $fetch(`/api/users?email=${user.user.email}`);
    this.user = result.data.items[0];
    // this.name =
  },
  computed: {},
  methods: {
    async updateInfo() {
      const res = await $fetch(`/api/users/${this.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.firstName + this.lastName,
          address: this.city,
          phone: this.phone === "" ? this.user.phone : this.phone,
          nif: this.nif === "" ? this.user.nif : this.nif,
        }),
      });

      const res2 = await res;
      console.log("rere");

      console.log(res2);

      store.$patch({
        user: {
          type: this.type,
        },
      });
    },
  },
};
</script>

<style></style>
