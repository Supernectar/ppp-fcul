<template>
	<div class="h-screen">
		<Navbar />
		<div class="row">
			<div class="col-2 m-4 p-4 rounded bg-light">
				<h5>FILTROS</h5>
				<br />
				<h6>Marca</h6>
				<div
					v-for="(brand, index) in filters2"
					:key="index"
					class="form-check"
					id="marcas"
				>
					<input
						class="form-check-input"
						type="checkbox"
						v-model="filters"
						:value="brand"
						:id="'flexCheckDefault' + brand"
					/>
					<label
						class="form-check-label"
						:for="
							'flexCheckDefault' +
							brand
						"
					>
						{{ brand }}
					</label>
				</div>

				<br />
				<h6>Produtor</h6>
				<div
					v-for="(producer, index) in producers"
					:key="index"
					class="form-check"
				>
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
						{{ producer }}
					</label>
				</div>

				<br />
			</div>
			<div class="col row">
				<p>
					{{ this.$route.params.superName }} >
					{{ this.$route.params.cateName }} >
					{{ this.$route.params.subName }}
				</p>
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
			allItems: [],
			filters: [],
			filters2: [],
			items: [],
			brands: [],
			producers: [],
			subName: ''
		};
	},
	async mounted() {
		const res3 = await fetch(
			`/api/items?category=${this.$route.params.subId}`,
			{
				method: 'GET'
			}
		);
		console.log('fetch');
		console.log(res3);
		const res4 = await res3.json();
		this.allItems = res4.data.items;
		const items = res4.data.items;
		/*
    const res = await fetch("api/items", {
      method: "GET",
    });
    const res2 = await res.json();

    this.allItems = res2.data.items;
    const items = res2.data.items;
	*/
		for (let i = 0; i < items.length; i++) {
			if (!this.filters2.includes(items[i].brand))
				this.filters2.push(items[i].brand);
		}

		//this.items = res2.data.items;
		this.items = res4.data.items;
		let result = this.allItems;

		if (this.filters.length != 0) {
			result = this.items.filter((el) =>
				this.filters.includes(el.brand)
			);
		}

		this.items = result;
		/*
		if (this.items.length == 0) {
			this.items = this.allItems;
		}*/
	},
	watch: {
		filters() {
			let result = this.allItems;
			if (this.filters.length != 0) {
				result = this.items.filter((el) =>
					this.filters.includes(el.brand)
				);
			}

			this.items = result;
			if (this.items.length == 0) {
				this.items == allItems;
			}
		}
	},

	methods: {
		getFilters() {
			for (var i = 0; i < this.items.length; i++) {
				//get brands
				const brand = this.items[i].brand;
				if (this.brands.indexOf(brand) == -1) {
					this.brands.push(brand);
				}
				//get producers
				const producer = this.items[i].producer;
				if (this.producers.indexOf(producer) == -1) {
					this.producers.push(producer);
				}
			}
		}
	}
};
</script>

<style></style>
