<template>
  <div>
    <Navbar />

    <div class="row">
      <div v-for="product in products" :key="product._id" class="col">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ product.id }}</h5>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsView2",
  async mounted() {
    const item = localStorage.getItem("item");
    const res = await fetch("api/products?" + item, {
      method: "GET",
    });
    this.products = await res.json();
  },
};
</script>

<style></style>
