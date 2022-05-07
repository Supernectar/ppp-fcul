<template>
	<!-- pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" -->
	<div class="bg-success">
		<Navbar />
		<form class="col-6 offset-3 bg-white rounded px-2">
			<div class="form-check">
				<input
					v-model="type"
					class="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault1"
					value="consumer"
					checked
				/>
				<label
					class="form-check-label"
					for="flexRadioDefault1"
					>Consumer</label
				>
			</div>
			<div class="form-check">
				<input
					v-model="type"
					class="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault2"
					value="supplier"
				/>
				<label
					class="form-check-label"
					for="flexRadioDefault2"
				>
					Supplier
				</label>
			</div>
			<div class="form-check">
				<input
					v-model="type"
					class="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault3"
					value="transporter"
				/>
				<label
					class="form-check-label"
					for="flexRadioDefault3"
				>
					Transporter
				</label>
			</div>
			<div class="mb-3">
				<label for="firstName" class="form-label"
					>First Name</label
				>

				<input
					v-model="firstName"
					:class="
						validFirstName()
							? 'is-valid'
							: 'is-invalid'
					"
					type="text"
					class="form-control"
					id="firstName"
				/>
			</div>
			<div class="mb-3">
				<label for="lastName" class="form-label"
					>Last Name</label
				>

				<input
					v-model="lastName"
					:class="
						validLastName()
							? 'is-valid'
							: 'is-invalid'
					"
					type="text"
					class="form-control"
					id="lastName"
				/>
			</div>

			<div class="mb-3">
				<label
					for="exampleInputEmail1"
					class="form-label"
					>Email address</label
				>
				<input
					v-model="email"
					:class="
						validEmail()
							? 'is-valid'
							: 'is-invalid'
					"
					type="email"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<div class="invalid-feedback">
					Email must be valid!
				</div>
			</div>
			<div class="mb-3">
				<label for="phonenumber" class="form-label"
					>Phone number</label
				>

				<input
					v-model="phonenumber"
					:class="
						validPhone()
							? 'is-valid'
							: 'is-invalid'
					"
					type="text"
					class="form-control"
					id="phonenumber"
				/>
				<div class="invalid-feedback">
					Phone number must have 9 numbers!
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
					:class="
						validPassword()
							? 'is-valid'
							: 'is-invalid'
					"
					type="password"
					class="form-control"
					id="exampleInputPassword1"
				/>
				<div class="invalid-feedback">
					Password must be 7 character!
				</div>
			</div>
			<div class="mb-3">
				<label
					for="exampleInputPassword1"
					class="form-label"
					>Validate Password</label
				>

				<input
					v-model="confirmPassword"
					:class="
						validConfirmPassword()
							? 'is-valid'
							: 'is-invalid'
					"
					type="password"
					class="form-control"
					id="confirmPassword"
				/>
				<div class="invalid-feedback">
					Password must match!
				</div>
			</div>
			<div class="mb-3">
				<label for="address" class="form-label"
					>Country</label
				>
				<select
					class="form-select"
					aria-label="Default select example"
				>
					<option
						v-for="country in countries"
						:key="country.name"
					>
						{{ country.name }}
					</option>
				</select>
				<input
					v-model="country"
					:class="
						validCountry()
							? 'is-valid'
							: 'is-invalid'
					"
					type="text"
					class="form-control"
					id="country"
				/>
			</div>
			<div class="mb-3">
				<label for="address" class="form-label"
					>City</label
				>

				<input
					v-model="city"
					:class="
						validCity()
							? 'is-valid'
							: 'is-invalid'
					"
					type="text"
					class="form-control"
					id="city"
				/>
			</div>
			<div class="mb-3">
				<label for="address" class="form-label"
					>Postal code</label
				>

				<input
					v-model="pcode"
					:class="
						validPostCode()
							? 'is-valid'
							: 'is-invalid'
					"
					type="text"
					class="form-control"
					id="pcode"
				/>
				<div class="invalid-feedback">
					Postal code must be valid!
				</div>
			</div>
			<div class="mb-3">
				<label for="nif" class="form-label">NIF</label>

				<input
					v-model="nif"
					:class="
						validNIF()
							? 'is-valid'
							: 'is-invalid'
					"
					type="text"
					class="form-control"
					id="nif"
				/>
				<div class="invalid-feedback">
					NIF must have 9 numbers!
				</div>
			</div>

			<div v-if="type == 'consumer'">
				<p>1</p>
			</div>
			<div v-if="type == 'supplier'">
				<div class="mb-3">
					<label
						for="institution_name"
						class="form-label"
						>Institution name</label
					>

					<input
						v-model="inst_name"
						type="text"
						class="form-control"
						id="institution_name"
					/>
				</div>
			</div>
			<div v-if="type == 'transporter'">
				<p>3</p>
			</div>

			<br />
			<!-- Para apagar depois do Css -->
			<div class="form-group">
				<!-- <input type="submit" value="Create Account" @click="RegisterUser"> -->
				<button
					v-on:click.stop.prevent="RegisterUser()"
				>
					Create Account
				</button>
				<button @click="RegisterGoogle()">
					TESTAR GOOGLE REGISTER
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'RegisterView',
	data() {
		return {
			type: 'consumer',
			firstName: '',
			lastName: '',
			password: '',
			username: 'test',
			country: '',
			nif: '',
			email: '',
			address: '',
			phonenumber: '',
			countries: [],
			confirmPassword: '',
			pcode: ''
			// defaultName: 'okdo',
		};
	},
	mounted() {
		// this.generateUsername();
		// this.countries = fetch("https://restcountries.com/v2/all", {
		//   method: "GET",
		// });
	},
	methods: {
		validFirstName() {
			return this.firstName.length > 2;
		},
		validLastName() {
			return this.lastName.length > 2;
		},
		validPassword() {
			return this.password.length > 6;
		},
		validConfirmPassword() {
			return (
				this.password.length != 0 &&
				this.password.length ===
					this.confirmPassword.length
			);
		},
		validPhone() {
			return this.phonenumber.length === 9;
		},
		validNIF() {
			return this.nif.length === 9;
		},
		validCountry() {
			return true;
			// return this.nif.length === 9;
		},
		validCity() {
			return true;
			// return this.nif.length === 9;
		},
		validPostCode() {
			const re = /(.+){4}-(.+){3}/;
			return re.test(this.pcode);
		},

		validEmail() {
			/*const res = await fetch(
				`api/users?email=${this.email}`,

				{
					method: 'GET',
					headers: {
						'Content-Type':
							'application/json'
					}
				}
			);
			const res2 = await res.json();*/
			const re = /(.+)@(.+)\.(.+)/;
			return re.test(this.email);
		},
		RegisterGoogle() {
			const provider =
				new this.$fireModule.auth.GoogleAuthProvider();
			this.$fire.auth.signInWithPopup(provider);
		},

		generateUsername() {
			this.username =
				'random-user-' +
				Math.floor(Math.random() * 500);
		},

		async RegisterUser() {
			const res = await fetch(`api/users?${this.email}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});

			if (res.length > 0) {
				console.log('hi');
			}

			await fetch('api//users', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },

				body: JSON.stringify({
					username: this.username,
					email: this.email,
					password: this.password
				})
			});

			const res2 = await fetch('api//login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					// username: this.username,
					email: this.email,
					password: this.password
				})
			});

			const res3 = await res2.json();
			const error = 'User does not exist';
			if (res3 === 'Invalid username or password') {
				console.log(error);
			} else {
				localStorage.setItem('token', res3);
				//this.$router.push("dashboard");
			}
		}
	}
};
</script>

'''''''''''''''''' '''' ' '' '' '' '''''' '' '' '' '''' '' '' '''' '' '' '' ''
'' '' '' '' '' '' '' '' '' '' '' '' '' '' '' '''' '' '' '' '''' '' '' '''' '' ''
''
