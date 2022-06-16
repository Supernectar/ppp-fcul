<template>
  <div class="sticky top-20">
    <div class="w-60 p-2 max-h-screen overflow-auto">
      <div>
        <ul>
          <li>
            <NuxtLink
              to="/profile"
              class="text-gray-900 flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
            >
              <img
                :src="
                  'https://ui-avatars.com/api/?format=svg&color=' +
                  profileIconTextColor.replace('#', '') +
                  '&background=' +
                  profileIconBgColor.replace('#', '') +
                  '&name=' +
                  useUser().user.username
                "
                class="w-5 mr-2 rounded-full border"
                alt=""
              />
              {{ useUser().user.username }}
            </NuxtLink>
          </li>
          <li>
            <div>
              <div>
                <input
                  id="backgroundColor"
                  v-model="profileIconBgColor"
                  type="color"
                  name="backgroundColor"
                />
                <label for="colorPalette">Background color</label>
              </div>
              <div>
                <input
                  id="profileIconTextColor"
                  v-model="profileIconTextColor"
                  type="color"
                  name="profileIconTextColor"
                />
                <label for="profileIconTextColor">Text color</label>
              </div>
            </div>
          </li>
          <li>
            <Listbox v-model="selectedRole" class="my-2">
              <div class="relative">
                <ListboxButton
                  class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                  <span class="block truncate">{{ selectedRole }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <SelectorIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>
                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-for="(role, index) in roles"
                      v-slot="{ active, selected }"
                      :key="index"
                      :value="role"
                      as="template"
                    >
                      <li
                        :class="[
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-10 pr-4'
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate'
                          ]"
                          >{{ role }}</span
                        >
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </li>
        </ul>
      </div>
      <hr class="my-2" />
      <div>
        <ul>
          <li>
            <NuxtLink
              to="/profile"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-5"
            >
              <TemplateIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/profile/edit"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <UserIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              My Personal Information
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/profile/notifications"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <BellIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              Notifications
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/profile/preferences"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <CogIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              Preferences
            </NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-2" />
      <div>
        <ul v-if="selectedRole === roles[0]">
          <li class="mt-2">
            <NuxtLink
              to="/profile/consumer/orders"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <BookOpenIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              My Orders
            </NuxtLink>
          </li>
          <li class="mt-2">
            <NuxtLink
              to="/profile/consumer/wishlist"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <HeartIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              Wishlist
            </NuxtLink>
          </li>
        </ul>
        <ul v-if="selectedRole === roles[1]">
          <li class="mt-2">
            <NuxtLink
              to="/profile/supplier/storages"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <UserIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              My Storages
            </NuxtLink>
          </li>

          <li class="mt-2">
            <NuxtLink
              to="/profile/supplier/products"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <UserIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              My Products
            </NuxtLink>
          </li>

          <li class="mt-2">
            <NuxtLink
              to="/profile/supplier/orders"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <BookOpenIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              Orders
            </NuxtLink>
          </li>
        </ul>
        <ul v-if="selectedRole === roles[2]">
          <li class="mt-2">
            <NuxtLink
              to="/profile/transporter/transports"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <TruckIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              My Tranports
            </NuxtLink>
          </li>
          <li class="mt-2">
            <NuxtLink
              to="/profile/transporter/deliveries"
              class="text-gray-900 text-sm flex items-center rounded-md p-2 my-2 hover:(bg-black bg-opacity-5)"
              active-class="bg-black bg-opacity-10"
            >
              <BookOpenIcon
                class="mr-2 h-5 w-5 text-violet-400"
                aria-hidden="true"
              />
              Deliveries
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  TemplateIcon,
  UserIcon,
  BookOpenIcon,
  BellIcon,
  HeartIcon,
  TruckIcon,
  CogIcon
} from '@heroicons/vue/outline/index.js';
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue';
import { useUser } from '~/store/user';
const route = useRouter();

// Listbox
const store = useUser();
const roles = ['Consumer', 'Supplier', 'Transporter'];
const selectedRole = ref(store.user.type === '' ? roles[0] : store.user.type);

watch(selectedRole, () => {
  store.$patch({
    user: {
      type: selectedRole.value
      //   .toLowerCase(),
    }
  });
  route.push('/profile');
});

// ---- profile icon ---- //
const profileIconBgColor = ref(store.user.preferences.profileIconBgColor);
const profileIconTextColor = ref(store.user.preferences.profileIconTextColor);
watch(profileIconBgColor, () => {
  store.$patch({
    user: {
      preferences: {
        profileIconBgColor: profileIconBgColor.value
      }
    }
  });
});

watch(profileIconTextColor, () => {
  store.$patch({
    user: {
      preferences: {
        profileIconTextColor: profileIconTextColor.value
      }
    }
  });
});

// watch();
</script>
