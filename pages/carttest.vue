<template>
  <div>
    <header>Carrinho</header>
    <div class="rounded-lg shadow hidden md:block mx-60 mt-4">
      {{ myItems }}
      <table class="">
        <thread class="bg-gray-500 border-b-2 border-gray-500">
          <tr>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
              &nbsp;
            </th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
              &nbsp;
            </th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
              &nbsp;
            </th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
              &nbsp;
            </th>
            <th class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap">
              &nbsp;
            </th>
          </tr>
          <tbody class="divide-y divide-gray-300">
            <tr
              v-for="(cart, index) in myCart"
              :id="product"
              :key="index"
              class="bg-white"
            >
              <td
                class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                <img
                  src="/img/627.png"
                  class="h-full rounded-t-lg h-full m-auto border"
                />
              </td>
              <td
                class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                {{ myItems[index].name }}
                <br />
                {{ myProducts[index].supplier.username }}
              </td>
              <td
                class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                <!--<input type="number" :placeholder="[cart.quantity]" />-->
                {{ cart.quantity }}
              </td>
              <td
                class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
              >
                {{ myProducts[index].price }}€
              </td>
              <td>
                <Button @click="removeFromCart(myProducts[index]._id)">
                  <TrashIcon class="h-6 w-6" aria-hidden="true" />
                </Button>
              </td>
            </tr>
          </tbody>
        </thread>
      </table>
    </div>
  </div>
</template>
<script setup>
import { TrashIcon } from '@heroicons/vue/outline';
import { useCart } from '~/store/cart';
const store = useCart();
const myCart = ref([]);
const myProducts = ref([]);
const myItems = ref([]);
myCart.value = store.getCart;
for (let i = 0; i < myCart.value.length; i++) {
  myProducts.value[i] = (
    await $fetch(`/api/products?_id=${myCart.value[i].product}`)
  ).data.items[0];

  myItems.value[i] = (
    await $fetch(`/api/items?_id=${myProducts.value[i].item}`)
  ).data.items[0];
}

function removeFromCart(pid) {
  console.log(myCart.value);

  if (myCart.value.some((el) => el.product === pid)) {
    myCart.value.splice(
      myCart.value.findIndex((el) => el.product === pid),
      1
    );
  }
  store.$patch({ myCart });
}
</script>
