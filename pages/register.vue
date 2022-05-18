<template>
  <div class="bg-success vh-100">
    <Navbar />
    <form v-on:submit.prevent class="col-4 offset-4 bg-white rounded p-4">
      <h2>Registration</h2>
      <div class="form-text">Please fill in this form to create an account</div>
      <hr />
      <div class="form-check">
        <input
          v-model="type"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="consumer"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault1">Consumer</label>
      </div>
      <div class="form-check">
        <input
          v-model="type"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="supplier"
        />
        <label class="form-check-label" for="flexRadioDefault2"> Supplier </label>
      </div>
      <div class="form-check">
        <input
          v-model="type"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          value="transporter"
        />
        <label class="form-check-label" for="flexRadioDefault3"> Transporter </label>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="email"
          :class="calculateEmailClass"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div :class="calculateEmailFeedbackClass">
          {{ calculateEmailFeedback }}
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>

        <input
          v-model="password"
          type="password"
          class="form-control"
          :class="calculatePasswordClass"
          id="exampleInputPassword1"
        />
        <div :class="calculatePasswordFeedbackClass">
          {{ calculatePasswordFeedback }}
        </div>
      </div>

      <input
        type="submit"
        @click="RegisterUser"
        class="btn btn-primary w-100"
        name=""
        value="Continue"
      />

      <hr />
      <button @click="RegisterGoogle" type="button" class="sign-up-with-google-btn w-100">
        Sign up with Google
      </button>

      <!-- <div class="form-group">
        <input type="submit" value="Create Account" @click="RegisterUser">
        <button v-on:click.stop.prevent="">Create Account</button>
        <button @click="()">TESTAR GOOGLE REGISTER</button>
      </div> -->
      <!-- 
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>

        <input
          v-model="firstName.value"
          :class="validateFirstName"
          type="text"
          class="form-control"
          id="firstName"
        />
        <div :class="firstName.isValid ? 'valid-feedback' : 'invalid-feedback'">
          {{ firstName.feedback }}
        </div>
      </div>

      <p>{{ lastName }}</p>
      <p>{{ validLastName }}</p>

      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>

        <input
          v-model="lastName"
          :class="validLastName ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="lastName"
        />
      </div>
        

      
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Phone number</label>

        <input
          v-model="phonenumber"
          :class="validPhone() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="phonenumber"
        />
        <div class="invalid-feedback">Phone number must have 9 numbers!</div>
      </div>
      
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Validate Password</label>

        <input
          v-model="confirmPassword"
          :class="validConfirmPassword() ? 'is-valid' : 'is-invalid'"
          type="password"
          class="form-control"
          id="confirmPassword"
        />
        <div class="invalid-feedback">Password must match!</div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Country</label>
        <select class="form-select" aria-label="Default select example">
          <option v-for="country in countries" :key="country.name">
            {{ country.name }}
          </option>
        </select>
        <input
          v-model="country"
          :class="validCountry() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="country"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">City</label>

        <input
          v-model="city"
          :class="validCity() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="city"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Postal code</label>

        <input
          v-model="pcode"
          :class="validPostCode() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="pcode"
        />
        <div class="invalid-feedback">Postal code must be valid!</div>
      </div>
      <div class="mb-3">
        <label for="nif" class="form-label">NIF</label>

        <input
          v-model="nif"
          :class="validNIF() ? 'is-valid' : 'is-invalid'"
          type="text"
          class="form-control"
          id="nif"
        />
        <div class="invalid-feedback">NIF must have 9 numbers!</div>
      </div>

      <div v-if="type == 'consumer'">
        <p>1</p>
      </div>
      <div v-if="type == 'supplier'">
        <div class="mb-3">
          <label for="institution_name" class="form-label">Institution name</label>

          <input
            v-model="inst_name"
            type="text"
            class="form-control"
            id="institution_name"
          />
        </div>
      </div> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterView",

  data() {
    return {
      type: "consumer",
      email: null,
      password: null,
      firstName: {
        value: null,
        isValid: null,
        feedback: null,
      },
      lastName: null,
      username: "test",
      country: "",
      nif: "",
      address: "",
      phonenumber: "",
      countries: [],
      confirmPassword: "",
      pcode: "",
      // defaultName: 'okdo',
    };
  },
  computed: {
    calculateEmailClass() {
      if (this.email === null) return;
      return this.isValidEmail ? "is-valid" : "is-invalid";
    },
    calculateEmailFeedbackClass() {
      if (this.email === null) return;
      return this.isValidEmail ? "valid-feedback" : "invalid-feedback";
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
      return this.isValidPassword ? "is-valid" : "is-invalid";
    },
    calculatePasswordFeedbackClass() {
      if (this.password === null) return;
      return this.isValidPassword ? "valid-feedback" : "invalid-feedback";
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

    // validateFirstName() {
    //   if (this.firstName.value === null) return;

    //   this.firstName.isValid = true;
    //   this.firstName.feedback = "Looking good";

    //   if (this.firstName.value.length < 2) {
    //     this.firstName.isValid = false;
    //     this.firstName.feedback = ;
    //     return "is-invalid";
    //   }

    //   if (this.firstName.value.includes("e")) {
    //     this.firstName.isValid = false;
    //     this.firstName.feedback = ;
    //     return "is-invalid";
    //   }

    //   return "is-valid";
    // },
    // validateEmail() {
    //   if (this.email.value === null) return;

    //   this.email.isValid = true;
    //   this.email.feedback = ;

    //   if (this.email.value.length < 2) {
    //     this.email.isValid = false;
    //     this.email.feedback = "Must be at least 2 characters";
    //     return "is-invalid";
    //   }

    //   if (this.email.value.includes("e")) {
    //     this.email.isValid = false;
    //     this.email.feedback = "Cannot contain the letter 'e'";
    //     return "is-invalid";
    //   }

    //   return "is-valid";
    // },
    validLastName() {
      if (this.lastName === null) return;
      if (this.lastName.length < 2) {
        return false;
      }
      return true;
    },
  },
  mounted() {
    // this.generateUsername();
    // this.countries = fetch("https://restcountries.com/v2/all", {
    //   method: "GET",
    // });
  },
  methods: {
    validPassword() {
      return this.password.length >= 6;
    },
    validEmail() {
      const re = /(.+)@(.+)\.(.+)/;
      return re.test(this.email);
    },
    RegisterGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider();
      this.$fire.auth.signInWithPopup(provider);
    },

    async generateUsername() {
      const username = "random-user-" + Math.floor(Math.random() * 500);
      const users = await (await fetch("/api/users?username=" + username)).json();
      if (users.data.items.length <= 0) return username;
      return this.generateUsername();
    },

    async RegisterUser() {
      if (this.validEmail() && this.validPassword()) {
        console.log("Registering...");
        const res = await fetch(`/api/users?email=${this.email}`);
        const resJson = await res.json();
        console.log(resJson);
        if (resJson.data.items.length <= 0) {
          const username = await this.generateUsername();
          console.log(username);
          const postReq = await fetch("/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              username: username,
              email: this.email,
              password: this.password,
            }),
          });

          const postReqJson = await postReq.json();
          console.log(postReqJson);
          alert("User was registered successfully");
          //this.$router.push('products');
        } else {
          alert("Email is already registered");
        }
      } else {
        console.log("fields not valid");
      }

      const res2 = await fetch("api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // username: this.username,
          email: this.email,
          password: this.password,
        }),
      });

      const res3 = await res2.json();
      const error = "User does not exist";
      if (res3 === "Invalid username or password") {
        console.log(error);
      } else {
        console.log(res3);
        localStorage.setItem("token", res3.data.items);
        this.$router.push("products");
      }
    },
  },
};
</script>

<style>
/* .sign-up-with-google-btn {
  transition: background-color 0.3s, box-shadow 0.3s;

  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
} */
</style>
