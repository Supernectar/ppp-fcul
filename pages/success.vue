<template>
  <div>
    <Navbar />
    <div class="flex justify-center" role="alert">
      <div
        class="bg-green-100 w-100 rounded-lg py-5 mt-10 px-6 mb-4 text-base text-green-700"
      >
        <div class="flex items-center mb-2">
          <h4 class="text-2xl font-medium leading-tight">Payment Sucessful</h4>
          <CheckCircleIcon class="h-6 mx-3" />
        </div>
        <p class="mb-4">
          Your payment was approved, you can go back to the website and check
          your order on your dashboard.
        </p>
        <hr class="border-red-600 opacity-30" />
        <!-- <p class="mt-4 mb-0"> -->
        <button @click="createOrder()">
          <NuxtLink
            to="/profile/consumer/orders"
            class="mt-4 mb-0 text-green-800 underline"
          >
            BACK TO THE SITE
          </NuxtLink>
        </button>
        <!-- </p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/outline';
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

// console.log(myProducts.value);
// for (const product of myProducts.value) {
//   lineItems.value.push({
//     price: product.stripeId,
//     quantity: product.cartQuantity
//   });
// }

async function createOrder() {
  const statusId = await $fetch(`/api/users/${userStore.data._id}/orders`, {
    method: 'POST',
    body: {
      status: 'created',
      products: myProducts.value,
      transport: transport.value[0],
      from: myProducts.value[0].storages[0].address,
      to: address.value
    }
  })[0];
  console.log('--');
  const notifiedSup = [];
  for (const myProduct of myProducts.value) {
    console.log(myProduct.supplier._id);
    if (!notifiedSup.includes(myProduct.supplier._id)) {
      console.log('put');

      await $fetch(`/api/users/${myProduct.supplier._id}`, {
        method: 'PUT',
        body: {
          notification: {
            name: 'new order',
            type: 'supplier',
            reference_id: statusId
          }
        }
      });
      notifiedSup.push(myProduct.supplier._id);
    }
  }

  const userdb = await $fetch(`/api/users/${userStore.data._id}`);

  userStore.$patch({
    data: userdb
  });
}
</script>
