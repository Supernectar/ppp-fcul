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
                    <td>Rua abc, baby baby lote 89, 2º direito</td>
                  </tr>
                  <tr>
                    <td><LocationMarkerIcon class="w-5 h-5" /></td>
                    <td>Rua hello how is you, baby baby lote 89, 2º direito</td>
                  </tr>
                </tbody>
              </table>

              <button class="p-1 rounded border bg-blue-100">
                Register new address
              </button>
            </div>
          </div>
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
                :placeholder="user.name"
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
                :placeholder="user.username"
              />
              <div :class="calculateAddressFeedbackClass">
                {{ calculateAddressFeedback }}
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputAddress1" class="form-label"
                >Address</label
              >

              <input
                id="exampleInputAddress1"
                v-model="address"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="calculateAddressClass"
                placeholder="address"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputZipCode" class="form-label"
                >Zip-Code</label
              >
              <input
                id="exampleInputZipCode"
                v-model="zipCode"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="1234-123"
                pattern="\d{4}-?(\d{3})?"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">E-mail</label>

              <input
                id="exampleInputEmail1"
                v-model="email"
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :placeholder="user.email"
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
                :placeholder="user.phone"
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
                :placeholder="user.nif"
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
    <Footer />
  </div>
</template>

<script>
import { LocationMarkerIcon } from '@heroicons/vue/outline/index.js';
export default {
  name: 'ProfileView',
  data() {
    return {
      user: {},
      username: '',
      email: '',
      name: '',
      address: '',
      phone: '',
      credit_card: null,
      nif: '',
      password: ''
    };
  },
  async mounted() {
    const user = useUser();
    const result = await $fetch(`/api/users?email=${user.data.email}`);
    this.user = result.data.items[0];
    // this.name =
  },
  methods: {
    deleteAcc() {
      fetch(`api/users/${this.user._id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
    },
    async updateInfo() {
      await fetch(`api/users/${this.user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username === '' ? this.user.username : this.username,
          email: this.email === '' ? this.user.email : this.email,
          name: this.name === '' ? this.user.name : this.name,
          address: {
            street: this.address === '' ? this.user.address : this.address
          },
          phone: this.phone === '' ? this.user.phone : this.phone,
          nif: this.nif === '' ? this.user.nif : this.nif,
          password: this.password === '' ? this.user.password : this.password
        })
      });
    }
  }
};
</script>
