<template>
  <div>
    <Navbar />
    <section class="bg-light-600 bg-red-100 p-4">
      <div class="flex gap-2">
        <div class="w-80 flex flex-col gap-2">
          <SideNav />
        </div>

        <div class="bg-light-100 rounded p-2 shadow w-full">
          <h1>hello</h1>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import {
  ArchiveIcon,
  UserIcon,
  BookOpenIcon,
  BellIcon,
  HeartIcon
} from '@heroicons/vue/outline/index.js';
import { CheckIcon, SelectorIcon, ChevronUpIcon } from '@heroicons/vue/solid';
import { ref } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue';
</script>

<script>
import { useUser } from '/store/user';

const category = ref('');
const categoryPath = ref([]);

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

category.value = (await $fetch(`/api/categories?name=lavar`)).data.items[0];

// ---- Category Path ---- //
let current = category.value;
categoryPath.value.push(current);
while (current.parent) {
  current = (await $fetch(`/api/categories?_id=${current.parent}`)).data
    .items[0];
  categoryPath.value.push(current);
}
categoryPath.value.reverse();

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
      (item) => item.rating == selectedFilters.value.rating
    );
    items.value = tempItems;
  },
  { deep: true }
);

// ---- Loading Items ---- //
items.value = (
  await $fetch(`/api/items?category=${category.value._id}`)
).data.items;

// for (const item of items.value) {
//   const products = (await $fetch(`/api/products?item=${item._id}`)).data.items;

//   item.minPrice = Math.min(...products.map((o) => o.price));
//   item.price = item.minPrice;
//   item.maxPrice = Math.max(...products.map((o) => o.price));
// }

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

const people = [
  { name: 'Consumer' },
  { name: 'Provider' },
  { name: 'Transporter' }
];
const selectedPerson = ref(people[0]);

export default {
  name: 'ProfileView',
  data() {
    return {
      user: {},
      username: '',
      email: '',
      name: '',
      address: '',
      phone: '',
      credit_card: null,
      nif: '',
      password: ''
    };
  },
  async mounted() {
    const store = useUser();
    const user = store;
    const result = await $fetch(`/api/users?email=${user.user.email}`);
    this.user = result.data.items[0];
    // this.name =
  },
  methods: {
    deleteAcc() {
      fetch(`api/users/${this.user._id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
    },
    async updateInfo() {
      console.log(this.name);
      console.log(this.username);
      console.log(this.password);
      const res = await fetch(`api/users/${this.user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username === '' ? this.user.username : this.username,
          email: this.email === '' ? this.user.email : this.email,
          name: this.name === '' ? this.user.name : this.name,
          address: {
            street: this.address === '' ? this.user.address : this.address
          },
          phone: this.phone === '' ? this.user.phone : this.phone,
          nif: this.nif === '' ? this.user.nif : this.nif,
          password: this.password === '' ? this.user.password : this.password
        })
      });
      const res2 = await res.json();

      console.log(res2);
    }
  }
};
</script>
