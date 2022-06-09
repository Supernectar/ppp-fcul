<template>
	<div>
		<Navbar />
		<section class="bg-light-600 bg-red-100 px-4 pb-4">
			<div class="text-xl py-2">
				<!-- {{ categoryPath }}
        <NuxtLink
          to="/categories"
          class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
        >
          Categories
        </NuxtLink> -->
				<span
					v-for="(category, i) in categoryPath"
					:key="i"
				>
					<span v-if="i != 0">></span>
					<NuxtLink
						to="/categories"
						class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
					>
						{{ category.name }}
					</NuxtLink>
				</span>
			</div>
			<div class="flex gap-2">
				<div class="w-80 flex flex-col gap-2">
					<div
						class="bg-light-100 rounded p-2 shadow"
					>
						<Disclosure
							v-slot="{ open }"
							defaultOpen
						>
							<DisclosureButton
								class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							>
								<span
									>Categories</span
								>
								<ChevronUpIcon
									:class="
										open
											? 'rotate-180 transform'
											: ''
									"
									class="h-5 w-5 text-purple-500"
								/>
							</DisclosureButton>
							<DisclosurePanel
								class="px-4 pt-4 pb-2 text-sm text-gray-500"
							>
								<ul>
									<li>
										cata1
									</li>
									<li>
										cata2
									</li>
									<li>
										cata3
									</li>
								</ul>
							</DisclosurePanel>
						</Disclosure>
					</div>
					<div
						class="bg-light-100 rounded p-2 shadow"
					>
						<Disclosure
							v-slot="{ open }"
							defaultOpen
						>
							<DisclosureButton
								class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							>
								<span
									>Producer</span
								>
								<ChevronUpIcon
									:class="
										open
											? 'rotate-180 transform'
											: ''
									"
									class="h-5 w-5 text-purple-500"
								/>
							</DisclosureButton>
							<DisclosurePanel
								class="px-4 pt-4 pb-2 text-sm text-gray-500"
							>
								<ul>
									<li>
										<div
											class="form-check"
										>
											<input
												v-model="
													selectedFilters.provider
												"
												class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
												type="radio"
												name="flexRadioDefault"
												value="provider1"
												id="flexRadioDefault1"
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
										<div
											class="form-check"
										>
											<input
												v-model="
													selectedFilters.provider
												"
												class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
												type="radio"
												name="flexRadioDefault"
												value="provider2"
												id="flexRadioDefault2"
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
							as="div"
							class="mt-2"
							v-slot="{ open }"
							defaultOpen
						>
							<DisclosureButton
								class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							>
								<span
									>Brand</span
								>
								<ChevronUpIcon
									:class="
										open
											? 'rotate-180 transform'
											: ''
									"
									class="h-5 w-5 text-purple-500"
								/>
							</DisclosureButton>
							<DisclosurePanel
								class="px-4 pt-4 pb-2 text-sm text-gray-500"
							>
								<ul>
									<li>
										<div
											class="form-check"
										>
											<input
												class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
												type="radio"
												id="brand1"
												value="One"
												v-model="
													selectedFilters.brand
												"
											/>
											<label
												class="form-check-label inline-block text-gray-800"
												for="brand1"
												>brand1</label
											>
										</div>
									</li>
									<li>
										<div
											class="form-check"
										>
											<input
												class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
												type="radio"
												id="brand2"
												value="Two"
												v-model="
													selectedFilters.brand
												"
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
							as="div"
							class="mt-2"
							v-slot="{ open }"
							defaultOpen
						>
							<DisclosureButton
								class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							>
								<span
									>Price</span
								>
								<ChevronUpIcon
									:class="
										open
											? 'rotate-180 transform'
											: ''
									"
									class="h-5 w-5 text-purple-500"
								/>
							</DisclosureButton>
							<DisclosurePanel
								class="px-4 pt-4 pb-2 text-sm text-gray-500"
							>
								<ul>
									<li>
										<div
											class="form-check"
										>
											<input
												class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
												type="radio"
												id="price1"
												value="One"
												v-model="
													selectedFilters.price
												"
											/>
											<label
												class="form-check-label inline-block text-gray-800"
												for="price1"
												>0-20€</label
											>
										</div>
									</li>
									<li>
										<div
											class="form-check"
										>
											<input
												class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
												type="radio"
												id="price2"
												value="Two"
												v-model="
													selectedFilters.price
												"
											/>
											<label
												class="form-check-label inline-block text-gray-800"
												for="price2"
												>20-40€</label
											>
											<!-- <input
                        class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        value="20-40€"
                        id="price2"
                        v-model="selectedFilters.price"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="price2"
                      >
                        20-40€
                      </label> -->
										</div>
									</li>
									<li>
										<div
											class="form-check"
										>
											<input
												class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
												type="radio"
												value="Three"
												id="price3"
												v-model="
													selectedFilters.price
												"
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
							as="div"
							class="mt-2"
							v-slot="{ open }"
							defaultOpen
						>
							<DisclosureButton
								class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							>
								<span
									>Rating</span
								>
								<ChevronUpIcon
									:class="
										open
											? 'rotate-180 transform'
											: ''
									"
									class="h-5 w-5 text-purple-500"
								/>
							</DisclosureButton>
							<DisclosurePanel
								class="px-4 pt-4 pb-2 text-sm text-gray-500"
							>
								<ul>
									<li
										v-for="i in 6"
									>
										<input
											class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											type="radio"
											:value="
												i -
												1
											"
											:id="
												'rating' +
												i
											"
											v-model="
												selectedFilters.rating
											"
										/>
										<label
											class="form-check-label inline-block text-gray-800"
											:for="
												'rating' +
												i
											"
										>
											<ul
												class="flex"
											>
												<li
													v-for="j in 5"
												>
													<svg
														v-if="
															j <
															i
														"
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
							v-for="(
								staticFilter,
								index
							) in staticFilters"
							:key="index"
							as="div"
							class="mt-2"
							v-slot="{ open }"
							defaultOpen
						>
							<DisclosureButton
								class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							>
								<span>{{
									staticFilter.name
								}}</span>
								<ChevronUpIcon
									:class="
										open
											? 'rotate-180 transform'
											: ''
									"
									class="h-5 w-5 text-purple-500"
								/>
							</DisclosureButton>
							<DisclosurePanel
								class="px-4 pt-4 pb-2 text-sm text-gray-500"
							>
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
				<div
					class="bg-light-100 rounded p-2 shadow w-full"
				>
					<div
						class="flex justify-between items-center"
					>
						<div class="flex items-center">
							<div>
								<span
									class="pr-2"
									>{{
										category.name
									}}</span
								>
								<span
									class="text-gray-400"
									>({{
										items.length
									}}
									results)</span
								>
							</div>
							<div
								class="w-[1px] h-[20px] bg-gray-400 mx-2"
							></div>
							<form
								@submit.prevent
								class="text-center"
							>
								<label
									for="default-search1"
									class="mb-2 text-sm font-medium text-gray-900 sr-only"
									>Search</label
								>
								<div
									class="relative"
								>
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
						<div
							class="flex items-center justify-end"
						>
							<p class="px-2">
								sort by:
							</p>
							<Combobox
								v-model="
									selected
								"
								class="w-30 z-1"
							>
								<div
									class="relative mt-1"
								>
									<div
										class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
									>
										<ComboboxInput
											class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
											:displayValue="
												(
													sortingFilter
												) =>
													sortingFilter.name
											"
											@change="
												query =
													$event
														.target
														.value
											"
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
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
										@after-leave="
											query =
												''
										"
									>
										<ComboboxOptions
											class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
										>
											<div
												v-if="
													filteredSortingFilters.length ===
														0 &&
													query !==
														''
												"
												class="relative cursor-default select-none py-2 px-4 text-gray-700"
											>
												Nothing
												found.
											</div>

											<ComboboxOption
												v-for="sortingFilter in filteredSortingFilters"
												as="template"
												:key="
													sortingFilter.id
												"
												:value="
													sortingFilter
												"
												v-slot="{
													selected,
													active
												}"
											>
												<li
													class="relative cursor-default select-none py-2 pl-10 pr-4"
													:class="{
														'bg-teal-600 text-white':
															active,
														'text-gray-900':
															!active
													}"
												>
													<span
														class="block truncate"
														:class="{
															'font-medium':
																selected,
															'font-normal':
																!selected
														}"
													>
														{{
															sortingFilter.name
														}}
													</span>
													<span
														v-if="
															selected
														"
														class="absolute inset-y-0 left-0 flex items-center pl-3"
														:class="{
															'text-white':
																active,
															'text-teal-600':
																!active
														}"
													>
														<CheckIcon
															class="h-5 w-5"
															aria-hidden="true"
														/>
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
						class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"
					>
						<NuxtLink
							v-for="item in items"
							:key="item._id"
							:to="{
								path:
									'/items/' +
									item._id,

								query: {
									category: category._id
								}
							}"
							class="group hover:shadow rounded overflow-hidden"
						>
							<div
								class="p-2 overflow-hidden"
							>
								<img
									src="img/627.png"
									class="object-contain scale-75 group-hover:scale-100 transition-all m-auto"
								/>
							</div>

							<div
								class="p-2 bg-white"
							>
								<h5
									class="font-semibold text-left"
								>
									{{
										item.name
									}}
								</h5>
								<h6
									class="text-left"
								>
									{{
										item.brand
									}}
								</h6>
								<div
									class="flex items-center justify-between"
								>
									<ul
										class="flex"
									>
										<li
											v-for="i in 5"
											:key="
												i
											"
										>
											<svg
												v-if="
													item.rating <
													i
												"
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
									<div
										class="text-gray-500"
									>
										(23)
									</div>
								</div>
								<div
									class="flex"
								>
									<p>
										{{
											item.minPrice
										}}€
										-
										{{
											item.maxPrice
										}}€
									</p>
								</div>

								<!-- <a
									:href="
										'products/' +
										item._id
									"
									class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								>
									See
									available
									products
								</a> -->
							</div>
						</NuxtLink>
					</div>
					<div
						class="mt-20 flex items-center justify-center"
						v-else
					>
						<img
							src="img/itemNotFound.png"
							class="h-64"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
		<Footer />
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
	DisclosurePanel
} from '@headlessui/vue';
import { CheckIcon, SelectorIcon, ChevronUpIcon } from '@heroicons/vue/solid';

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

for (const item of items.value) {
	const products = (await $fetch(`/api/products?item=${item._id}`)).data
		.items;

	item.minPrice = Math.min(...products.map((o) => o.price));
	item.price = item.minPrice;
	item.maxPrice = Math.max(...products.map((o) => o.price));
}

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
