<template>
  <div class="h-screen">
    <Navbar />

    <form v-on:submit.prevent class="col-4 offset-4 bg-white rounded p-4">
      <h2>Login</h2>
      <div class="form-text">Please fill in this form to login to your account</div>
      <hr />
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" :class="calculateEmailClass" type="email"
          class="!border text-green-900 placeholder-green-700 text-sm rounded-lg block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
          id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div :class="calculateEmailFeedbackClass">
          {{ calculateEmailFeedback }}
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>

        <input v-model="password" type="password"
          class="!border text-green-900 placeholder-green-700 text-sm rounded-lg block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
          :class="calculatePasswordClass" id="exampleInputPassword1" />
        <div :class="calculatePasswordFeedbackClass">
          {{ calculatePasswordFeedback }}
        </div>
      </div>

      <input type="submit" @click="login" class="btn btn-primary w-100" name="" value="Continue" />
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      type: "consumer",
      email: null,
      password: null,
    };
  },
  computed: {
    calculateEmailClass() {
      if (this.email === null) return;
      return this.isValidEmail
        ? " bg-green-50 border-green-500"
        : " bg-red-50 border-red-500";
    },
    calculateEmailFeedbackClass() {
      if (this.email === null) return;
      return this.isValidEmail ? " text-green-500" : "text-red-500";
    },
    calculateEmailFeedback() {
      if (this.email === null) return;
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.email.match(regexEmail)) return "Must be a valid email";
      return "Looking good";
    },
    isValidEmail() {
      if (this.email === null) return;
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.email.match(regexEmail)) return false;
      return true;
    },
    calculatePasswordClass() {
      if (this.password === null) return;
      return this.isValidPassword
        ? " bg-green-50 border-green-500"
        : " bg-red-50 border-red-500";
    },
    calculatePasswordFeedbackClass() {
      if (this.password === null) return;
      return this.isValidPassword ? " text-green-500" : "text-red-500";
    },
    calculatePasswordFeedback() {
      if (this.password === null) return;
      if (this.password.length < 6) return "Must be at least 6 characters";
      return "Looking good";
    },
    isValidPassword() {
      if (this.password === null) return;
      if (this.password.length < 6) return false;
      return true;
    },
  },
  methods: {
    validPassword() {
      return this.password.length >= 6;
    },
    validEmail() {
      const re = /(.+)@(.+)\.(.+)/;
      return re.test(this.email);
    },
    async login() {
      console.log(this.email);
      if (this.validEmail() && this.validPassword()) {
        const res = await fetch(`/api/users?email=${this.email}&password=${this.password}`);
        const resJson = await res.json();
        console.log(resJson);
        if (resJson.data.items.length === 1) {
          const res = await fetch(`/api/authenticate`, {
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
            alert("Invalid username or password");
          } else {
            localStorage.setItem("token", res2.data.items);
            alert("User was successfully logged in");
            this.$router.push("orders");
          }
        } else {
          alert("Invalid email or password");
        }
      } else {
        alert("Invalid fields");
      }
    },
  },
};
</script>
