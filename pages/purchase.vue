<template>
  <div>
    <Navbar />
    <header>Carrinho</header>
    <div class="rounded-lg shadow hidden md:block mx-10 m-4">
      <table v-if="cart.length != 0" class="m-auto">
        <thead class="bg-gray-500 border-gray-500">
          <tr>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">&nbsp;</th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Product</th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Quantity</th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">Price</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300 text-center">
          <tr
            v-for="(cartItem, index) in cart"
            :id="cartItem.product"
            :key="index"
            class="bg-white"
          >
            <td class="py-2 text-sm text-gray-700 whitespace-nowrap text-center">
              <img src="/img/627.png" class="h-16 rounded-lg border" />
            </td>
            <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ myItems[index].name }}
              <br />
              {{ myProducts[index].supplier.username }}
            </td>

            <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ cartItem.quantity }}
            </td>
            <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ myProducts[index].price * cartItem.quantity }}€
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr class="p-2">
            <td class=""></td>
            <td></td>

            <td class="text-sm text-gray-700 whitespace-nowrap text-center">Total:</td>
            <td class="text-sm text-gray-700 whitespace-nowrap text-center">
              {{ total }}€
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/outline";
import { useCart } from "~/store/cart";
const store = useCart();
const cart = ref(store.getCart);
const myProducts = ref([]);
const myItems = ref([]);
const total = ref(0);
// cart.value = ;
for (let i = 0; i < cart.value.length; i++) {
  myProducts.value[i] = (
    await $fetch(`/api/products?_id=${cart.value[i].product}`)
  ).data.items[0];

  myItems.value[i] = (
    await $fetch(`/api/items?_id=${myProducts.value[i].item}`)
  ).data.items[0];
}

for (let i = 0; i < myProducts.value.length; i++) {
  total.value = total.value + myProducts.value[i].price * cart.value[i].quantity;
}
</script>
