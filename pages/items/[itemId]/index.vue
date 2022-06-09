<template>
	<Navbar />
	<section class="bg-light-600 bg-red-100 p-4">
		<div class="flex gap-2">
			<div class="bg-light-100 rounded p-2 shadow w-full">
				<div class="col-start-2 col-span-5">
					Supercata>subcata>cata
				</div>
				<div>
					<div
						class="flex justify-start gap-4 mx-60 h-80"
					>
						<img
							src="/img/627.png"
							class="h-full rounded-t-lg h-full m-auto border"
						/>
						<!-- <div class="h-60 bg-light-100 rounded p-2 shadow w-full"></div> -->
						<div
							class="flex flex-col bg-gray-50"
						>
							<p class="font-bold">
								{{ item.name }}
							</p>
							<div
								class="overflow-auto"
							>
								<p>
									{{
										item.description
									}}
								</p>
								<div
									v-for="(
										i,
										index
									) in item.attributes"
									:key="
										index
									"
									:id="i"
								>
									<p>
										{{
											index
										}}:
										{{
											i
										}}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="rounded-lg shadow hidden md:block mx-60 mt-4"
					>
						<table class="">
							<thread
								class="bg-gray-500 border-b-2 border-gray-500"
							>
								<tr>
									<th
										class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
									>
										Suplier
									</th>
									<th
										class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
									>
										Price
									</th>
									<th
										class="w-92 p-2 text-sm text-gray-200 whitespace-nowrap"
									>
										Quantity
										available
									</th>
								</tr>

								<tbody
									class="divide-y divide-gray-300"
								>
									<tr
										v-for="(
											product,
											index
										) in products"
										:key="
											index
										"
										class="bg-white"
										:id="
											product
										"
									>
										<td
											class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
										>
											{{
												product
													.suplier
													.username
											}}
											<br />

											{{
												product
													.suplier
													.email
											}}
										</td>
										<td
											class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
										>
											{{
												product.price
											}}€
										</td>
										<td
											class="p-8 text-sm text-gray-700 whitespace-nowrap text-center"
										>
											{{
												product.quantity
											}}
										</td>
										<td>
											<button
												type="button"
												class="text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
											>
												Add
												to
												cart
											</button>
										</td>
									</tr>
								</tbody>
							</thread>
						</table>
						<br />
					</div>
				</div>
			</div>
		</div>
	</section>
	<Footer />
</template>

<script>
// const route = useRoute();
// const products = ref("");

// const { data } = await useFetch("/api/items/" + route.params.productId, {
//   method: "GET",
// });

// // const res2 = await res.json();
// console.log(data._rawValue);
// // products = data._rawValue.data.items;

export default {
	name: 'ProductsView',
	data() {
		return {
			item: {},
			products: []
		};
	},
	//http://localhost:3000/items/629dfc18c3c6375a112cf3a2
	async mounted() {
		const res = await $fetch(
			'/api/items/' + this.$route.params.itemId,
			{
				method: 'GET'
			}
		);
		this.item = res.data.items[0];
		console.log('b' + this.item);

		const res1 = await $fetch(
			'/api/products?item=' + this.$route.params.itemId,
			{
				method: 'GET'
			}
		);
		this.products = res1.data.items;
		console.log('c' + this.products);
	},

	methods: {}
};
</script>

<style></style>
