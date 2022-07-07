<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Type</th>
            <th scope="col" class="px-6 py-3">Quantity</th>
            <th scope="col" class="px-6 py-3">Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(polutions, index) in $attrs.product.polutions"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4">
              {{
                polutions.polution
                  ? polutions.polution.name
                  : 'polutions not updated'
              }}
            </td>
            <td class="px-6 py-4">{{ polutions.quantity }}</td>
            <td class="px-6 py-4">
              {{
                polutions.polution
                  ? polutions.polution.unit
                  : 'polutions not updated'
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { product } = useAttrs();
</script>
