<template>
  <div>
    <Navbar />
    <h1>Seleção de produtos</h1>
    <p>Aqui é feita a seleção dos produtos, para serem adicionados ao carrinho</p>
    <b-form inline>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search by name, tag, provider, others..."
      ></b-form-input>
    </b-form>
    <div class="row">
      <div v-for="item in items" :key="item._id" class="col">
        <b-card
          :title="item.name"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Descrição do item </b-card-text>

          <b-button href="#" variant="primary">See available prices</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsView2",
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:5000/items", {
      method: "GET",
    });
    this.items = await res.json();
  },
  methods: {
    // loadItems() {
    // }
  },
};
</script>

<style></style>
