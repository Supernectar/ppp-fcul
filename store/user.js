import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUser = defineStore('user', {
  state: () => ({
    // all these properties will have their type inferred automatically
    user: useLocalStorage('localStorageTest', {
      storeId: 0,
      userId: 0,
      username: '',
      email: '',
      password: '',
      type: '',
      consumerData: {
        wishlist: []
      }
    })
  })
});
