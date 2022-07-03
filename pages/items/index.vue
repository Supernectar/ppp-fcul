<template>
  <div class="h-screen">
    <Navbar />
    <section class="bg-light-100">
      <div class="">Supercata>subcata>cata</div>
      <div class="bg-gray-100 grid grid-cols-12">
        <div class="bg-green-50 col-span-3">
          <div class="bg-blue-100 m-2">
            <h1 class="text-md font-semibold">
              <NuxtLink>Catagorias</NuxtLink>
            </h1>
            <hr />
            <div>
              <ul>
                <li>cata1</li>
                <li>cata2</li>
                <li>cata3</li>
              </ul>
            </div>
          </div>
          <div class="bg-blue-100 m-2">
            <h1>Filters</h1>
          </div>
        </div>
        <div class="bg-red-100 col-span-9">
          <div class="bg-green-100 p-2">
            <div class="flex">
              sort by:
              <select
                class="form-select appearance-none px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Popularity</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-6">
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
          </div>
        </div>
      </div>
    </section>

    <div class="row">
      <div class="container mx-auto grid grid-cols-12 gap-8">
        <div class="m-4 bg-white p-4 rounded bg-light col-span-3">
          <h5>FILTROS</h5>
          {{ attributes }}
          <br />
          <div
            v-for="(attribute, index) in attributes"
            :id="attribute"
            :key="index"
            class="form-check"
          >
            <h6>{{ attribute }}</h6>

            <input
              :id="'flexCheckDefault' + aa"
              v-model="filters"
              class="form-check-input"
              type="checkbox"
              :value="aa"
            />
            <label class="form-check-label" :for="'flexCheckDefault' + aa">
              aa
            </label>
            <br />
          </div>
        </div>
        <!--
					<h6>Marca</h6>
					<div
						v-for="(
							brand, index
						) in filters2"
						:key="index"
						class="form-check"
						id="marcas"
					>
						<input
							class="form-check-input"
							type="checkbox"
							v-model="filters"
							:value="brand"
							:id="
								'flexCheckDefault' +
								brand
							"
						/>
						<label
							class="form-check-label"
							:for="
								'flexCheckDefault' +
								brand
							"
						>
							{{ brand }}
						</label>
					</div>
          -->

        <!--
					<br />
					<h6>Produtor</h6>
					<div
						v-for="(
							producer, index
						) in producers"
						:key="index"
						class="form-check"
					>
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label
							class="form-check-label"
							for="flexCheckDefault"
						>
							{{ producer }}
						</label>
					</div>

					<br />
				</div>
        -->
        <div class="col-span-9">
          <p>
            {{ $route.query.superName }}
            >
            {{ $route.query.cateName }}
            >
            {{ $route.query.subName }}
          </p>
          <div v-for="item in items" :key="item._id" class="col">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <img
                src="https://picsum.photos/600/300/?image=25"
                class="rounded-t-lg"
              />

              <h5 class="card-title">
                {{ item.name }}
              </h5>
              <a
                :href="'products/' + item._id"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
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
  name: 'ItemsView',

  data() {
    return {
      attributes: [],
      attr_values: [],
      allItems: [],
      filters: [],
      filters2: [],
      items: [],
      brands: [],
      producers: []
    };
  },
  watch: {
    filters() {
      let result = this.allItems;
      if (this.filters.length !== 0) {
        result = this.items.filter((el) =>
          this.filters.includes(el.attributes.brand)
        );
      }

      //    this.items = result;
      // 		if (this.items.length == 0) {
      // 			this.items == allItems;
      // 		}
    }
  },
  async mounted() {
    // get super/cate/sub categories
    const res1 = await fetch(`/api/categories/${this.$route.query.superId}`);
    const res2 = await res1.json();
    const attrSupercate = res2.data.items[0].attributes;
    if (attrSupercate.length !== 0) {
      this.attributes.push.apply(this.attributes, attrSupercate);
    }
    const res3 = await fetch(`/api/categories/${this.$route.query.cateId}`, {
      method: 'GET'
    });

    const res4 = await res3.json();
    const attrCate = res4.data.items[0].attributes;
    if (attrCate.length !== 0) {
      this.attributes.push.apply(this.attributes, attrCate);
    }

    const res5 = await fetch(`/api/categories/${this.$route.query.subId}`);
    const res6 = await res5.json();
    const attrSubcate = res6.data.items[0].attributes;
    if (attrSubcate.length !== 0) {
      this.attributes.push.apply(this.attributes, attrSubcate);
    }
    // -------------------------------------------------

    // get items from subcate
    const res7 = await fetch(`/api/items?category=${this.$route.query.subId}`);
    const res8 = await res7.json();
    this.allItems = res8.data.items;
    const items = res8.data.items;

    for (let a = 0; a < this.attributes.length; a++) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].attributes.includes(this.attributes[a])) {
          this.attributes.splice(a, 0, this.items[i].attributes.a);
        }
      }
    }
    for (let i = 0; i < items.length; i++) {
      if (!this.filters2.includes(items[i].attributes.brand))
        this.filters2.push(items[i].attributes.brand);

      // if(!this.filters2.includes(items[i].producer)){
      // this.filters2.push(items[i].producer);
      // }
    }
    // this.items = res2.data.items;
    this.items = res8.data.items;
    let result = this.allItems;

    if (this.filters.length !== 0) {
      result = this.items.filter((el) =>
        this.filters.includes(el.attributes.brand)
      );
    }

    this.items = result;

    // if (this.items.length == 0) {
    //   this.items = this.allItems;
    // }
  },

  methods: {
    getFilters() {
      for (let i = 0; i < this.items.length; i++) {
        // get brands
        const brand = this.items[i].attributes.brand;
        if (!this.brands.includes(brand)) {
          this.brands.push(brand);
        }
        // get producers
        const producer = this.items[i].producer;
        if (!this.producers.includes(producer)) {
          this.producers.push(producer);
        }
      }
    }
  }
};
</script>

<style></style>
