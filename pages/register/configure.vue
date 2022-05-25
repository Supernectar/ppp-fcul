<template>
  <div class="h-screen">
    <Navbar />
    <div class="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white">
        <form>
          <h2>Setup your account</h2>
          <div class="form-text">Add some basic info to your account</div>

          <hr />
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <label for="firstName" class="form-label">First Name</label>

              <input v-model="firstName" type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp123" placeholder="First name" id="firstName" />
            </div>
            <div class="form-group mb-6">
              <label for="lastName" class="form-label">Last Name</label>

              <input v-model="lastName" type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="lastName" aria-describedby="emailHelp124" placeholder="Last name" />
            </div>
          </div>

          <!-- <div class="form-group form-check mb-6">
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck1"
            />
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck1"
              >Check me out</label
            >
          </div> -->
          <button type="submit"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
    <form v-on:submit.prevent class="col-4 offset-4 bg-white rounded p-4">
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Phone number</label>

        <input v-model="phonenumber" type="text" class="form-control" id="phonenumber" />
      </div>

      <label for="address" class="form-label">Country</label>
      <select class="form-select" aria-label="Default select example">
        <!-- <option v-for="country in countries" :key="country.name">
            {{ country.name }}
          </option> -->
        <option value="1">Africa</option>
        <option value="1">Paris</option>
        <option value="1">America</option>
      </select>
      <div class="mb-3">
        <label for="address" class="form-label">City</label>

        <input v-model="city" type="text" class="form-control" id="city" />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Postal code</label>

        <input v-model="pcode" type="text" class="form-control" id="pcode" />
      </div>
      <div class="mb-3">
        <label for="nif" class="form-label">NIF</label>

        <input v-model="nif" type="text" class="form-control" id="nif" />
      </div>

      <div v-if="type == 'consumer'">
        <p>1</p>
      </div>
      <div v-if="type == 'supplier'">
        <div class="mb-3">
          <label for="institution_name" class="form-label">Institution name</label>

          <input v-model="inst_name" type="text" class="form-control" id="institution_name" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      type: "consumer",
      email: null,
      password: null,
      firstName: "",
      lastName: null,
      username: "test",
      country: "",
      nif: "",
      address: "",
      phonenumber: "",
      countries: [],
      confirmPassword: "",
      pcode: "",
      // defaultName: 'okdo',
    };
  },
  computed: {
    // validateFirstName() {
    //   if (this.firstName.value === null) return;

    //   this.firstName.isValid = true;
    //   this.firstName.feedback = "Looking good";

    //   if (this.firstName.value.length < 2) {
    //     this.firstName.isValid = false;
    //     this.firstName.feedback = ;
    //     return "is-invalid";
    //   }

    //   if (this.firstName.value.includes("e")) {
    //     this.firstName.isValid = false;
    //     this.firstName.feedback = ;
    //     return "is-invalid";
    //   }

    //   return "is-valid";
    // },
    // validateEmail() {
    //   if (this.email.value === null) return;

    //   this.email.isValid = true;
    //   this.email.feedback = ;

    //   if (this.email.value.length < 2) {
    //     this.email.isValid = false;
    //     this.email.feedback = "Must be at least 2 characters";
    //     return "is-invalid";
    //   }

    //   if (this.email.value.includes("e")) {
    //     this.email.isValid = false;
    //     this.email.feedback = "Cannot contain the letter 'e'";
    //     return "is-invalid";
    //   }

    //   return "is-valid";
    // },
    validLastName() {
      if (this.lastName === null) return;
      if (this.lastName.length < 2) {
        return false;
      }
      return true;
    },
  },
  methods: {},
};
</script>

<style>
</style>
