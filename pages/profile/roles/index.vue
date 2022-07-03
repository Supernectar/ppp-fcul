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
          <div id="admin" class="mt-4">
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
  </div>
</template>

<script setup>
const route = useRouter();
const user = useUser();

function changeRole(role) {
  user.data.type = role;
  route.push('/profile');
}
</script>
