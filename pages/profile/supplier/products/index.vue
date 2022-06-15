<template>
  <div>
    <Navbar />
    <section class="">
      <div class="flex">
        <div>
          <SideNav />
        </div>

        <div class="bg-light-100 p-2 w-full">
          <h1>Products</h1>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <div>
                    <div class="flex">
                      <img
                        src="https://s1.minipreco.pt/medias/h59/h8c/8942827405342.jpg"
                        class="h-10"
                      />
                      ->
                      <select id="gg" name="">
                        <option value="storage1">storage1</option>
                        <option value="storage2">storage2</option>
                        <option value="storage3">storage3</option>
                        <option value="storage4">storage4</option>
                      </select>
                    </div>
                  </div>

                  <table class="min-w-full">
                    <thead class="border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Icon
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in 5" :key="i" class="border-b">
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                          <img
                            src="https://s1.minipreco.pt/medias/h59/h8c/8942827405342.jpg"
                            class="h-10"
                          />
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          Mark
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          Otto
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          5 stars
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
