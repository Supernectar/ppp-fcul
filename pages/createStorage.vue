<template>
	<div>
		<Navbar />
		<div>
			<!-- <div label="Select Storages to add product:">
        <input
          id="checkbox-group-1"
          name="flavour-1"
        />
      </div> -->
			<div>
				<input
					v-model="name"
					class="form-label inline-block mb-2 text-gray-700 text-xl"
					placeholder="Storage name"
				/>
			</div>

			<div>
				<input
					v-model="location"
					class="form-label inline-block mb-2 text-gray-700 text-xl"
					placeholder="location"
				/>
			</div>
			<!-- <input v-model="visibility" placeholder="private?" /> -->
			<button
				class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
				@click="createStorage"
			>
				ADD
			</button>
		</div>
	</div>
</template>

<script setup>
import { useUser } from '~/store/user';
const store = useUser();

const name = ref('');
const location = ref('');
// let visibility = ref('');

async function createStorage() {
	// console.log(localStorage.getItem('token'));
	console.log(name.value);
	console.log(location.value);
	const res = await $fetch(`/api/users/${store.user.userId}/storages`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},

		body: JSON.stringify({
			name: name.value,
			// popularity: 0,
			location: location.value
			// visibility: visibility.value
		})
	});
	console.log(res);
}
</script>

<style></style>
