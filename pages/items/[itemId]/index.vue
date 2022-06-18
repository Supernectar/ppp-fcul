<template>
  <div>
    <Navbar />
    <section class="bg-light-600 bg-red-100 p-4">
      <div class="flex gap-2">
        <div class="bg-light-100 rounded p-2 shadow w-full">
          <div class="flex justify-start mx-60">
            <span v-for="(cat, i) in categoryPath" :key="i">
              <span v-if="i != 0">></span>
              <NuxtLink
                to="/categories"
                class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
              >
                {{ cat.name }}
              </NuxtLink>
            </span>
          </div>
          <div>
            <div class="flex justify-start gap-4 mx-60 h-80">
              <img
                src="/img/627.png"
                class="h-full rounded-t-lg h-full m-auto border"
              />
              <!-- <div class="h-60 bg-light-100 rounded p-2 shadow w-full"></div> -->
              <div class="flex flex-col bg-gray-50">
                <p class="font-bold">
                  {{ item.name }}
                </p>
                <div class="overflow-auto">
                  <p>
                    {{ item.description }}
                  </p>
                  <div
                    v-for="(i, index) in item.attributes"
                    :id="i"
                    :key="index"
                  >
                    <p>
                      {{ index }}:
                      {{ i }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-lg shadow hidden md:block mx-60 mt-4">
              <table class="">
                <thread class="bg-gray-500 border-b-2 border-gray-500">
                  <tr>
                    <th
                      class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
                    >
                      Suplier
                    </th>
                    <th
                      class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
                    >
                      Price
                    </th>
                    <th
                      class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
                    >
                      Quantity available
                    </th>
                  </tr>
                  <tbody class="divide-y divide-gray-300">
                    <tr
                      v-for="(product, index) in products"
                      :id="product"
                      :key="index"
                      class="bg-white"
                    >
                      <td
                        class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                      >
                        {{ product.supplier.username }}
                        <br />
                        {{ product.supplier.email }}
                      </td>
                      <td
                        class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                      >
                        {{ product.price }}€
                      </td>
                      <td
                        class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
                      >
                        {{ product.quantity }}
                      </td>
                      <td>
                        <button
                          type="button"
                          class="text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          @click="addToCart(product._id)"
                        >
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </thread>
              </table>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import useCart from '~/stores/cart';
const store = useCart();
const route = useRoute();
// const products = ref("");

// const { data } = await useFetch("/api/items/" + route.params.productId, {
//   method: "GET",
// });

// // const res2 = await res.json();
// console.log(data._rawValue);
// // products = data._rawValue.data.items;

// item: {},
// products: []
// http://localhost:3000/items/629dfc18c3c6375a112cf3a2

const item = ref({});
const products = ref([]);
item.value = (await $fetch('/api/items/' + route.params.itemId)).data.items[0];

products.value = (
  await $fetch('/api/products?item=' + route.params.itemId)
).data.items;

const category = ref('');
const categoryPath = ref([]);
category.value = (
  await $fetch(`/api/categories?_id=${item.value.category}`)
).data.items[0];

console.log(products.value);
// ---- Category Path ---- //
let current = category.value;
categoryPath.value.push(current);
while (current.parent) {
  current = (await $fetch(`/api/categories?_id=${current.parent}`)).data
    .items[0];
  categoryPath.value.push(current);
}
categoryPath.value.reverse();
categoryPath.value.shift();

// ---- Local Storage Cart ---- //
const myCart = ref([]);
function addToCart(pid) {
  myCart.value = store.getCart;
  console.log(myCart.value.length);

  if (myCart.value.some((el) => el.product === pid)) {
    myCart.value[myCart.value.findIndex((el) => el.product === pid)].quantity++;
  } else {
    myCart.value.push({ product: pid, quantity: 1 });
  }

  store.$patch({ myCart });
}
</script>
