<template>
	<div>
		<Navbar />
		<section class="bg-light-600 bg-red-100 p-4">
			<div class="w-auto m-auto bg-white rounded p-12 m-12">
				<h2>Orders</h2>
				<div class="flex flex-col">
					<div
						class="overflow-x-auto sm:-mx-6 lg:-mx-8"
					>
						<div
							class="py-2 inline-block min-w-full sm:px-6 lg:px-8"
						>
							<div
								class="overflow-x-auto"
							>
								<table
									class="min-w-full"
								>
									<thead
										class="bg-white border-b"
									>
										<tr>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												#
											</th>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Number
												of
												items
											</th>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Price
											</th>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Status
											</th>
										</tr>
									</thead>
									<tbody>
										<tr
											v-for="(
												order,
												index
											) in orders"
											:key="
												index
											"
											class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
										>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
											>
												{{
													index +
													1
												}}
											</td>
											<td
												class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
											>
												{{
													order.numberItems
												}}
											</td>
											<td
												class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
											>
												{{
													order.price
												}}
											</td>
											<td
												class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
											>
												{{
													order.status
												}}
											</td>
											<div
												class="flex space-x-2 justify-center"
											>
												<div>
													<button
														type="button"
														class="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
														@click="
															cancelOrder(
																order
															)
														"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="w-6 mx-auto"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															stroke-width="2"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
															/>
														</svg>
													</button>
												</div>
											</div>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script setup>
import { useUser } from '~/store/user';
const router = useRouter();
const store = useUser();

let orders = [];
orders = (await $fetch(`/api/users/${store.user.userId}/orders`)).data.items;
console.log(orders);

/*
function goToOrder(order) {
	if (order._id != undefined) {
		router.push(`/profile/consumer/orders/${order._id}`);
	}
} */

async function cancelOrder(order) {
	const aaa = await $fetch(
		`/api/users/${store.user.userId}/orders/${order._id}`,
		{
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}
	);
	console.log(aaa);
}
</script>
