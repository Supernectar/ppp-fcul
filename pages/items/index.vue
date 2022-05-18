<template>
  <div class="bg-success">
    <Navbar />
    <div class="row">
      <div class="col-2 m-4 p-4 rounded bg-light">
        <h5>FILTROS</h5>
        <br />
        <h6>Marca</h6>
        <div v-for="(brand, index) in brands" :key="index" class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="filters"
            :value="brand"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            {{ brand }}
          </label>
        </div>

        <br />
        <h6>Produtor</h6>
        <div v-for="producer in producers" class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            {{ producer }}
          </label>
        </div>

        <br />
        <h6>Preço</h6>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> 0€-50€ </label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> 50€-100€ </label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> 100€-200€ </label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> 200€-300€ </label>
        </div>
      </div>
      <div class="col row">
        <div v-for="item in items" :key="item._id" class="col">
          <div class="card" style="width: 18rem">
            <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                {{ item.name }}
              </h5>
              <a :href="'products/' + item._id" class="btn btn-primary">
                See available products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsView",
  data() {
    return {
      filters: [],
      items: [],
      brands: [],
      producers: [],
    };
  },
  async mounted() {
    const res = await fetch("api/items", {
      method: "GET",
    });
    // res.filter("");
    const res2 = await res.json();
    this.items = res2.data.items;
    this.getFilters();

    const items = res2.data.items;
    console.log(items);

    if (filter.length <= 0) {
      const result = items.filter((el) => this.filters.includes(el.brand));
      console.log(result);
    }

    this.items = result;
  },
  watch: {
    filters() {},
  },

  methods: {
    getFilters() {
      for (var i = 0; i < this.items.length; i++) {
        //get brands
        const brand = this.items[i].brand;
        if (this.brands.indexOf(brand) == -1) {
          this.brands.push(brand);
        }
        //get producers
        const producer = this.items[i].producer;
        if (this.producers.indexOf(producer) == -1) {
          this.producers.push(producer);
        }
      }
    },
  },
};
</script>

<style></style>
