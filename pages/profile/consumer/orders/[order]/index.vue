<template>
  <div>
    <Navbar />
    <section class="bg-light-600 bg-red-100 p-4">
      <div class="w-auto m-auto bg-white rounded p-12 m-12">
        <h2>Order details</h2>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <table class="min-w-full">
                  <thead class="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Rating
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in items"
                      :key="index"
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ item.name }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ item.description }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ item.rating }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ categories[index] }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { useUser } from '~/store/user';
const router = useRouter();
const route = useRoute();
const store = useUser();

let itemIds = [];
const res = await fetch(
  `/api/users/${store.user.userId}/orders/${route.params.order}`
);
const resJson = await res.json();
itemIds = resJson.data.items[0].items;

const items = [];
const categories = [];

for (let i = 0; i < itemIds.length; i++) {
  const res2 = await fetch(`/api/items/${itemIds[i]}`);
  const resJson2 = await res2.json();
  console.log(resJson2);
  const resCat = await fetch(
    `/api/categories/${resJson2.data.items[0].category}`
  );
  const resCatJson = await resCat.json();
  console.log(resCatJson);
  items.push(resJson2.data.items[0]);
  categories.push(resCatJson.data.items[0].name);
}
console.log(items);
console.log(categories);
</script>
<style></style>
