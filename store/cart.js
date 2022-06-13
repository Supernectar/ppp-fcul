import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useCart = defineStore('cart', {
  state: () => ({
    // all these properties will have their type inferred automatically
    cart: useLocalStorage('cart', [])
    // cart: []
    // {
    // 	product: {},
    // 	quantity: 0
    // }
  }),
  getters: {
    getCart: (state) => state.cart
  }
  // actions: {
  //   addCart(product, quantity) {
  //     this.cart.push({ product, quantity });
  //   }
  //   // removeTodo(index) {
  //   // 	this.todos.splice(index, 1);
  //   // }
  // }
});
