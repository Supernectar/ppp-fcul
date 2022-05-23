<template>
  <div class="h-screen">
    <Navbar />
    <!--{{ $route.params.productId }}-->
    <div class="row">
      <div v-for="product in products" :key="product._id" class="col">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">
              {{ product.name }}
            </h5>
            <p class="card-text">
              {{ product.description }}
            </p>
            See available products
          </div>
        </div>
      </div>
    </div>
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
      products: [],
    };
  },
  async mounted() {
    const res = await fetch("/api/items/" + this.$route.params.productId, {
      method: "GET",
    });
    const res2 = await res.json();
    console.log(res2);
    this.products = res2.data.items;
  },

  methods: {},
};
</script>

<style></style>
