<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden">
          <h1 class="text-2xl font-bold">My storages</h1>
          <div id="info" class="mt-4">
            <h2 class="text-xl font-semibold">
              Storage: {{ storageName || storage.name }}
            </h2>
            <p>Edit this storage</p>
            <div>
              <FormKit
                input-class="grid grid-cols-3"
                type="form"
                @submit="updateStorage"
              >
                <FormKit
                  v-model="storageName"
                  type="text"
                  label="Name"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="storageVisibility"
                  type="checkbox"
                  label="Visibility"
                  help="If visibility is set to false, your storage won't be visible to consumers and won't be used to supply products to transporters"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <FormKit
                  v-model="storageAddress"
                  type="text"
                  label="Name"
                  validation="required"
                  outer-class="mb-4"
                  label-class="form-label inline-block mb-2 text-gray-700"
                  input-class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  help-class="text-sm text-gray-500 mt-1"
                  message-class="mt-1 text-sm text-red-600"
                />
                <template #submit>
                  <FormKit
                    type="submit"
                    label="Update account"
                    input-class="inline-block my-4 w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  />
                </template>
              </FormKit>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const user = useUser();

const storage = ref({});

const storageName = ref('');
onBeforeMount(async () => {
  storage.value = await $fetch(
    `/api/users/${user.data._id}/storages/${route.params.storageId}`
  );
  storageName.value = storage.value.name;
});

const storageVisibility = ref('');
const address = ref('');

onBeforeMount(() => {});
</script>
