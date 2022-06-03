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
          <div class="bg-red-200 p-2">
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
                  class="object-contain scale-75 group-hover:scale-100 transition-all"
                />
              </div>

              <div class="p-2 bg-white">
                <h5 class="font-semibold text-left">
                  {{ item.name }}
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
              <!-- <div class="rounded overflow-hidden bg-white max-w-sm">
              </div> -->
              <!-- <div
                class="w-11/12 group-hover:w-full transition-width duration-75 ease-out"
              >
              </div> -->
            </button>

            <!-- <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div>
            <div class="bg-red-500 m-2 h-20">okok</div> -->
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
<template>
  <div class="fixed top-16 w-72">
    <Listbox v-model="selectedPerson">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate">{{ selectedPerson.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="person in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']"
                  >{{ person.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const selectedPerson = ref(people[0]);
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

    //get super/cate/sub categories
    // const res1 = await fetch(`/api/categories/${this.$route.params.superId}`, {
    //   method: "GET",
    // });
    // const res2 = await res1.json();
    // console.log("res2");
    // console.log(res2);
    // console.log(res2.data.items[0].attributes);
    // this.attributes.push(res2.data.items[0].attributes);

    // const res3 = await fetch(`/api/categories/${this.$route.params.cateId}`, {
    //   method: "GET",
    // });
    // const res4 = await res3.json();
    // console.log("res4");
    // console.log(res4);
    // this.attributes.push(res4.data.items[0].attributes);

    // const res5 = await fetch(`/api/categories/62978e39e2dbf1663f33eff5`, {
    //   method: "GET",
    // });
    // const res6 = await res5.json();
    // console.log("res6");
    // console.log(res6);

    // const datasubcate = res6.data.items[0].attributes;
    // if (datasubcate.length != 0) {
    //   this.attributes.push(res6.data.items[0].attributes);
    // }

    // console.log("atributos - " + this.attributes);

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

'''' '''' '' ''
