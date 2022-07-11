<template>
  <div>
    <Navbar />
    <div v-if="compare.length == 2" class="m-auto w-10/12">
      <p class="font-800 px-2 py-2.5">Compare</p>
      <table class="w-full rounded-lg">
        <thead class="bg-gray-400 border-gray-50">
          <tr>
            <th class="w-20 text-sm text-gray-50">attributes</th>
            <th
              class="w-20 text-sm hover:bg-gray-100 hover:text-black text-gray-50 whitespace-nowrap"
              @click="$router.push(`/items/${products[0].item._id}`)"
            >
              <img
                :src="products[0].item.imgPath"
                class="h-16 rounded-lg border m-auto"
              />
              {{ products[0].item.name }}
            </th>
            <th
              class="w-20 text-sm hover:bg-gray-100 hover:text-black text-gray-50 whitespace-nowrap"
              @click="$router.push(`/items/${products[1].item._id}`)"
            >
              <img
                :src="products[1].item.imgPath"
                class="h-16 rounded-lg border m-auto"
              />
              {{ products[1].item.name }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300 text-center">
          <tr
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>price</td>
            <td
              v-if="products[0].price < products[1].price"
              class="bg-green-100"
            >
              {{ products[0].price }}{{ products[0].currencyUnit }}
            </td>
            <td
              v-else-if="products[0].price > products[1].price"
              class="bg-red-100"
            >
              {{ products[0].price }}{{ products[0].currencyUnit }}
            </td>
            <td v-if="products[0].price < products[1].price" class="bg-red-100">
              {{ products[1].price }}{{ products[1].currencyUnit }}
            </td>
            <td
              v-else-if="products[0].price > products[1].price"
              class="bg-green-100"
            >
              {{ products[1].price }}{{ products[1].currencyUnit }}
            </td>
          </tr>
          <tr
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>supplier</td>
            <td>{{ products[0].supplier.username }}</td>
            <td>{{ products[1].supplier.username }}</td>
          </tr>
          <tr
            v-for="(attr, index) in attrs"
            :id="attr"
            :key="index"
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td v-if="attr[1].value === attr[2].value" class="bg-purple-100">
              {{ attr[1].name || attr[2].name }}
            </td>
            <td v-else class="bg-blue-100">
              {{ attr[1].name || attr[2].name }}
            </td>
            <td v-if="attr[1].value === attr[2].value" class="bg-purple-100">
              {{ attr[1].value || '-' }}
            </td>
            <td v-else class="bg-blue-100">{{ attr[1].value || '-' }}</td>
            <td v-if="attr[1].value === attr[2].value" class="bg-purple-100">
              {{ attr[2].value || '-' }}
            </td>
            <td v-else class="bg-blue-100">{{ attr[2].value || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import useCompare from '~/stores/compare';
const storeCompare = useCompare();
const compare = ref(storeCompare.getCompare);
const products = ref([]);
const attrs = ref([]);

for (const productId of compare.value) {
  products.value.push(await $fetch(`/api/products/${productId}`));
}

if (products.value[0].item.attributes !== undefined) {
  for (const attr of Object.keys(products.value[0].item.attributes)) {
    if (products.value[1].item.attributes !== undefined) {
      if (Object.keys(products.value[1].item.attributes).includes(attr)) {
        attrs.value.push([
          attr,
          products.value[0].item.attributes[attr],
          products.value[1].item.attributes[attr]
        ]);
      } else {
        attrs.value.push([attr, products.value[0].item.attributes[attr], '-']);
      }
    }
  }
}
if (products.value[1].item.attributes !== undefined) {
  for (const attr of Object.keys(products.value[1].item.attributes)) {
    for (let i = 0; i < attrs.value; i++) {
      if (!attrs.value[i][0].includes(attr)) {
        attrs.value.push([attr, '-', products.value[1].item.attributes[attr]]);
      }
    }
  }
}
</script>
