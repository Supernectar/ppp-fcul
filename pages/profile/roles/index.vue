<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden">
          <h1 class="text-4xl font-bold">Roles</h1>
          <div id="consumer" class="mt-4">
            <h2 class="text-xl font-semibold">Consumer</h2>
            <p>Find the product that suits your needs</p>
            <button
              class="bg-red-100 hover:bg-red-200 rounded-xl p-4 flex"
              @click="changeRole('Consumer')"
            >
              <img
                class="h-30 sm:h-40"
                src="/decorations/consumerRole.png"
                alt=""
              />
              As a consumer, you get to choose what product, from who you will
              buy it and who brings it to you. Find products near you, sort and
              filter by many attributes such as price, rating, and polution,
              etc.... /!\ desenvolver mais um bocado
            </button>
          </div>
          <div id="supplier" class="mt-4">
            <h2 class="text-xl font-semibold">Supplier</h2>
            <p>Sell your products from our website</p>
            <button
              class="bg-blue-100 hover:bg-blue-200 rounded-xl p-4 flex flex-row-reverse"
              @click="changeRole('Supplier')"
            >
              <img
                class="h-30 sm:h-40"
                src="/decorations/supplierRole.png"
                alt=""
              />
              sell your products here... /!\ desenvolver mais um bocado
            </button>
          </div>
          <div id="transporter" class="mt-4">
            <h2 class="text-xl font-semibold">Transporter</h2>
            <p>
              Be an intermediate to tranport large amounts of products from one
              place to another
            </p>
            <button
              class="bg-green-100 hover:bg-green-200 rounded-xl p-4 flex"
              @click="changeRole('Transporter')"
            >
              <img
                class="h-30 sm:h-40"
                src="/decorations/transporterRole.jpg"
                alt=""
              />
              You can transport products etc.... /!\ desenvolver mais um bocado
            </button>
          </div>
          <div v-if="checkIfAdmin" id="admin" class="mt-4">
            <h2 class="text-xl font-semibold">Administrator</h2>
            <p>Request admin privileges</p>
            <button
              class="bg-yellow-100 hover:bg-yellow-200 rounded-xl p-4 flex flex-row-reverse"
              @click="changeRole('Admin')"
            >
              <img
                class="h-30 sm:h-40"
                src="/decorations/adminRole.png"
                alt=""
              />
              you can manage the website... /!\ desenvolver mais um bocado
            </button>
          </div>
        </section>
      </div>
    </div>

    <!-- Dialog -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog class="relative z-10" as="div" @close="closeModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ 'Roles' }}
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">{{ modalContent }}</p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue';

const route = useRouter();
const user = useUser();

const modalContent = ref('');
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal(msg) {
  modalContent.value = msg;
  isOpen.value = true;
}

const info = ref([]);
info.value = await $fetch(`/api/users/${user.data._id}`);

function checkIfAdmin() {
  if (
    user.data.email === 'a@a.com' &&
    info.value.password === user.data.password
  ) {
    return true;
  } else {
    return false;
  }
}

function changeRole(role) {
  if (role === 'Admin') {
    if (checkIfAdmin()) {
      user.data.type = role;
      route.push('/profile');
    } else {
      openModal(`Your account doesn't have admin privileges.`);
    }
  } else {
    user.data.type = role;
    route.push('/profile');
  }
}
</script>
