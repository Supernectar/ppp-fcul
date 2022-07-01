import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
export default defineStore('orderTransport', {
  state: () => ({
    orderTransport: useLocalStorage('orderTransport', ['aaa'])
  }),
  getters: {
    getTransport: (state) => state.orderTransport
  }
});
