<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-white m-4 p-4 rounded">
      <div v-for="superCata in categories.children" :key="superCata._id">
        <h1 class="text-xl font-semibold pt-2">
          {{ superCata.name }}
        </h1>
        <hr class="mb-2" />
        <div class="row">
          <div v-for="cata in superCata.children" :key="cata._id">
            <h4 class="text-lg">
              {{ cata.name }}
            </h4>
            <hr class="mb-2 w-28" />
            <ul>
              <li v-for="subCata in cata.children" :key="subCata._id">
                <p>
                  <NuxtLink
                    :to="{
                      name: 'items',
                      query: {
                        superName: superCata.name,
                        superId: superCata._id,
                        cateName: cata.name,
                        cateId: cata._id,
                        subName: subCata.name,
                        subId: subCata._id
                      }
                    }"
                    >{{ subCata.name }}</NuxtLink
                  >
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const categories = ref({});

onBeforeMount(async () => {
  const expandNode = async (node) => {
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        node.children[i] = await $fetch(`/api/categories/${node.children[i]}`);
      }
      for (const child of node.children) {
        expandNode(child);
      }
    }
  };
  categories.value = (await $fetch(`/api/categories?name=main`))[0];
  expandNode(categories.value);
});
</script>

<style></style>
