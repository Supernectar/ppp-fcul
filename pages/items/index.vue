<template>
	<div>
		<Navbar />
		<div class="row">
			<div v-for="item in items" :key="item._id" class="col">
				<div class="card" style="width: 18rem">
					<img src="https://picsum.photos/600/300/?image=25" class="card-img-top" />
					<div class="card-body">
						<h5 class="card-title">
							{{ item.name }}
						</h5>
						<p class="card-text">
							{{ item.description }}
						</p>
						<a
						:href = "'products/' + item._id"
						class="btn btn-primary"
						>
							See available products
						</a>
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
			items :[]
		}
    },
	async mounted() {
		const res = await fetch('api/items', {
			method: 'GET'
		});
		
		const res2 = await res.json()
		this.items = res2.data.items;
	},

	methods: {
	}
};
</script>

<style></style>
