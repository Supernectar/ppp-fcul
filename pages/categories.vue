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
                    :to="{
                      name: 'items',
                      params: {
                        superName: superCata.name,
						superId: superCata._id,
                        cateName: cata.name,
						cateId: cata._id,
                        subName: subCata.name,
                        subId: subCata._id,
                      },
                    }"
                    >{{ subCata.name }}</NuxtLink
                  >
                  <!--<NuxtLink
										:href="
											'/items?category=' +
											superCata._id

											/*'/items?category1=' +
											superCata._id +
											'&category2=' +
											cata._id +
											'&category3=' +
											subCata._id*/
										"
									>
										
									</NuxtLink>-->
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
