<template>
  <div class="bg-blue-200">
    <Navbar />
    <div class="flex items-center m-6">
      <div class="w-130 m-auto bg-white rounded p-6">
        <h3 class="text-center text-3xl font-semibold">Setup your account</h3>
        <hr class="my-2" />
        <FormKit type="form" @submit="updateInfo">
          <div class="form-text">Select your user type</div>
          <div class="flex justify-center">
            <div class="form-check form-check-inline">
              <input
                id="inlineRadio1"
                v-model="type"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                value="Consumer"
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
                id="inlineRadio2"
                v-model="type"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                value="Supplier"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >Supplier</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                id="inlineRadio3"
                v-model="type"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                value="Transporter"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio30"
                >Transporter</label
              >
            </div>
          </div>
          <FormKit
            v-model="firstName"
            label="First name"
            type="text"
            validation="required|length:3"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

          <FormKit
            v-model="lastName"
            label="Last name"
            type="text"
            validation="required|length:3"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

          <FormKit
            v-model="street"
            label="Street"
            type="text"
            validation="required|length:6"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

          <FormKit
            v-model="country"
            label="Country"
            type="select"
            placeholder="Choose a country"
            :options="countries"
            validation="required"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

          <FormKit
            v-model="city"
            label="City"
            type="text"
            validation="required|length:4"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

          <FormKit
            v-model="zipCode"
            label="Zip Code"
            type="text"
            validation="required|matches:/^[0-9]{4}-[0-9]{3}$/"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

          <FormKit
            v-model="phone"
            label="Phone number"
            type="text"
            validation="required|length:9"
            outer-class="mb-4"
            label-class="form-label inline-block mb-2 text-gray-700"
            input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            help-class="text-sm text-gray-500 mt-1"
            message-class="mt-1 text-sm text-red-600"
          />

          <FormKit
            v-model="nif"
            label="NIF"
            type="text"
            validation="required|length:9"
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
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      user: {},
      countries: [],
      type: 'Consumer',
      firstName: '',
      lastName: '',
      street: '',
      country: '',
      city: '',
      zipCode: '',
      phone: '',
      nif: ''
    };
  },
  async mounted() {
    const user = useUser();
    const names = [];
    const result = await $fetch(`/api/users?email=${user.data.email}`);
    console.log(result);
    this.user = result[0];
    const result2 = await $fetch(`https://restcountries.com/v3.1/all`);
    for (let i = 0; i < result2.length; i++) {
      names.push(result2[i].name.common);
    }
    names.sort((a, b) => a.localeCompare(b));
    this.countries = toRaw(names);
  },
  methods: {
    async updateInfo() {
      const router = useRouter();
      const user = useUser();
      await $fetch(`/api/users/${this.user._id}`, {
        method: 'PUT',
        body: {
          name: this.firstName + ' ' + this.lastName,
          address: {
            street: this.street,
            country: this.country,
            city: this.city,
            zipCode: this.zipCode
          },
          phone: this.phone,
          nif: this.nif
        }
      });

      const userdb = await $fetch(`/api/users/${user.data._id}`);

      user.$patch({
        data: userdb
      });

      user.$patch({
        data: {
          type: this.type
        }
      });

      router.push('/profile');
    }
  }
};
</script>
