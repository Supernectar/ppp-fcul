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
              <img src="/img/627.png" class="h-16 rounded-lg border" />
              {{ myItems[0].name }}
            </th>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
              <img src="/img/627.png" class="h-16 rounded-lg border" />
              {{ myItems[1].name }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300 text-center">
          <tr
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>price</td>
            <td>
              {{ myProducts[0].productLine.price }}{{ myProducts[0].unit }}
            </td>
            <td>
              {{ myProducts[1].productLine.price }}{{ myProducts[1].unit }}
            </td>
          </tr>
          <tr
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>supplier</td>
            <td>{{ myProducts[0].productLine.supplier.username }}</td>
            <td>{{ myProducts[1].productLine.supplier.username }}</td>
          </tr>
          <tr
            v-for="(attr, index) in attrs"
            :id="attr"
            :key="index"
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>
              {{ attr[0] }}
            </td>
            <td>
              {{ attr[1] }}
            </td>
            <td>
              {{ attr[2] }}
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
const myProducts = ref([]);
const myItems = ref([]);
const attrs = ref([]);
console.log(attrs.value);
for (let i = 0; i < compare.value.length; i++) {
  myProducts.value[i] = (
    await $fetch(`/api/products?_id=${compare.value[i]}`)
  ).data.items[0];
  myItems.value[i] = (
    await $fetch(`/api/items?_id=${myProducts.value[i].productLine.item._id}`)
  ).data.items[0];
}
// console.log(myProducts.value);
// console.log(myItems.value[0].attributes !== undefined);
console.log('aaa');
console.log(attrs.value);
if (myItems.value[0].attributes !== undefined) {
  for (const attr of Object.keys(myItems.value[0].attributes)) {
    // console.log(myItems.value[1].attributes !== undefined);
    // console.log('errro');
    if (myItems.value[1].attributes !== undefined) {
      // console.log(myItems.value[1].attributes);
      if (Object.keys(myItems.value[1].attributes).includes(attr)) {
        // if (attr in myItems.value[1].attributes) {
        console.log('if');
        console.log(attr);
        attrs.value.push([
          attr,
          myItems.value[0].attributes[attr],
          myItems.value[1].attributes[attr]
        ]);
      } else {
        console.log('else');
        console.log(attr);
        attrs.value.push([attr, myItems.value[0].attributes[attr], '-']);
      }
    }
  }
}
console.log(11);
console.log(attrs.value);
if (myItems.value[1].attributes !== undefined) {
  for (const attr of Object.keys(myItems.value[1].attributes)) {
    // console.log(!attrs.value.includes(attr));
    // console.log(attrs.value);
    if (!attrs.value.includes(attr)) {
      // console.log(attr);
      attrs.value.push([attr, '-', myItems.value[1].attributes[attr]]);
    }
  }
}
// console.log('---');
// console.log(attrs);
</script>
