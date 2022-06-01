import { watch } from 'vue';
import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUser = defineStore('user', () => {
	const state = ref(
		useLocalStorage('VueUseLocalStorage', {
			// all these properties will have their type inferred automatically
			storeId: 0,
			userId: 0,
			username: '',
			email: '',
			password: ''
		})
	);
});
