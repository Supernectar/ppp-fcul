<template>
  <div class="h-screen">
    <Navbar />
    <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" />
    {{ item }}
    {{ products }}
    <table class="border-collapse border border-slate-700">
      <thead>
        <tr>
          <th class="border border-slate-700">Song</th>
          <th class="border border-slate-700">Artist</th>
          <th class="border border-slate-700">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="index"
          class="form-check"
          :id="product"
        >
          <!--
          <td v-for="(productAttr, index2) in product"
            :key="index2"
            class="border border-slate-700"
            :id="product">{{product.productAttr}}</td>-->

          <td class="border border-slate-700">Malcolm Lockyer</td>
          <td class="border border-slate-700">1961</td>
        </tr>
        <tr>
          <td class="border border-slate-700">Witchy Woman</td>
          <td class="border border-slate-700">The Eagles</td>
          <td class="border border-slate-700">1972</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// const route = useRoute();
// const products = ref("");

// const { data } = await useFetch("/api/items/" + route.params.productId, {
//   method: "GET",
// });

// // const res2 = await res.json();
// console.log(data._rawValue);
// // products = data._rawValue.data.items;

export default {
  name: "ProductsView",
  data() {
    return {
      item: {},
      products: [],
    };
  },
  //http://localhost:3000/items/629dfc18c3c6375a112cf3a2
  async mounted() {
    const res = await $fetch("/api/items/" + this.$route.params.itemId, {
      method: "GET",
    });
    this.item = res.data.items[0];
    console.log("b" + this.item);

    const res1 = await $fetch("/api/products?item=" + this.$route.params.itemId, {
      method: "GET",
    });
    this.products = res1.data.items;
    console.log("c" + this.products);
  },

  methods: {},
};
</script>

<style></style>
