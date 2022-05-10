<template>
  <div>
    <Navbar />
    <img src="/img/logo.png" alt="" srcset="" />

    <label class="required" for="user_name">Email</label>
    <input
      id="user_email"
      v-bind="email"
      required="required"
      title=" "
      class="form-control bg-dark"
      type="text"
      value=" "
      name="user[name]"
    />
    <button @click="updateInfo()">Update Profile Information</button>
    <!--  O input seria utilizado para os diferentes campos da conta do utilizador, por agora e so um para não ocupar muito espaço enquanto se testa -->

    <button @click="deleteAcc()">Delete Account</button>

    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data() {
    return {
      name: "Some name",
    };
  },
  mounted() {
    // this.name =
  },
  methods: {
    deleteAcc() {
      fetch(`api/users/${localStorage.getItem("id")}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    },
  },
  updateInfo() {
    fetch("api/users/", {
      method: "PUT",
      body: {
        username: this.email,
      },
    });
  },
};
</script>

<style></style>
