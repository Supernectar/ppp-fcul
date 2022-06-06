<template>
  <div>
    <Navbar />
    <div class="w-auto m-auto bg-white rounded p-12 m-12">
      <h2>Orders</h2>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
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
                      First
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      1
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      aaa
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Otto
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      @mdo
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      2
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Jacob
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Thornton
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      @fat
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      3
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Larry
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Wild
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      @twitter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useUser } from "~/store/user";
const store = useUser();

const res = await fetch(`/api/users/${store.user.userId}/orders`);
const resJson = await res.json();
console.log(resJson);

// async function mounted() {}
</script>

<style></style>
