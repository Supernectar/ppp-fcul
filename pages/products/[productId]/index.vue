<template>
	<div>
		<Navbar />
        {{this.$route.params.productId}}
		<div class="row">
			<div v-for="product in products" :key="product._id" class="col">
				<div class="card" style="width: 18rem">
					<img src="https://picsum.photos/600/300/?image=25" class="card-img-top" />
					<div class="card-body">
						<h5 class="card-title">
							{{ product.name }}
						</h5>
						<p class="card-text">
							{{ product.description }}
						</p>
							See available products
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductsView',
	  data() {
		return {
			products :[]
		}
    },
	async mounted() {
		const res = await fetch('api/products?' + this.$route.params.productId, {
			method: 'GET'
		});
		
		const res2 = await res.json()
		this.products = res2.data.products;
	},

	methods: {
	}
};
</script>

<style></style>
