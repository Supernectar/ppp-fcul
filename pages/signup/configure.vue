<template>
	<div>
		<Navbar />
		<div class="bg-white py-2 m-6 rounded flex">
			<div class="m-auto">
				<form class="col" @submit.prevent>
					<h2>Setup your account</h2>
					<hr />
					<div class="form-text">
						Add some basic info to your
						account
					</div>
					<div
						class="form-check form-check-inline"
					>
						<input
							id="inlineRadio1"
							v-model="type"
							class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="radio"
							name="type"
							value="consumer"
							checked
						/>
						<label
							class="form-check-label inline-block text-gray-800"
							for="inlineRadio10"
							>Consumer</label
						>
					</div>
					<div
						class="form-check form-check-inline"
					>
						<input
							id="inlineRadio2"
							v-model="type"
							class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="radio"
							name="type"
							value="supplier"
						/>
						<label
							class="form-check-label inline-block text-gray-800"
							for="inlineRadio20"
							>Supplier</label
						>
					</div>
					<div
						class="form-check form-check-inline"
					>
						<input
							id="inlineRadio3"
							v-model="type"
							class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="radio"
							name="type"
							value="transporter"
						/>
						<label
							class="form-check-label inline-block text-gray-800"
							for="inlineRadio30"
							>Transporter</label
						>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="mb-6">
							<label
								for="firstName"
								class="form-label"
								>First
								Name</label
							>

							<input
								id="firstName"
								v-model="
									firstName
								"
								type="text"
								class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								aria-describedby="emailHelp123"
							/>
						</div>
						<div class="mb-6">
							<label
								for="lastName"
								class="form-label"
								>Last
								Name</label
							>

							<input
								id="lastName"
								v-model="
									lastName
								"
								type="text"
								class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								aria-describedby="emailHelp124"
							/>
						</div>
					</div>
					<div class="mb-3">
						<label
							for="street"
							class="form-label"
							>Street</label
						>

						<input
							id="street"
							v-model="street"
							type="text"
							class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							required
						/>
					</div>

					<div class="mb-3">
						<label
							for="country"
							class="form-label"
							>Country</label
						>

						<input
							id="country"
							v-model="country"
							type="text"
							class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							required
						/>
					</div>

					<div class="mb-3">
						<label
							for="city"
							class="form-label"
							>City</label
						>

						<input
							id="city"
							v-model="city"
							type="text"
							class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							required
						/>
					</div>

					<div class="mb-3">
						<label
							for="exampleInputZipCode"
							class="form-label"
							>Zip-Code</label
						>
						<input
							id="exampleInputZipCode"
							v-model="zipCode"
							type="text"
							class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							pattern="\d{4}-?(\d{3})?"
							required
						/>
					</div>

					<div class="mb-3">
						<label
							for="exampleInputPhone1"
							class="form-label"
							>Phone</label
						>

						<input
							id="exampleInputPhone1"
							v-model="phone"
							type="text"
							class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							required
						/>
					</div>

					<div class="mb-3">
						<label
							for="exampleInputNIF1"
							class="form-label"
							>NIF</label
						>

						<input
							id="exampleInputNIF1"
							v-model="nif"
							type="text"
							class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							required
						/>
					</div>

					<div
						class="flex space-x-2 justify-center"
					>
						<input
							type="submit"
							class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							name=""
							value="Continue"
							required
							@click="updateInfo"
						/>
					</div>
				</form>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import { useUser } from '/store/user';

export default {
	name: 'ProfileView',
	data() {
		return {
			user: {},
			type: 'consumer',
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
		const store = useUser();
		const user = store;
		const result = await $fetch(
			`/api/users?email=${user.user.email}`
		);
		this.user = result.data.items[0];
		// this.name =
	},
	methods: {
		async updateInfo() {
			const router = useRouter();
			const store = useUser();
			const res = await fetch(`/api/users/${this.user._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name:
						this.firstName +
						' ' +
						this.lastName,
					address: {
						street: this.street,
						country: this.country,
						city: this.city,
						zipCode: this.zipCode
					},
					phone: this.phone,
					nif: this.nif
				})
			});
			const res2 = await res.json();

			console.log(res2);

			store.$patch({
				user: {
					type: this.type
				}
			});

			router.push('/profile/consumer/orders');
		}
	}
};
</script>
