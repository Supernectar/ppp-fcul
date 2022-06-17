<template>
  <div>
    <Navbar />
    <header>Carrinho</header>
    <div class="rounded-lg shadow hidden md:block mx-60 mt-4">
      <table v-if="cart.length != 0" class="">
        <thead class="bg-gray-500 border-b-2 border-gray-500">
          <tr>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">&nbsp;</th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">Product</th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">Quantity</th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">Price</th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">Remove</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300">
          <tr
            v-for="(cartItem, index) in cart"
            :id="cartItem.product"
            :key="index"
            class="bg-white"
          >
            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              <img src="/img/627.png" class="h-full rounded-t-lg h-full m-auto border" />
            </td>
            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ myItems[index].name }}
              <br />
              {{ myProducts[index].supplier.username }}
            </td>

            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              <FormKit
                v-model="cartItem.quantity"
                type="number"
                validation=""
                outer-class="m-auto mb-4"
                label-class="form-label inline-block mb-2 text-gray-700 text-center ml-4"
                input-class="m-auto form-control block w-16 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                help-class="m-auto text-sm text-gray-500 mt-1"
                message-class="m-auto mt-1 text-sm text-red-600"
              />
            </td>
            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ myProducts[index].price * cartItem.quantity }}€
            </td>
            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              <button @click="removeFromCart(cartItem.product)">
                <TrashIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td class=""></td>
            <td></td>

            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              Total:
            </td>
            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              {{ total }}€
            </td>
            <td class="p-8 text-sm text-gray-700 whitespace-nowrap text-center">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                @click="purchase()"
              >
                Purchase
              </button>
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
import { useUser } from "~/store/user";
const store = useCart();
const userStore = useUser();
const cart = ref(store.getCart);
const logged = ref(userStore.isLoggedIn);
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

watch(
  cart,
  () => {
    total.value = 0;
    for (let i = 0; i < myProducts.value.length; i++) {
      total.value = total.value + myProducts.value[i].price * cart.value[i].quantity;
    }
  },
  { deep: true }
);

function purchase() {
  if (logged) {
    router.push("/signin");
  } else {
    router.push("/signin");
  }
}

function removeFromCart(pid) {
  if (cart.value.some((el) => el.product === pid)) {
    myProducts.value.splice(
      cart.value.findIndex((el) => el.product === pid),
      1
    );
    myItems.value.splice(
      cart.value.findIndex((el) => el.product === pid),
      1
    );
    cart.value.splice(
      cart.value.findIndex((el) => el.product === pid),
      1
    );
  }
}
</script>
