<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-2xl font-bold">ClearChoice Users</h1>
          <div id="addresses" class="mt-4 border rounded-xl p-2">
            <h2 class="text-xl font-semibold">Something....</h2>
            <br />
            <p>Here is a list of your all users registered in our platform.</p>
            <div>
              <p class="mt-4">
                Choose the username you are looking for to see and edit their
                information.
              </p>

              <div class="flex gap-4 mt-2">
                <div>
                  <FormKit
                    v-model="userId"
                    type="select"
                    :options="users"
                    :value="users[0]"
                    outer-class="mb-4"
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    help-class="text-sm text-gray-500 mt-1"
                    message-class="mt-1 text-sm text-red-600"
                  />
                </div>
              </div>
            </div>
          </div>
          <AdminEdit v-if="userId !== ''" :userId="userId" />
        </section>
        <Footer />
      </div>
    </div>
    <!-- Dialog -->
  </div>
</template>

<script setup>
const users = ref([]);
const userId = ref('');
users.value = await $fetch(`/api/users`);
for (const user of users.value) {
  user.label = user.username;
  user.value = user._id;
}

// Countries
const names = ref([]);
const result2 = await $fetch(`https://restcountries.com/v3.1/all`);
for (let i = 0; i < result2.length; i++) {
  names.value.push(result2[i].name.common);
}
names.value.sort((a, b) => a.localeCompare(b));
</script>
