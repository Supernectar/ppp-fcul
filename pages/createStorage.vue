<template>
  <div>
    <Navbar />
    <b-form>
      <b-form-group v-slot="{ ariaDescribedby }" label="Select Storages to add product:">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-input v-model="name" placeholder="Storage name"></b-form-input>
      <b-form-input
        v-model="location"
        placeholder="Storage location (TODO)"
      ></b-form-input>
      <b-form-input v-model="visibility" placeholder="private?"></b-form-input>
      <button @click="createStorage">ADD</button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      location: "",
      visibility: "",
    };
  },
  methods: {
    async createStorage() {
      console.log(localStorage.getItem("token"));

      await fetch(
        "http://localhost:5000/users/" +
          1 + //TODO: id do user, a partir do jwt?
          "storages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({
            name: this.name,
            popularity: this.popularity,
            location: this.location,
            visibility: this.visibility,
          }),
        }
      );
    },
  },
};
</script>

<style></style>
