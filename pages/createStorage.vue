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

			<input v-model="name" placeholder="Storage name" />
			<input v-model="location" placeholder="location" />
			<input v-model="visibility" placeholder="private?" />
			<button @click="createStorage">ADD</button>
		</div>
	</div>
</template>

<script setup>
import { useUser } from '~/store/user';
const store = useUser();

let name = ref('');
let location = ref('');
let visibility = ref('');

async function createStorage() {
	console.log(localStorage.getItem('token'));

	await fetch(`/api/storages`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},

		body: JSON.stringify({
			name: name.value,
			popularity: 0,
			location: location.value,
			visibility: visibility.value
		})
	});
}
</script>

<style></style>
