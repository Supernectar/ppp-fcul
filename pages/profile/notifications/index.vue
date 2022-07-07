<template>
  <div>
    <Navbar />
    <div class="flex">
      <SideNavigationBar />
      <div class="flex-grow order-2">
        <section class="p-2 overflow-hidden min-h-screen">
          <h1 class="text-2xl font-bold">Notifications</h1>
          <p>Here is all the notifications you received sorted by roles</p>
          <div class="mt-4 border rounded-xl p-2">
            <h2 class="text-xl font-semibold">Consumer</h2>
            <div v-if="consumerNotif.length === 0">
              <p>You don't have any notifications on your consumer side</p>
            </div>
            <div v-else>
              <p v-for="(notif, index) in consumerNotif" :key="index">
                {{ notif.name }}
              </p>
            </div>
          </div>
          <div class="mt-4 border rounded-xl p-2">
            <h2 class="text-xl font-semibold">Supplier</h2>
            <div v-if="supNotif.length === 0">
              <p>You don't have any notifications on your supplier side</p>
            </div>
            <div v-else>
              <div
                v-for="(notif, index) in supNotif"
                :key="index"
                class="flex gap-4 p-3"
              >
                <button>
                  <PencilIcon
                    class="h-6 w-6 text-violet-400"
                    aria-hidden="true"
                  />
                </button>
                <p>{{ notif.name }}</p>
              </div>
            </div>
          </div>
          <div class="mt-4 border rounded-xl p-2">
            <h2 class="text-xl font-semibold">Transporter</h2>
            <div v-if="transpNotif.length === 0">
              <p>You don't have any notifications on your transporter side</p>
            </div>
            <div v-else>
              <p v-for="(notif, index) in transpNotif" :key="index">
                {{ notif.name }}
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { PencilIcon } from '@heroicons/vue/solid';
const user = useUser();

const consumerNotif = ref([]);
const supNotif = ref([]);
const transpNotif = ref([]);

const userInfo = await $fetch(`/api/users/${user.data._id}`);
for (const notification of userInfo.notification) {
  if (notification.type === 'consumer') {
    consumerNotif.value.push(notification);
  } else if (notification.type === 'supplier') {
    supNotif.value.push(notification);
  } else if (notification.type === 'transporter') {
    transpNotif.value.push(notification);
  }
}
</script>
