<template>
  <div
    v-if="user.isLoggedIn"
    class="relative order-1 transition-all"
    :class="isOpen ? 'min-w-60 w-60' : 'min-w-14 w-14'"
  >
    <div
      class="h-[calc(100vh-5rem)] fixed top-20"
      :class="isOpen ? 'min-w-60 w-60' : 'min-w-14 w-14'"
    >
      <nav class="h-full w-full flex flex-col bg-white p-2">
        <div id="topSection" class="my-2 min-h-min">
          <div class="flex justify-between">
            <NuxtLink
              v-if="isOpen"
              class="flex items-center p-2 gap-2 rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
              to="/profile/roles"
            >
              <div class="whitespace-nowrap">Change role</div>
              <ArrowRightIcon class="h-4 w-4" />
            </NuxtLink>
            <button
              class="p-2"
              @click="!isMobile ? (isOpen = !isOpen) : (isOpen = false)"
            >
              <MenuIcon class="h-6 w-6">toggle</MenuIcon>
            </button>
          </div>
          <div class="flex items-center">
            <button class="p-2">
              <img
                class="rounded-1 border"
                :class="isOpen ? 'h-12 w-12' : 'h-6 w-6'"
                :src="
                  'https://ui-avatars.com/api/?format=svg&color=' +
                  user.data.preferences.profileIconTextColor.replace('#', '') +
                  '&background=' +
                  user.data.preferences.profileIconBgColor.replace('#', '') +
                  '&name=' +
                  user.data.username
                "
              />
            </button>
            <div v-if="isOpen">
              <div
                class="text-sm w-40 font-bold overflow-hidden overflow-ellipsis"
              >
                {{ user.data.email || 'no@email.com' }}
              </div>
              <div class="text-xs">Signed in as a {{ user.data.type }}</div>
            </div>
          </div>
          <hr class="mt-2" />
        </div>
        <div id="midSection" class="relative flex-grow overflow-auto text-sm">
          <h2 v-if="isOpen" class="text-sm text-gray-500 font-semibold">
            Main
          </h2>
          <ul class="w-full">
            <li class="mb-1">
              <NuxtLink
                class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                to="/profile"
              >
                <button class="p-2">
                  <TemplateIcon
                    class="h-6 w-6 text-violet-400"
                    aria-hidden="true"
                  />
                </button>

                <div v-if="isOpen">Dashboard</div>
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink
                class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                to="/profile/edit"
              >
                <button class="p-2">
                  <UserIcon
                    class="h-6 w-6 text-violet-400"
                    aria-hidden="true"
                  />
                </button>

                <div v-if="isOpen">My Personal Information</div>
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink
                class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                to="/profile/notifications"
              >
                <button class="p-2">
                  <BellIcon
                    class="h-6 w-6 text-violet-400"
                    aria-hidden="true"
                  />
                </button>

                <div v-if="isOpen">Notifications</div>
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink
                class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                to="/profile/preferences"
              >
                <button class="p-2">
                  <CogIcon class="h-6 w-6 text-violet-400" aria-hidden="true" />
                </button>

                <div v-if="isOpen">Preferences</div>
              </NuxtLink>
            </li>
            <li v-if="!isOpen" class="mb-1">
              <NuxtLink
                class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                to="/profile/roles"
              >
                <button class="p-2">
                  <UserGroupIcon
                    class="h-6 w-6 text-violet-400"
                    aria-hidden="true"
                  />
                </button>
              </NuxtLink>
            </li>
          </ul>
          <template v-if="user.data.type === 'Consumer'">
            <hr class="mb-1" />
            <h2 v-if="isOpen" class="text-sm text-gray-500 font-semibold">
              Consumer profile
            </h2>
            <ul>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/consumer/orders"
                >
                  <button class="p-2">
                    <BookOpenIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">My Orders</div>
                </NuxtLink>
              </li>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/consumer/wishlist"
                >
                  <button class="p-2">
                    <HeartIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">Wishlist</div>
                </NuxtLink>
              </li>
            </ul>
          </template>
          <template v-if="user.data.type === 'Supplier'">
            <hr class="mb-1" />
            <h2 v-if="isOpen" class="text-sm text-gray-500 font-semibold">
              Supplier profile
            </h2>
            <ul>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/supplier/storages"
                >
                  <button class="p-2">
                    <ArchiveIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">My Storages</div>
                </NuxtLink>
              </li>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/supplier/products"
                >
                  <button class="p-2">
                    <CurrencyEuroIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">Sell products</div>
                </NuxtLink>
              </li>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/supplier/items"
                >
                  <button class="p-2">
                    <TagIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">My Items</div>
                </NuxtLink>
              </li>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/supplier/orders"
                >
                  <button class="p-2">
                    <BookOpenIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">Orders</div>
                </NuxtLink>
              </li>
            </ul>
          </template>
          <template v-if="user.data.type === 'Transporter'">
            <hr class="mb-1" />
            <h2 v-if="isOpen" class="text-sm text-gray-500 font-semibold">
              Transporter profile
            </h2>
            <ul>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/transporter/transports"
                >
                  <button class="p-2">
                    <TruckIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">My Transports</div>
                </NuxtLink>
              </li>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/transporter/deliveries"
                >
                  <button class="p-2">
                    <BookOpenIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">Deliveries</div>
                </NuxtLink>
              </li>
            </ul>
          </template>
          <template v-if="user.data.type === 'Admin'">
            <hr class="mb-1" />
            <h2 v-if="isOpen" class="text-sm text-gray-500 font-semibold">
              Admin profile
            </h2>
            <ul>
              <li class="mb-1">
                <NuxtLink
                  class="flex items-center rounded-lg text-gray-800 hover:(bg-black bg-opacity-5)"
                  active-class="bg-black bg-opacity-5 before:(absolute w-1 h-6 rounded-r bg-violet-400)"
                  to="/profile/admin/editUser"
                >
                  <button class="p-2">
                    <PencilAltIcon
                      class="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    />
                  </button>

                  <div v-if="isOpen">Edit users' accounts</div>
                </NuxtLink>
              </li>
            </ul>
          </template>
        </div>
        <div id="botSection" class="min-h-10 z-10 bg-white">
          <hr class="mb-2" />
          <div class="text-center">some info idk</div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import {
  ArchiveIcon,
  TruckIcon,
  TemplateIcon,
  HeartIcon,
  BookOpenIcon,
  TagIcon,
  UserIcon,
  BellIcon,
  CogIcon,
  ArrowRightIcon,
  CurrencyEuroIcon,
  MenuIcon,
  UserGroupIcon,
  PencilAltIcon
} from '@heroicons/vue/outline';
const user = useUser();

const isOpen = ref(true);
const isMobile = ref(false);
checkSize();

onMounted(() => {
  window.addEventListener('resize', checkSize);
});

// check device size
function checkSize() {
  if (window.innerWidth <= 640) {
    isOpen.value = false;
    isMobile.value = true;
  } else {
    isOpen.value = true;
    isMobile.value = false;
  }
}
</script>
