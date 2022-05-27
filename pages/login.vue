<template>
  <div class="h-screen">
    <Navbar />

    <div class="block m-auto p-6 rounded-lg shadow-lg bg-white max-w-md">
      <h2>Login</h2>
      <small class="block mt-1 text-xs text-gray-600"
        >Please fill in this form to login to your account</small
      >
      <hr class="my-2" />
      <form v-on:submit.prevent>
        <div class="form-group mb-6">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            v-model="email"
            :class="calculateEmailClass"
            type="email"
            class="!border text-sm rounded-lg block w-full p-2.5"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your email(Ex: example@email.com)"
          />
          <div :class="calculateEmailFeedbackClass">
            {{ calculateEmailFeedback }}
          </div>
        </div>
        <div class="form-group mb-6">
          <label for="password" class="form-label">Password</label>

          <input
            v-model="password"
            type="password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            :class="calculatePasswordClass"
            id="password"
            placeholder="Password"
          />
          <div :class="calculatePasswordFeedbackClass">
            {{ calculatePasswordFeedback }}
          </div>
        </div>
        <div class="form-group form-check text-center mb-6">
          <input
            type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck25"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="exampleCheck25"
            >Subscribe to our newsletter</label
          >
        </div>
        <button
          type="submit"
          @click="login"
          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Sign up
        </button>
      </form>
    </div>

    <form class="col-4 offset-4 bg-white rounded p-4">
      <div class="mb-3"></div>

      <div class="mb-3"></div>

      <div class="flex space-x-2 justify-center">
        <input
          type="submit"
          @click="login"
          class="inline-block my-4 w-100 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          name=""
          value="Continue"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { useUser } from "/store/user";
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
        const res = await fetch(
          `/api/users?email=${this.email}&password=${this.password}`
        );
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
            const store = useUser();
            store.$patch({
              userId: resJson.data.items[0]._id,
              username: resJson.data.items[0].username,
              email: resJson.data.items[0].email,
              password: resJson.data.items[0].password,
            });
            console.log(store.username);
            //localStorage.setItem("token", res2.data.items);
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
e-e
