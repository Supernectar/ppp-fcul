<template>
	<div id="ez">
		<Navbar></Navbar>
		<div class="bg-light m-4 p-4 rounded">
			<h1>Supercategoria</h1>
			<hr />
			<div class="row">
				<div class="col">
					<h4>categoria</h4>
					<ul>
						<li>
							<NuxtLink
								to=""
							></NuxtLink>
						</li>
						<li>subcategoria</li>
						<li>subcategoria</li>
						<li>subcategoria</li>
					</ul>
				</div>
				<div class="col">
					<h4>categoria</h4>
					<ul>
						<li>subcategoria</li>
						<li>subcategoria</li>
						<li>subcategoria</li>
						<li>subcategoria</li>
					</ul>
				</div>
				<div class="col">
					<h4>categoria</h4>
					<ul>
						<li>subcategoria</li>
						<li>subcategoria</li>
						<li>subcategoria</li>
						<li>subcategoria</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const categories = [
	{
		name: 'SuperCategory1',
		sub: [
			{
				name: 'Category1',
				sub: [
					{
						name: 'SubCategory1'
					},
					{
						name: 'SubCategory2'
					},
					{
						name: 'SubCategory3'
					}
				]
			},
			{
				name: 'Category2',
				sub: [
					{
						name: 'SubCategory1'
					},
					{
						name: 'SubCategory2'
					},
					{
						name: 'SubCategory3'
					}
				]
			}
		]
	}
];
</script>

<style>
#ez {
	height: 100vh;
	background-color: #a4ffef;
	background-image: url("data:image/svg+xml,%3Csvg width='32' height='26' viewBox='0 0 32 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0v3.994C14 7.864 10.858 11 7 11c-3.866 0-7-3.138-7-7.006V0h2v4.005C2 6.765 4.24 9 7 9c2.756 0 5-2.236 5-4.995V0h2zm0 26v-5.994C14 16.138 10.866 13 7 13c-3.858 0-7 3.137-7 7.006V26h2v-6.005C2 17.235 4.244 15 7 15c2.76 0 5 2.236 5 4.995V26h2zm2-18.994C16 3.136 19.142 0 23 0c3.866 0 7 3.138 7 7.006v9.988C30 20.864 26.858 24 23 24c-3.866 0-7-3.138-7-7.006V7.006zm2-.01C18 4.235 20.244 2 23 2c2.76 0 5 2.236 5 4.995v10.01C28 19.765 25.756 22 23 22c-2.76 0-5-2.236-5-4.995V6.995z' fill='%2302a55d' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
