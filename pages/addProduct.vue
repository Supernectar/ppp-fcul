<template>
  <div>
    <Navbar />

    <form>
      <label for="storage" class="form-label">Select storage to add products</label>
      <select
        id="storage"
        v-model="storage"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="mb-3">
        <label for="itemId" class="form-label">Item</label>
        <input
          type="text"
          v-model="productId"
          class="form-control"
          id="itemId"
          placeholder="item id"
        />
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input
          type="text"
          v-model="price"
          class="form-control"
          id="price"
          placeholder="0.99"
        />
      </div>
      <div class="mb-3">
        <label for="units" class="form-label">Units</label>
        <input
          type="text"
          v-model="units"
          class="form-control"
          id="units"
          placeholder="€"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="addProduct">Submit</button>
    </form>

    <ul>
      <li v-for="product in products" :key="product._id">
        {{ product }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      selected: [],
      storage: "",
      // TODO: fazer fetch dos armazens do fornecedor
      options: [
        { value: "a1", text: "Armazem 1" },
        { value: "a2", text: "Armazem 2" },
        { value: "a3", text: "Armazem 3" },
        { value: "a4", text: "Armazem 4" },
      ],
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    async addProduct() {
      await fetch("http://localhost:5000/products", {
        method: "POST",
      });
      this.loadProducts();
    },
    async loadProducts() {
      const res = await fetch("http://localhost:5000/products", {
        method: "GET",
      });
      this.products = await res.json();
    },
    async loadStorages() {
      const res = await fetch("http://localhost:5000/storage", {
        method: "GET",
      });
      this.storage = await res.json();
    },
  },
};
</script>

<style></style>
