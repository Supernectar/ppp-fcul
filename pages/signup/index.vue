<template>
	<div>
		<Navbar />
		<div class="flex h-[calc(100vh-4rem)] items-center">
			<div class="w-100 m-auto bg-white rounded p-4">
				<h1 class="text-center text-3xl font-semibold">
					Register
				</h1>
				<hr class="my-2" />
				<FormKit type="form" @submit="RegisterUser">
					<FormKit
						label="Email address"
						v-model="email"
						type="email"
						help="What email should we use?"
						validation="required|email|emailIsRegistered"
						:validation-rules="{
							emailIsRegistered
						}"
						:validation-messages="{
							emailIsRegistered:
								'This email is already registered'
						}"
						outer-class="mb-4"
						label-class="form-label inline-block mb-2 text-gray-700"
						input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						help-class="text-sm text-gray-500 mt-1"
						message-class="mt-1 text-sm text-red-600"
					/>

					<FormKit
						label="Password"
						v-model="password"
						type="password"
						help="Choose an account password"
						validation="required|length:6|matches:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/"
						:validation-messages="{
							matches: 'Password must contain at least 1 number, 1 uppercase character, 1 lowercase character, 1 special character'
						}"
						outer-class="mb-4"
						label-class="form-label inline-block mb-2 text-gray-700"
						input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						help-class="text-sm text-gray-500 mt-1"
						message-class="mt-1 text-sm text-red-600"
					/>

					<FormKit
						v-model="terms"
						type="checkbox"
						help="Do you agree to our terms of service?"
						name="terms"
						validation="required|accepted"
						outer-class="mb-4"
						label-class="form-label inline-block text-gray-700"
						input-class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
						help-class="text-sm text-gray-500 mt-1"
						message-class="mt-1 text-sm text-red-600"
					>
						<template #label="context">
							I agree with the
							<a
								href="terms-and-conditions.pdf"
								download="clearchoice_terms_and_conditions"
								class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
								>terms of
								service</a
							>
						</template>
					</FormKit>

					<template #submit="context">
						<FormKit
							type="submit"
							label="Continue"
							input-class="w-full  ml-auto px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						/>
					</template>
				</FormKit>
				<div class="relative flex py-2 items-center">
					<div
						class="flex-grow border-t border-gray-200"
					></div>
					<span class="flex-shrink mx-4">or</span>
					<div
						class="flex-grow border-t border-gray-200"
					></div>
				</div>
				<FormKit
					type="button"
					label="Register with Google"
					input-class="w-full  ml-auto px-2 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
				/>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>
import { useUser } from '~/store/user';
const router = useRouter();
let email = ref('');
let password = ref('');
let terms = ref('');

async function emailIsRegistered(node) {
	const res = await $fetch(`/api/users?email=${node.value}`);
	return res.data.items.length <= 0;
}

async function RegisterUser() {
	let username = await generateUsername();
	const postReq = await fetch('/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},

		body: JSON.stringify({
			username: username,
			email: email.value,
			password: password.value
		})
	});
	console.log(postReq);
	console.log(password);
	console.log(password.value);
	const res2 = await $fetch('api/authenticate', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: email.value,
			password: password.value
		})
	});

	const res3 = await fetch(
		`/api/users?email=${email.value}&password=${password.value}`
	);
	const resJson = await res3.json();
	console.log(resJson);

	const store = useUser();
	store.$patch({
		user: {
			userId: resJson.data.items[0]._id,
			username: username,
			email: email.value,
			password: password.value
		}
	});
	//console.log(store.user.userId);

	alert('User was registered successfully');

	router.push('/signup/configure');
}

async function generateUsername() {
	const username = 'random-user-' + Math.floor(Math.random() * 500);
	const users = await $fetch('/api/users?username=' + username);
	if (users.data.items.length <= 0) return username;
	return generateUsername();
}
</script>
