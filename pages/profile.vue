<template>
	<div class="bg-success">
		<Navbar />

		<div class="m-4 bg-light rounded p-4 row">
			<div class="col-2">
				<div>
					<img
						src="/img/logo.png"
						width="70"
						class="rounded-circle border"
						alt=""
					/>
					<p>My username</p>
				</div>
				<hr />
				<div>
					<ul class="list-group">
						<button
							class="list-group-item list-group-item-action"
						>
							Settings
						</button>
						<button
							class="list-group-item list-group-item-action"
						>
							My consumer info
						</button>
						<button
							class="list-group-item list-group-item-action"
						>
							My supplier info
						</button>
						<button
							class="list-group-item list-group-item-action"
						>
							My transporter info
						</button>
						<button
							class="list-group-item list-group-item-action"
						>
							Others...
						</button>
					</ul>
				</div>
			</div>
			<form v-on:submit.prevent class="col">
				<h2>Profile</h2>
				<div class="mb-3">
					<label
						for="exampleInputName1"
						class="form-label"
						>Name</label
					>

					<input
						v-model="name"
						type="text"
						class="form-control"
						:class="calculateNameClass"
						id="exampleInputName1"
					/>
					<div
						:class="
							calculateNameFeedbackClass
						"
					>
						{{ calculateNameFeedback }}
					</div>
				</div>

				<div class="mb-3">
					<label
						for="exampleInputAddress1"
						class="form-label"
						>Address</label
					>

					<input
						v-model="address"
						type="text"
						class="form-control"
						id="exampleInputAddress1"
					/>
				</div>

				<div class="mb-3">
					<label
						for="exampleInputPhone1"
						class="form-label"
						>Phone</label
					>

					<input
						v-model="phone"
						type="text"
						class="form-control"
						id="exampleInputPhone1"
					/>
				</div>

				<div class="mb-3">
					<label
						for="exampleInputCredit1"
						class="form-label"
						>Credit card</label
					>

					<input
						v-model="credit_card"
						type="text"
						class="form-control"
						id="exampleInputCredit1"
					/>
				</div>

				<div class="mb-3">
					<label
						for="exampleInputNIF1"
						class="form-label"
						>NIF</label
					>

					<input
						v-model="nif"
						type="text"
						class="form-control"
						id="exampleInputNIF1"
					/>
				</div>

				<div class="mb-3">
					<label
						for="exampleInputPassword1"
						class="form-label"
						>Password</label
					>

					<input
						v-model="password"
						type="password"
						class="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<input
					type="submit"
					@click="updateInfo"
					class="btn btn-success w-10"
					name=""
					value="Update user"
				/>
				<!--  O input seria utilizado para os diferentes campos da conta do utilizador, por agora e so um para não ocupar muito espaço enquanto se testa -->
				<hr />
				<input
					type="submit"
					@click="deleteAcc"
					class="btn btn-danger w-10"
					name=""
					value="Delete account"
				/>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProfileView',
	data() {
		return {
			name: null,
			address: null,
			phone: null,
			credit_card: null,
			nif: null,
			password: null
		};
	},
	computed: {
		calculateNameClass() {
			if (this.name === null) return;
			return this.isValidName ? 'is-valid' : 'is-invalid';
		},
		calculateNameFeedbackClass() {
			if (this.name === null) return;
			return this.isValidName
				? 'valid-feedback'
				: 'invalid-feedback';
		},
		isValidName() {
			if (this.name === null) return;
			if (this.name.length < 3) return false;
			return true;
		}
	},
	mounted() {
		// this.name =
	},
	methods: {
		deleteAcc() {
			fetch(`api/users/${localStorage.getItem('id')}`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' }
			});
		}
	},
	async updateInfo() {
		await fetch(`api/users/${localStorage.getItem('id')}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: this.name,
				address: this.address,
				phone: this.phone,
				credit_card: this.credit_card,
				nif: this.nif,
				password: this.password
			})
		});
	}
};
</script>

<style></style>
