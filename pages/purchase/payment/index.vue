<template>
  <div>
    <Navbar />
    <div class="rounded-lg shadow hidden md:block mx-10 m-10 bg-indigo-100">
      <div class="h-full w-full bg-indigo-100 py-16">
        <div class="container mx-auto text-center">
          <div class="w-11/12 lg:w-1/2 mx-auto">
            <div class="bg-gray-400 h-1 flex items-center justify-between">
              <div class="w-1/2 bg-indigo-700 h-1 flex items-center">
                <div
                  class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-check"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <div class="w-1/2 bg-indigo-700 h-1 flex items-center">
                <div
                  class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-check"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>

              <div
                class="w-0 flex justify-between bg-indigo-700 h-1 items-center relative"
              >
                <div class="absolute right-0 -mr-2">
                  <div
                    class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12"
                  >
                    <p class="text-indigo-700 text-xs font-bold">
                      Step 3: Payment
                    </p>
                  </div>
                </div>
                <div
                  class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative"
                >
                  <div class="h-4 w-4 bg-indigo-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--
      <table v-if="cart.length != 0" class="m-auto">
        <thead class="bg-gray-500 border-gray-500">
          <tr>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">&nbsp;</th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
              Product
            </th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
              Quantity
            </th>
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
            <td
              class="py-2 text-sm text-gray-700 whitespace-nowrap text-center"
            >
              <img :src="myProducts[index].imgPath" class="h-16 rounded-lg border" />
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

            <td class="text-sm text-gray-700 whitespace-nowrap text-center">
              Total:
            </td>
            <td class="text-sm text-gray-700 whitespace-nowrap text-center">
              {{ total }}€
            </td>
          </tr>
        </tbody>
      </table>-->
    </div>
    <p class="text-sky-600 text-center mb-5">CHECKOUT</p>
    <table v-if="cart.length != 0" class="m-auto w-10/12">
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
          v-for="(product, index) in myProducts"
          :key="index"
          class="bg-white"
        >
          <td class="text-sm text-gray-700 whitespace-nowrap text-center">
            <img
              :src="product.item.imgPath"
              class="h-16 rounded-lg border ml-1/2"
            />
          </td>

          <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
            {{ product.item.name }}
            <br />
            {{ product.supplier.username }}
          </td>
          <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
            {{ cart[index].quantity }}
          </td>
          <td class="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
            {{ product.price * cart[index].quantity }}€
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-center">
      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        :payment-intent="paymentIntent"
        @loading="(v) => (loading = v)"
      />

      <div class="text-center mr-10">Total: {{ total }}€</div>

      <div>
        <button
          class="text-white bg-gradient-to-br from-blue-600 to-red-pink hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-6 mb-2"
          @click="submit"
        >
          Pay now!
        </button>
      </div>
    </div>

    <!-- <div class="w-11/12 bg-white lg:w-1/2 mx-auto">
      <button
        type="button"
        class="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Cancel
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-indigo-500 to-indigo-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Next >
      </button>
    </div> -->

    <!-- <button
      type="button"
      class="text-white bg-gradient-to-br from-indigo-500 to-indigo-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      @click="createOrder()"
    >
      test criar encomenda
    </button> -->
  </div>
</template>

<script setup>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
// import stripe from 'stripe';
import useCart from '~/stores/cart';
import useOrderT from '~/stores/orderTransport';
import useOrderA from '~/stores/orderAddress';
const loading = false;
// const user = useUser();
const transportStore = useOrderT();
const addressStore = useOrderA();
const transport = ref(transportStore.getTransport);
const address = ref(addressStore.getAddress[0]);
const userStore = useUser();
const store = useCart();
const cart = ref(store.getCart);
const total = ref(0);

const myProducts = ref([]);
for (let i = 0; i < cart.value.length; i++) {
  myProducts.value[i] = await $fetch(`/api/products/${cart.value[i].product}`);
  myProducts.value[i].cartQuantity = cart.value[i].quantity;

  total.value += myProducts.value[i].cartQuantity * myProducts.value[i].price;
}
console.log(total.value);
const lineItems = ref([]);
// const lineItems = ref([
//   {
//     price: 'price_1LEE10AIdQC80EPdTFO66MJv', // The id of the one-time price you created in your Stripe dashboard
//     quantity: 1
//   },
//   {
//     price: 'price_1LEa8fAIdQC80EPdihds8cUG', // The id of the one-time price you created in your Stripe dashboard
//     quantity: 1
//   }
// ]);

console.log(myProducts.value);
for (const product of myProducts.value) {
  lineItems.value.push({
    price: product.stripeId,
    quantity: product.cartQuantity
  });
}

const successURL = 'http://localhost:3000/success';
const cancelURL = 'http://localhost:3000/error';
const publishableKey =
  'pk_test_51LEDJlAIdQC80EPdG8z8dlFoL50XlSoMNe1JhuF2Tdap8U25BCRlWB8IiQnqa0YYBJy7JurPEuaDMaZWNgOlM0w5000FSV9i0w';
const checkoutRef = ref(null);
function submit() {
  console.log('---');
  console.log(myProducts.value);
  checkoutRef.value.redirectToCheckout();
}
// console.log('---');
// console.log(myProducts.value[0].storages[0].address);
// console.log(address.value);
// async function createOrder() {
//   const statusId = await $fetch(`/api/users/${userStore.data._id}/orders`, {
//     method: 'POST',
//     body: {
//       status: 'created',
//       products: myProducts.value,
//       transport: transport.value[0],
//       from: myProducts.value[0].storages[0].address,
//       to: address.value
//     }
//   });

//   const notifiedSup = [];
//   for (const myProduct of myProducts.value) {
//     if (!notifiedSup.includes(myProduct.supplier._id)) {
//       await $fetch(`/api/users/${myProduct.supplier._id}`, {
//         method: 'PUT',
//         body: {
//           notification: {
//             name: 'new order',
//             type: 'supplier',
//             reference_id: statusId
//           }
//         }
//       });
//       notifiedSup.push(myProduct.supplier._id);
//     }
//   }

//   const userdb = await $fetch(`/api/users/${userStore.data._id}`);

//   userStore.$patch({
//     data: userdb
//   });
// }

// const { paymentIntent } = await stripe.retrievePaymentIntent(
//   checkoutRef
// ); // (clientSecret);
// if (paymentIntent && paymentIntent.status === 'succeeded') {
//   console.log('deu');
// } else {
//   // Handle unsuccessful, processing, or canceled payments and API errors here
//   console.log('nao deu');
// }
</script>
