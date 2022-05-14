<template>
	<div class="bg-success">
		<Navbar />
		<div class="row">
			<div class="col-2 m-4 p-4 rounded bg-light">
				<h5>FILTROS</h5>
				<h6>Marca</h6>
				<div v-for="brand in brands" class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<label
						class="form-check-label"
						for="flexCheckDefault"
					>
						{{ brand }}
					</label>
				</div>
			</div>
			<div class="col row">
				<div
					v-for="item in items"
					:key="item._id"
					class="col"
				>
					<div class="card" style="width: 18rem">
						<img
							src="https://picsum.photos/600/300/?image=25"
							class="card-img-top"
						/>
						<div class="card-body">
							<h5 class="card-title">
								{{ item.name }}
							</h5>
							<a
								:href="
									'products/' +
									item._id
								"
								class="btn btn-primary"
							>
								See available
								products
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ItemsView',
	data() {
		return {
			items: [],
			brands: []
		};
	},
	async mounted() {
		const res = await fetch('api/items', {
			method: 'GET'
		});

		const res2 = await res.json();
		console.log(res2);
		this.items = res2.data.items;
		this.getBrands();
	},

	methods: {
		getBrands() {
			console.log('hellooo??', this.items.length);
			for (var i = 0; i < this.items.length; i++) {
				//console.log('aaaa: ', this.items[i].brand);
				const brand = this.items[i].brand;
				if (this.brands.indexOf(brand) == -1) {
					this.brands.push(brand);
				}
			}
		}
	}
};
</script>

<style></style>
