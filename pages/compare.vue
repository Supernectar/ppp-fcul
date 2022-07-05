<template>
  <div>
    <Navbar />
    <div v-if="compare.length == 2" class="m-auto w-10/12">
      <p class="font-800 px-2 py-2.5">Compare</p>
      <table class="w-full rounded-lg">
        <thead class="bg-gray-500 border-gray-500">
          <tr>
            <th class="w-20 text-sm text-gray-200">attributes</th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
              <img
                :src="products[0].item.imgPath"
                class="h-16 rounded-lg border m-auto"
              />
              {{ products[0].item.name }}
            </th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
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
            <td>{{ products[0].price }}{{ products[0].unit }}</td>
            <td>{{ products[1].price }}{{ products[1].unit }}</td>
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
            <td>
              {{ attr[1].name || attr[2].name }}
            </td>
            <td>
              {{ attr[1].value || '-' }}
            </td>
            <td>
              {{ attr[2].value || '-' }}
            </td>
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
console.log(attrs.value);

for (const productId of compare.value) {
  products.value.push(await $fetch(`/api/products/${productId}`));
}

console.log(products.value);
console.log(attrs.value);
if (products.value[0].item.attributes !== undefined) {
  for (const attr of Object.keys(products.value[0].item.attributes)) {
    // console.log(myItems.value[1].attributes !== undefined);
    // console.log('errro');
    if (products.value[1].item.attributes !== undefined) {
      // console.log(myItems.value[1].attributes);
      if (Object.keys(products.value[1].item.attributes).includes(attr)) {
        // if (attr in myItems.value[1].attributes) {
        console.log('if');
        console.log(attr);
        attrs.value.push([
          attr,
          products.value[0].item.attributes[attr],
          products.value[1].item.attributes[attr]
        ]);
      } else {
        console.log('else');
        console.log(attr);
        attrs.value.push([attr, products.value[0].item.attributes[attr], '-']);
      }
    }
  }
}
console.log(11);
console.log(attrs.value);
if (products.value[1].item.attributes !== undefined) {
  for (const attr of Object.keys(products.value[1].item.attributes)) {
    // console.log(!attrs.value.includes(attr));
    // console.log(attrs.value);
    if (!attrs.value.includes(attr)) {
      // console.log(attr);
      attrs.value.push([attr, '-', products.value[1].item.attributes[attr]]);
    }
  }
}
</script>
