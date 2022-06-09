<template>
	<div>
		<Navbar />
		<section class="bg-light-600 bg-red-100 p-4">
			<div class="flex gap-2">
				<div class="w-80 flex flex-col gap-2">
					<SideNav />
				</div>
				<div
					class="bg-light-100 rounded p-2 shadow w-full"
				>
					<div>
						-referencia à ultima encomenda
						realizada
					</div>
					<div>
						-estatistica relativamente ao
						total de recursos gerados em
						encomendas (nos ultimos x dias,
						ou desda primeira encomenda)
					</div>
					<div>-recomendações de produtos?</div>
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
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid';
import { ref } from 'vue';
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption
} from '@headlessui/vue';
import { useUser } from '~/store/user';

let category = ref('');
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
		let tempItems = (
			await $fetch(
				`/api/items?category=${category.value._id}`
			)
		).data.items;

		for (const item of tempItems) {
			const products = (
				await $fetch(`/api/products?item=${item._id}`)
			).data.items;

			item.minPrice = Math.min(
				...products.map((o) => o.price)
			);
			item.price = item.minPrice;
			item.maxPrice = Math.max(
				...products.map((o) => o.price)
			);
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

let selected = ref('');
let query = ref('');

let filteredSortingFilters = computed(() =>
	query.value === ''
		? sortingFilters
		: sortingFilters.filter((sortingFilter) =>
				sortingFilter.name
					.toLowerCase()
					.replace(/\s+/g, '')
					.includes(
						query.value
							.toLowerCase()
							.replace(/\s+/g, '')
					)
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
</script>
