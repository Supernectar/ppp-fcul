<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-white m-4 p-4 rounded">
      {{ categories }}
      <div v-for="superCata in categories" :key="superCata._id">
        <h1 class="text-xl font-semibold pt-2">
          {{ superCata.name }}
        </h1>
        <hr class="mb-2" />
        <div class="row">
          <div v-for="cata in superCata.categories" :key="cata._id">
            <h4 class="text-lg">
              {{ cata.name }}
            </h4>
            <hr class="mb-2 w-28" />
            <ul>
              <li v-for="subCata in cata.categories" :key="subCata._id">
                <p>
                  <NuxtLink
                    :href="
                      '/items?category1=' +
                      superCata._id +
                      '&category2=' +
                      cata._id +
                      '&category3=' +
                      subCata._id
                    "
                  >
                    {{ subCata.name }}
                  </NuxtLink>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesView",
  data() {
    return {
      categories: [],
      //a: [],
    };
  },
  async mounted() {
    const res1 = await fetch(`api/categories?isRoot=true`, {
      method: "GET",
    });
    const res2 = await res1.json();
    this.categories = res2.data.items;

    /*
    for (let i = 0; i < this.categories.length; i++) {
      let superCata = this.categories[i];
      this.a.push(superCata);
      let listCata = [];
      for (let f = 0; f < superCata.categories.length; f++) {
        let cata = superCata.categories[f];
        listCata.push(cata);
        const res3 = await fetch(`api/categories?_id=${cata}`, {
          method: "GET",
        });
        const res4 = await res3.json();
      }
      this.a.push(listCata);
    }*/
  },
};
</script>

<style></style>
