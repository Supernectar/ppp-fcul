<template>
  <div class="bg-success">
    <Navbar />

    <div class="m-4 bg-light rounded p-4 row">
      <div class="col-2">
        <div>
          <img src="/img/logo.png" width="70" class="rounded-circle border" alt="" />
          <p>My username</p>
        </div>
        <hr />

        <ul
          class="absolute right-0 mt-2 z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="px-1 py-1">
            <div class="group w-full rounded-md px-2 py-2 text-sm">
              <div class="flex items-center">Bonnie Green</div>
              <div class="flex items-center font-semibold">name@mail.com</div>
            </div>
          </div>
          <div class="px-1 py-1">
            <li>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <PencilIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                Edit
              </button>
            </li>
            <li>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <DuplicateIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                Duplicate
              </button>
            </li>
          </div>
          <div class="px-1 py-1">
            <ul>
              <button
                class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                <!-- <ArchiveIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                Profile
              </button>
              <li>
                <button
                  class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <!-- <CogIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                  Settings
                </button>
              </li>

              <div class="px-1 py-1">
                <li>
                  <button
                    class="hover:(!bg-black !bg-opacity-5) text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                    <!-- <tIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
                    Sign out
                  </button>
                </li>
              </div>
            </ul>
            <div class="flex justify-center">
              <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                <button aria-current="true" type="button"
                  class="text-left px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white cursor-pointer">
                  Basic Info
                </button>
                <button type="button"
                  class="text-left px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer">
                  A second link item
                </button>
                <button type="button"
                  class="text-left px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer">
                  A thi/button>button type="button" class="text-left px-6 py-2 border-b
                  border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500
                  focus:outline A fourth link item
                </button>
              </div>
            </div>
            <ul class="list-group">
              <button class="list-group-item list-group-item-action">Settings</button>
              <button class="list-group-item list-group-item-action">
                My consumer info
              </button>
              <button class="list-group-item list-group-item-action">
                My supplier info
              </button>
              <button class="list-group-item list-group-item-action">
                My transporter info
              </button>
              <button class="list-group-item list-group-item-action">Others...</button>
            </ul>
          </div>
          <form v-on:submit.prevent class="col">
            <h2>Profile</h2>
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Name</label>

              <input v-model="name" type="text" class="form-control" :class="calculateNameClass"
                id="exampleInputName1" />
              <div :class="calculateNameFeedbackClass">
                {{ calculateNameFeedback }}
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputAddress1" class="form-label">Address</label>

              <input v-model="address" type="text" class="form-control" id="exampleInputAddress1" />
            </div>

            <div class="mb-3">
              <label for="exampleInputPhone1" class="form-label">Phone</label>

              <input v-model="phone" type="text" class="form-control" id="exampleInputPhone1" />
            </div>

            <div class="mb-3">
              <label for="exampleInputNIF1" class="form-label">NIF</label>

              <input v-model="nif" type="text" class="form-control" id="exampleInputNIF1" />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>

              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" />
            </div>
          </form>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   ofileView", t null, ess: null,
  //       phone: null,
  //   credit_card: null,
  //   nif: null,
  //   password: null,
  // };
  //   }, {
  //   leNameClass(fis.name === null) re  this.isValidName ? "is-
  //     calculateNameFeedbackClass() {
  //     if (this.name === null) return;
  //     return this.isValidName ? "valid-feedback" : "invalid-feedback";
  //   },
  //   isValidName() {
  //     if (this.name === null) return;
  //     if (this.name.length < 3) return false;
  //     return true;
  //   },
  // },
  // mounted() {
  //   // this.name : c() { `api/users/${localStorage. thod: "DELETE",
  //   headers: { "Content-Type": "application/json" },
  // }); dateInfo() {
  //   fetch(`hod: "PUT",eaders: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name: this.name,
  //         addreshone: this.phoredit_card: this.crif: this.nif,assword:
  //   },
  // };
}
</script>

<style>
</style>
