<template>
  <div>
    <Navbar />
    <div class="row">
      <!-- <div v-for="item in items" :key="item._id" class="col">
      img-src="https://picsum.photos/600/300/?image=25"
        <b-card
          :title="item.name"
          img-alt="https://picsum.photos/600/300/?image=25"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> {{ item.description }} </b-card-text>

          <b-button href="#" variant="primary">See available products</b-button>
        </b-card>
      </div>
    </div>
  </div> -->
      <div v-for="item in items" :key="item._id" class="col">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <button @click="goToProducts(item.id)" class="btn btn-primary">
              See available products
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsView",
  async mounted() {
    const res = await fetch("api/items", {
      method: "GET",
    });
    this.items = await res.json();
  },

  methods: {
    goToProducts(id) {
      localStorage.setItem("item", id);
      this.$router.push(`products`);
    },
  },
};
</script>

<style></style>
