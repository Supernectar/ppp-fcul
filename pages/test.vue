<template>
  <div class="h-screen">
    <Navbar />
    <section class="bg-light-100">
      <div class="">Supercata>subcata>cata</div>
      <div class="bg-gray-100 flex">
        <div class="bg-green-50 w-80">
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
            <h1 class="text-md font-semibold">Filters</h1>
            <hr />
            <div>
              <ul>
                <li>filter1</li>
                <li>filter2</li>
                <li>filter3</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-red-100 w-full">
          <div class="bg-red-200 p-2 flex justify-between items-center">
            <div class="flex items-center">
              <div>
                <span class="pr-2">{{ category.name }}</span>
                <span class="text-gray-400">({{ items.length }} results)</span>
              </div>
              <div class="w-[1px] h-[20px] bg-gray-400 mx-2"></div>
              <form @submit.prevent class="text-center">
                <label
                  for="default-search1"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only"
                  >Search</label
                >
                <div class="relative">
                  <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search1"
                    class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search within category"
                    required
                  />
                </div>
              </form>
            </div>
            <div class="flex items-center justify-end">
              <p class="px-2">sort by:</p>
              <Combobox v-model="selected" class="w-30 z-1">
                <div class="relative mt-1">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
                  >
                    <ComboboxInput
                      class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      :displayValue="(sortingFilter) => sortingFilter.name"
                      @change="query = $event.target.value"
                    />
                    <ComboboxButton
                      class="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
                  >
                    <ComboboxOptions
                      class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <div
                        v-if="filteredSortingFilters.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700"
                      >
                        Nothing found.
                      </div>

                      <ComboboxOption
                        v-for="sortingFilter in filteredSortingFilters"
                        as="template"
                        :key="sortingFilter.id"
                        :value="sortingFilter"
                        v-slot="{ selected, active }"
                      >
                        <li
                          class="relative cursor-default select-none py-2 pl-10 pr-4"
                          :class="{
                            'bg-teal-600 text-white': active,
                            'text-gray-900': !active,
                          }"
                        >
                          <span
                            class="block truncate"
                            :class="{
                              'font-medium': selected,
                              'font-normal': !selected,
                            }"
                          >
                            {{ sortingFilter.name }}
                          </span>
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                            :class="{
                              'text-white': active,
                              'text-teal-600': !active,
                            }"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ComboboxOption>
                    </ComboboxOptions>
                  </TransitionRoot>
                </div>
              </Combobox>
            </div>
          </div>
          <div
            class="bg-red-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 m-2"
          >
            <button
              v-for="item in items"
              :key="item._id"
              class="group hover:shadow rounded overflow-hidden bg-green-200"
            >
              <div class="p-2 overflow-hidden">
                <img
                  src="img/627.png"
                  class="object-contain scale-75 group-hover:scale-100 transition-all m-auto"
                />
              </div>

              <div class="p-2 bg-white">
                <h5 class="font-semibold text-left">
                  {{ item.name }}

                  {{ getProductCheapestPrice(item._id) }}
                </h5>
                <div class="flex items-center justify-between">
                  <ul class="flex">
                    <li v-for="i in 5" :key="i">
                      <svg
                        v-if="item.popularity < i"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        class="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                      <svg
                        v-else
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        class="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <div class="text-gray-500">(23)</div>
                </div>
                <div class="flex">
                  <p>19€</p>
                </div>
                <a
                  :href="'products/' + item._id"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  See available products
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-200">
      <div class="bg-red-800 w-40 hover:w-60 transition-width duration-150 ease-in-out">
        Hello
      </div>

      <!-- Button trigger modal -->
      <button
        type="button"
        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <!-- Modal -->
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
          >
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
            >
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">...</div>
            <div
              class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
            >
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row">
      <div class="container mx-auto grid grid-cols-12 gap-8">
        <div class="m-4 bg-white p-4 rounded bg-light col-span-3">
          <h5>FILTROS</h5>
          <br />
          <h6>Marca</h6>
          <div
            v-for="(brand, index) in filters2"
            :key="index"
            class="form-check"
            id="marcas"
          >
            <input
              class="form-check-input"
              type="checkbox"
              v-model="filters"
              :value="brand"
              :id="'flexCheckDefault' + brand"
            />
            <label class="form-check-label" :for="'flexCheckDefault' + brand">
              {{ brand }}
            </label>
          </div>

          <br />
          <h6>Produtor</h6>
          <div v-for="(producer, index) in producers" :key="index" class="form-check">
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
        </div>
        <div class="col-span-9">
          <p>
            {{ this.$route.params.superName }}
            >
            {{ this.$route.params.cateName }}
            >
            {{ this.$route.params.subName }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

const categoryId = "62978e39e2dbf1663f33eff5";
const category = ref((await $fetch(`/api/categories/${categoryId}`)).data.items[0]);

let supremeItems = ref([]);
supremeItems = (await $fetch(`/api/items?category=${categoryId}`)).data.items;

let prices = ref([]);

// console.log(getProductCheapestPrice(el._id))
console.log("here");
console.log(getProductCheapestPrice("629922134995a8586a4b1baf"));
supremeItems.forEach((el) => {
  prices.value.push(getProductCheapestPrice(el._id));
});

console.log(prices.value);

const sortingFilters = [
  { id: 1, name: "price" },
  { id: 2, name: "rating" },
];

let selected = ref(sortingFilters[0]);
let query = ref("");

let filteredSortingFilters = computed(() =>
  query.value === ""
    ? sortingFilters
    : sortingFilters.filter((sortingFilter) =>
        sortingFilter.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

async function getProductCheapestPrice(id) {
  const products = (await $fetch(`/api/products?item=${id}`)).data.items;
  let cheapest = products[0].price;
  console.log(cheapest);
  return cheapest;
}
</script>
<script>
export default {
  name: "ItemsView",

  //let category = fetch("/api/categories"nome=url.category)
  //const attrs = catergory.attrs

  data() {
    return {
      attributes: [],
      allItems: [],
      filters: [],
      filters2: [],
      items: [],
      brands: [],
      producers: [],
    };
  },
  async mounted() {
    console.log(
      " super " +
        this.$route.params.superId +
        " - cate " +
        this.$route.params.cateId +
        " - sub" +
        this.$route.params.subId
    );

    //get items
    const res7 = await fetch(`/api/items?category=62978e39e2dbf1663f33eff5`, {
      method: "GET",
    });
    const res8 = await res7.json();

    console.log(res8);
    console.log("res8");
    this.allItems = res8.data.items;
    const items = res8.data.items;
    /*
    const res = await fetch("api/items", {
      method: "GET",
    });
    const res2 = await res.json();

    this.allItems = res2.data.items;
    const items = res2.data.items;
  */
    for (let i = 0; i < items.length; i++) {
      if (!this.filters2.includes(items[i].brand)) this.filters2.push(items[i].brand);

      //if(!this.filters2.includes(items[i].producer)){
      //this.filters2.push(items[i].producer);
      //}
    }

    //this.items = res2.data.items;
    this.items = res8.data.items;
    let result = this.allItems;

    if (this.filters.length != 0) {
      result = this.items.filter((el) => this.filters.includes(el.brand));
    }

    this.items = result;
    /*
    if (this.items.length == 0) {
      this.items = this.allItems;
    }*/
  },
  watch: {
    filters() {
      let result = this.allItems;
      if (this.filters.length != 0) {
        result = this.items.filter((el) => this.filters.includes(el.brand));
      }

      this.items = result;
      if (this.items.length == 0) {
        this.items == allItems;
      }
    },
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
