import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
export default defineStore('orderTransport', {
  state: () => ({
    orderTransport: useLocalStorage('orderTransport', [])
  }),
  getters: {
    getTransport: (state) => state.orderTransport
  }
});
