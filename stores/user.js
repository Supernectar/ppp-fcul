import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export default defineStore('user', {
  state: () => ({
    data: useLocalStorage('userData', {
      type: 'Consumer'
      // other properties read from database, when user logs in
    })
  }),
  getters: {
    isLoggedIn: (state) => '_id' in state.data
  },
  actions: {
    reset() {
      this.data = {
        type: ''
      };
    }
  }
});
