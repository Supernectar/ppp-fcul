<template>
  <div>
    <Navbar />
    <section class="bg-light-600 bg-red-100 p-4">
      <div class="flex gap-2">
        <div class="w-80 flex flex-col gap-2">
          <div class="bg-light-100 rounded p-2 shadow">
            <ul>
              <li>
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
                              :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'block truncate',
                              ]"
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
              </li>
            </ul>
            <hr class="my-2" />
            <ul>
              <li class="mt-2">
                <NuxtLink to="/profile">
                  <button
                    class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:(bg-black bg-opacity-5)"
                  >
                    <ArchiveIcon
                      class="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                    My Account
                  </button>
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/profile/edit">
                  <button
                    class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:(bg-black bg-opacity-5)"
                  >
                    <UserIcon class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    My Personal Information
                  </button>
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/profile">
                  <button
                    class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:(bg-black bg-opacity-5)"
                  >
                    <BookOpenIcon
                      class="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                    My Orders
                  </button>
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/profile">
                  <button
                    class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:(bg-black bg-opacity-5)"
                  >
                    <HeartIcon class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    Wishlist
                  </button>
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/profile">
                  <button
                    class="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:(bg-black bg-opacity-5)"
                  >
                    <BellIcon class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    Notifications
                  </button>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-light-100 rounded p-2 shadow w-full">dsaiojfoisajflksdaç</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
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
} from "@headlessui/vue";
import {
  ChevronDownIcon,
  ArchiveIcon,
  DuplicateIcon,
  CogIcon,
  PencilIcon,
  LogoutIcon,
  UserIcon,
  ShoppingCartIcon,
  BookOpenIcon,
  BellIcon,
  SearchIcon,
  HeartIcon,
} from "@heroicons/vue/outline/index.js";
import { CheckIcon, SelectorIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

let category = ref("");
let categoryPath = ref([]);

let items = ref([]);
let staticFilters = ref([]);
// staticFilters.value = [
//   {
//     name: "filter1",
//     type: "default", //  default, radio, range, ...
//     values: [],
//   },
// ];
let selectedFilters = ref({});
//   {
//     filterName: selectedValue,
//   },

category.value = (await $fetch(`/api/categories?name=lavar`)).data.items[0];

// ---- Category Path ---- //
let current = category.value;
categoryPath.value.push(current);
while (current.parent) {
  current = (await $fetch(`/api/categories?_id=${current.parent}`)).data.items[0];
  categoryPath.value.push(current);
}
categoryPath.value.reverse();

// ---- Static Filters ---- //
for (const category of categoryPath.value) {
  for (const attribute of category.attributes) {
    staticFilters.value.push({ name: attribute, type: "default", value: 1 });
  }
}

watch(
  selectedFilters,
  async () => {
    let tempItems = (await $fetch(`/api/items?category=${category.value._id}`)).data
      .items;

    for (const item of tempItems) {
      const products = (await $fetch(`/api/products?item=${item._id}`)).data.items;

      item.minPrice = Math.min(...products.map((o) => o.price));
      item.price = item.minPrice;
      item.maxPrice = Math.max(...products.map((o) => o.price));
    }
    tempItems = tempItems.filter((item) => item.rating == selectedFilters.value.rating);
    items.value = tempItems;
  },
  { deep: true }
);

// ---- Loading Items ---- //
items.value = (await $fetch(`/api/items?category=${category.value._id}`)).data.items;

// for (const item of items.value) {
//   const products = (await $fetch(`/api/products?item=${item._id}`)).data.items;

//   item.minPrice = Math.min(...products.map((o) => o.price));
//   item.price = item.minPrice;
//   item.maxPrice = Math.max(...products.map((o) => o.price));
// }

// ---- Sorting Filters ---- //
const sortingFilters = [
  { id: 1, name: "price" },
  { id: 2, name: "rating" },
];

let selected = ref("");
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

watch(selected, () => {
  items.value.sort((a, b) =>
    a[selected.value.name] > b[selected.value.name]
      ? 1
      : b[selected.value.name] > a[selected.value.name]
      ? -1
      : 0
  );
});

const people = [{ name: "Consumer" }, { name: "Provider" }, { name: "Transporter" }];
const selectedPerson = ref(people[0]);
</script>
r
