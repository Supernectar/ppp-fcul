<template>
  <div>
    <Navbar />
    <div class="form-group">
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="Insert your email here"
        required
      />
    </div>

    <div class="form-group">
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="Insert your password here"
        required
      />
    </div>
    <br />
    <!-- Para apagar depois do Css -->
    <button @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async login() {
      console.log(this.email);
      const res = await fetch(`${this.$store.state.url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      const res2 = await res.json();
      console.log(res2);
      // const error = "User does not exist";
      if (res2.error === "Invalid username or password") {
        console.log("User does not exist");
      } else {
        localStorage.setItem("token", res2);
        this.$router.push("orders");
      }
    },
  },
};
</script>
