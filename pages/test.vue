<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 bg-blue-100 overflow-hidden">
          <div class="flex gap-2">
            <div class="w-60 flex flex-col gap-2">
              <div class="bg-light-100 rounded p-2 shadow">
                <Disclosure v-slot="{ open }" default-open>
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Categories</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      <li
                        v-for="categoriasPrincipal in categories.children"
                        :key="categoriasPrincipal._id"
                      >
                        {{ categoriasPrincipal.name }}
                      </li>
                      <!--
                      <li
                        v-for="segundaCategoria in categoriasPrincipal.children"
                        :key="segundaCategoria._id"
                      >
                        {{ segundaCategoria.name }}
                      </li>
                      <li
                        v-for="terceiraCategoria in segundaCategoria.children"
                        :key="terceiraCategoria._id"
                      >
                        {{ terceiraCategoria.name }}
                      </li> -->
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div class="bg-light-100 rounded p-2 shadow">
                <Disclosure v-slot="{ open }" default-open>
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Producer</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      <li>
                        <div class="form-check">
                          <input
                            id="flexRadioDefault1"
                            v-model="selectedFilters.provider"
                            class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="flexRadioDefault"
                            value="provider1"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexRadioDefault1"
                          >
                            producer1
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="form-check">
                          <input
                            id="flexRadioDefault2"
                            v-model="selectedFilters.provider"
                            class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="flexRadioDefault"
                            value="provider2"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexRadioDefault2"
                          >
                            producer2
                          </label>
                        </div>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  v-slot="{ open }"
                  as="div"
                  class="mt-2"
                  default-open
                >
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Brand</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      <li>
                        <div class="form-check">
                          <input
                            id="brand1"
                            v-model="selectedFilters.brand"
                            class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            value="One"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="brand1"
                            >brand1</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="form-check">
                          <input
                            id="brand2"
                            v-model="selectedFilters.brand"
                            class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            value="Two"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="brand2"
                            >brand2</label
                          >
                        </div>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  v-slot="{ open }"
                  as="div"
                  class="mt-2"
                  default-open
                >
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Price</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      <li>
                        <div class="form-check">
                          <input
                            id="price1"
                            v-model="selectedFilters.price"
                            class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            value="One"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="price1"
                            >0-20€</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="form-check">
                          <input
                            id="price2"
                            v-model="selectedFilters.price"
                            class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            value="Two"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="price2"
                            >20-40€</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="form-check">
                          <input
                            id="price3"
                            v-model="selectedFilters.price"
                            class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            value="Three"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="price3"
                          >
                            40-60€
                          </label>
                        </div>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  v-slot="{ open }"
                  as="div"
                  class="mt-2"
                  default-open
                >
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Rating</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      <li v-for="i in 6" :key="i">
                        <input
                          :id="'rating' + i"
                          v-model="selectedFilters.rating"
                          class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          :value="i - 1"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          :for="'rating' + i"
                        >
                          <ul class="flex">
                            <li v-for="j in 5" :key="j">
                              <svg
                                v-if="j < i"
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
                              <svg
                                v-else
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
                            </li>
                          </ul>
                        </label>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  v-for="(staticFilter, index) in staticFilters"
                  :key="index"
                  v-slot="{ open }"
                  as="div"
                  class="mt-2"
                  default-open
                >
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>{{ staticFilter.name }}</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    options here
                  </DisclosurePanel>
                </Disclosure>
                selectedFilters:
                <pre>
            {{ selectedFilters }}
            </pre
                >
                staticFilters:
                <pre>
              {{ staticFilters }}
            </pre
                >
              </div>
            </div>
            <div class="bg-light-100 rounded p-2 shadow w-full">
              <div class="text-sm py-2">
                <span v-for="(category, i) in categoryPath" :key="i">
                  <span v-if="i != 0">></span>
                  <NuxtLink
                    to="/categories"
                    class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                  >
                    {{ category.name }}
                  </NuxtLink>
                </span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div>
                    <span class="pr-2">{{ category.name }}</span>
                    <span class="text-gray-400"
                      >({{ items.length }} results)</span
                    >
                  </div>
                  <div class="w-[1px] h-[20px] bg-gray-400 mx-2"></div>
                  <form class="text-center" @submit.prevent>
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
                        id="default-search1"
                        type="search"
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
                          :display-value="(sortingFilter) => sortingFilter.name"
                          @change="query = $event.target.value"
                        />
                        <ComboboxButton
                          class="absolute inset-y-0 right-0 flex items-center pr-2"
                        >
                          <SelectorIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </ComboboxButton>
                      </div>
                      <TransitionRoot
                        leave="transition ease-in duration-100"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                        @after-leave="query = ''"
                      >
                        <ComboboxOptions
                          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <div
                            v-if="
                              filteredSortingFilters.length === 0 &&
                              query !== ''
                            "
                            class="relative cursor-default select-none py-2 px-4 text-gray-700"
                          >
                            Nothing found.
                          </div>

                          <ComboboxOption
                            v-for="sortingFilter in filteredSortingFilters"
                            :key="sortingFilter.id"
                            v-slot="{ selected, active }"
                            as="template"
                            :value="sortingFilter"
                          >
                            <li
                              class="relative cursor-default select-none py-2 pl-10 pr-4"
                              :class="{
                                'bg-teal-600 text-white': active,
                                'text-gray-900': !active
                              }"
                            >
                              <span
                                class="block truncate"
                                :class="{
                                  'font-medium': selected,
                                  'font-normal': !selected
                                }"
                              >
                                {{ sortingFilter.name }}
                              </span>
                              <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                :class="{
                                  'text-white': active,
                                  'text-teal-600': !active
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
              <hr class="my-2" />
              <div
                v-if="items.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
              >
                <ItemCard
                  v-for="item in items"
                  :key="item._id"
                  :itemValue="item"
                  @open-modal="(info) => openModal(info)"
                />
              </div>
              <div v-else class="mt-20 flex items-center justify-center">
                <img src="img/itemNotFound.png" class="h-64" alt="" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog class="relative z-10" as="div" @close="closeModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ modalContent.name }}
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ modalContent.description }}
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';
import { CheckIcon, SelectorIcon, ChevronUpIcon } from '@heroicons/vue/solid';

const category = ref('');
const categoryPath = ref([]);
const categories = ref({});

const items = ref([]);
const staticFilters = ref([]);
// staticFilters.value = [
//   {
//     name: "filter1",
//     type: "default", //  default, radio, range, ...
//     values: [],
//   },
// ];
const selectedFilters = ref({});
//   {
//     filterName: selectedValue,
//   },

watch(
  selectedFilters,
  async () => {
    let tempItems = (await $fetch(`/api/items?category=${category.value._id}`))
      .data.items;

    for (const item of tempItems) {
      const products = (await $fetch(`/api/products?item=${item._id}`)).data
        .items;

      item.minPrice = Math.min(...products.map((o) => o.price));
      item.price = item.minPrice;
      item.maxPrice = Math.max(...products.map((o) => o.price));
    }
    tempItems = tempItems.filter(
      (item) => item.rating === selectedFilters.value.rating
    );
    items.value = tempItems;
  },
  { deep: true }
);

onMounted(async () => {
  category.value = (await $fetch(`/api/categories?name=wash`)).data.items[0];

  // ---- Category Path ---- //
  let current = category.value;
  categoryPath.value.push(current);
  while (current.parent) {
    current = (await $fetch(`/api/categories?_id=${current.parent}`)).data
      .items[0];
    categoryPath.value.push(current);
  }
  categoryPath.value.reverse();
  categoryPath.value.shift();

  // ---- Static Filters ---- //
  for (const category of categoryPath.value) {
    for (const attribute of category.attributes) {
      staticFilters.value.push({
        name: attribute,
        type: 'default',
        value: 1
      });
    }
  }

  // ---- Loading Items ---- //
  items.value = (
    await $fetch(`/api/items?category=${category.value._id}`)
  ).data.items;

  for (const item of items.value) {
    const products = (await $fetch(`/api/products?item=${item._id}`)).data
      .items;

    item.minPrice = Math.min(...products.map((o) => o.price));
    item.price = item.minPrice;
    item.maxPrice = Math.max(...products.map((o) => o.price));
  }

  // --- Categories --- //
  const expandNode = async (node) => {
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        node.children[i] = (
          await $fetch(`/api/categories?_id=${node.children[i]}`)
        ).data.items[0];
      }
      for (const child of node.children) {
        expandNode(child);
      }
    }
  };
  categories.value = (await $fetch(`/api/categories?name=main`)).data.items[0];
  expandNode(categories.value);
});

// ---- Sorting Filters ---- //
const sortingFilters = [
  { id: 1, name: 'price' },
  { id: 2, name: 'rating' }
];

const selected = ref('');
const query = ref('');

const filteredSortingFilters = computed(() =>
  query.value === ''
    ? sortingFilters
    : sortingFilters.filter((sortingFilter) =>
        sortingFilter.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
);

watch(selected, () => {
  items.value.sort((a, b) =>
    a[selected.value.name] > b[selected.value.name]
      ? 1
      : b[selected.value.name] > a[selected.value.name]
      ? -1
      : 0
  );
});

// ---- Dialog ---- //
const modalContent = ref({});
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal(info) {
  modalContent.value = info;
  isOpen.value = true;
}
</script>
