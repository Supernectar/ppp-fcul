import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
export default defineStore('orderAddress', {
  state: () => ({
    orderAddress: useLocalStorage('orderAddress', [])
  }),
  getters: {
    getAddress: (state) => state.orderAddress
  }
});
