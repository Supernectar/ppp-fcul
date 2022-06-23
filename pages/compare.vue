<template>
  <div>
    <Navbar />
    {{ myItems }}
    <div v-if="compare.length == 2" class="m-auto w-10/12">
      <table class="w-1/2">
        <thead class="bg-gray-500 border-gray-500">
          <tr>
            <th class="w-20 text-sm text-gray-200 whitespace-nowrap">
              <img src="/img/627.png" class="h-16 rounded-lg border" />
              {{ myItems[0].name }}
            </th>
            <!--<th class="w-20 text-sm text-gray-200 whitespace-nowrap">
            <img src="/img/627.png" class="h-16 rounded-lg border ml-1/2" />
            {{ myItems[1].name }}
          </th>-->
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300 text-center">
          <tr
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>
              Price: {{ myProducts[0].price }}{{ myProducts[0].unit }}
              <br />
              Supplier: {{ myProducts[0].supplier.name }}
            </td>
          </tr>
          <tr
            v-for="(attrI, index) in myItems[0].attributes"
            :id="attrI"
            :key="index"
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>
              {{ index }}:
              {{ attrI }}
            </td>
          </tr>
        </tbody>
      </table>
      <table class="w-1/2">
        <thead class="bg-gray-500 border-gray-500">
          <tr>
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
            <td>
              Price: {{ myProducts[1].price }}{{ myProducts[1].unit }}
              <br />
              Supplier: {{ myProducts[1].supplier.name }}
            </td>
          </tr>
          <tr
            v-for="(attrI1, index1) in myItems[1].attributes"
            :id="attrI1"
            :key="index1"
            class="bg-white text-sm text-gray-700 whitespace-nowrap text-center"
          >
            <td>
              {{ index1 }}:
              {{ attrI1 }}
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
for (let i = 0; i < compare.value.length; i++) {
  myProducts.value[i] = (
    await $fetch(`/api/products?_id=${compare.value[i]}`)
  ).data.items[0];

  myItems.value[i] = (
    await $fetch(`/api/items?_id=${myProducts.value[i].item}`)
  ).data.items[0];
}
</script>
