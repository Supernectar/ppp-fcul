<template>
	<div class="h-screen">
		<Navbar />
		<form
			v-on:submit.prevent
			class="col-4 offset-4 bg-white rounded p-4"
		>
			<h2>Registration</h2>
			<div class="form-text">
				Please fill in this form to create an account
			</div>
			<hr />

			<div class="mb-3">
				<label
					for="exampleInputEmail1"
					class="form-label"
					>Email address</label
				>
				<input
					v-model="email"
					:class="calculateEmailClass"
					type="email"
					class="!border text-green-900 placeholder-green-700 text-sm rounded-lg block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<div :class="calculateEmailFeedbackClass">
					{{ calculateEmailFeedback }}
				</div>
			</div>

			<div class="mb-3">
				<label
					for="exampleInputPassword1"
					class="form-label"
					>Password</label
				>

				<input
					v-model="password"
					type="password"
					class="!border text-green-900 placeholder-green-700 text-sm rounded-lg block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
					:class="calculatePasswordClass"
					id="exampleInputPassword1"
				/>
				<div :class="calculatePasswordFeedbackClass">
					{{ calculatePasswordFeedback }}
				</div>
			</div>

			<div class="flex space-x-2 justify-center">
				<NuxtLink
					to="/register/configure"
					class="w-100 my-4"
				>
					<input
						type="submit"
						@click="RegisterUser"
						class="inline-block w-100 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						name=""
						value="Continue"
					/>
				</NuxtLink>
			</div>

			<hr />
			<button
				@click="RegisterGoogle"
				type="button"
				class="sign-up-with-google-btn w-100"
			>
				Sign up with Google
			</button>

			<!-- <div class="form-group">
        <input type="submit" value="Create Account" @click="RegisterUser">
        <button v-on:click.stop.prevent="">Create Account</button>
        <button @click="()">TESTAR GOOGLE REGISTER</button>
      </div> -->
			<!-- 
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>

        <input
          v-model="firstName.value"
          :class="validateFirstName"
          type="text"
          class="form-control"
          id="firstName"
        />
        <div :class="firstName.isValid ? 'valid-feedback' : 'invalid-feedback'">
          {{ firstName.feedback }}
        </div>
      </div>

      <p>{{ lastName }}</p>
      <p>{{ validLastName }}</p>

      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>

        <input
          v-model="lastName"
          :class="validLastName ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="lastName"
        />
      </div>
        

      
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Phone number</label>

        <input
          v-model="phonenumber"
          :class="validPhone() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="phonenumber"
        />
        <div class="invalid-feedback">Phone number must have 9 numbers!</div>
      </div>
      
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Validate Password</label>

        <input
          v-model="confirmPassword"
          :class="validConfirmPassword() ? 'is-valid' : 'is-invalid'"
          type="password"
          class="form-control"
          id="confirmPassword"
        />
        <div class="invalid-feedback">Password must match!</div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Country</label>
        <select class="form-select" aria-label="Default select example">
          <option v-for="country in countries" :key="country.name">
            {{ country.name }}
          </option>
        </select>
        <input
          v-model="country"
          :class="validCountry() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="country"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">City</label>

        <input
          v-model="city"
          :class="validCity() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="city"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Postal code</label>

        <input
          v-model="pcode"
          :class="validPostCode() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="pcode"
        />
        <div class="invalid-feedback">Postal code must be valid!</div>
      </div>
      <div class="mb-3">
        <label for="nif" class="form-label">NIF</label>

        <input
          v-model="nif"
          :class="validNIF() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="nif"
        />
        <div class="invalid-feedback">NIF must have 9 numbers!</div>
      </div>

      <div v-if="type == 'consumer'">
        <p>1</p>
      </div>
      <div v-if="type == 'supplier'">
        <div class="mb-3">
          <label for="institution_name" class="form-label">Institution name</label>

          <input
            v-model="inst_name"
            type="text"
            class="form-control"
            id="institution_name"
          />
        </div>
      </div> -->
		</form>
	</div>
</template>

<script>
export default {
	name: 'RegisterView',
	data() {
		return {
			type: 'consumer',
			email: null,
			password: null,
			firstName: {
				value: null,
				isValid: null,
				feedback: null
			},
			lastName: null,
			username: 'test',
			country: '',
			nif: '',
			address: '',
			phonenumber: '',
			countries: [],
			confirmPassword: '',
			pcode: ''
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
		}
	},
	methods: {
    }
};
</script>

<style>
</style>
