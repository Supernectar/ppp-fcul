<template>
  <nav class="sticky top-0 z-50">
    <div
      class="shadow-md h-20 grid grid-cols-[1fr,auto,1fr] md:grid-cols-[1fr,400px,1fr] lg:grid-cols-[1fr,600px,1fr] flex-grow bg-white px-4 z-30"
    >
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center">
          <img
            class="w-10 inline-block"
            src="/img/logo.png"
            alt="Navbar home button"
          />
          <span class="font-semibold px-2 hidden md:inline-block"
            >ClearChoice</span
          >
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <form
          class="text-center flex-grow invisible md:visible"
          @submit.prevent
        >
          <label
            for="default-search1"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <SearchIcon class="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              v-model="search"
              id="default-search1"
              type="search"
              class="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Products (category, ...)"
              required
              @focusin="openModal"
            />
            <!--<NuxtLink :to="`/test?category=${categorySelected}`">-->
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              @click="test"
            >
              Search
            </button>
            <!--</NuxtLink>-->
          </div>
        </form>
      </div>
      <div class="flex justify-end items-center">
        <Popover v-slot="{ open }" class="block md:hidden relative">
          <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="inline-flex text-gray-500 w-full justify-center items-center rounded-md hover:(!bg-black !bg-opacity-5) px-2 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            @click="toggleSearch"
          >
            <SearchIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </Popover>
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="inline-flex text-gray-500 w-full justify-center items-center rounded-md hover:(!bg-black !bg-opacity-5) px-2 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
            <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
          </PopoverButton>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute right-0 mt-2 z-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="overflow-hidden rounded-lg shadow-lg ring-1 bg-white">
                <!-- v-if="cartItemList.length > 0" -->
                <table class="w-full text-sm text-left text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-2 py-3">Product name</th>
                      <th scope="col" class="px-2 py-3">Price</th>
                      <th scope="col" class="px-2 py-3">Amount</th>
                      <th scope="col" class="px-2 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(cartItem, index) in cart"
                      :id="cartItem.product"
                      :key="index"
                      class="bg-white border-b hover:bg-gray-50"
                    >
                      <th
                        scope="row"
                        class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {{ myItems[index].name }}
                      </th>
                      <td class="px-2 py-4">{{ myProducts[index].price }}</td>
                      <td class="px-2 py-4">
                        <input
                          id=""
                          class="w-16"
                          type="number"
                          min="0"
                          name=""
                          value="5"
                        />
                      </td>
                      <td class="px-2 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 hover:underline"
                          >Edit</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="flex justify-evenly p-2">
                  <NuxtLink to="/cart">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      See more
                    </button>
                  </NuxtLink>
                  <NuxtLink to="#">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Finish order
                    </button>
                  </NuxtLink>
                </div>
                <!-- <div v-else>
                  <NuxtLink to="/test" class="text-blue-500">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    start browsing items
                    </button>
                  </NuxtLink>
                </div>
                -->
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <div v-if="!user.isLoggedIn">
          <NuxtLink to="/signup" class="hidden md:inline-block">
            <button
              type="button"
              class="mr-4 inline-block px-6 py-2 border-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Sign Up
            </button>
          </NuxtLink>
          <NuxtLink to="/signin">
            <button
              type="button"
              class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </NuxtLink>
        </div>
        <Popover v-if="user.isLoggedIn" v-slot="{ open }" class="relative">
          <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="inline-flex text-gray-500 w-full justify-center items-center rounded-md hover:(!bg-black !bg-opacity-5) px-2 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <BellIcon class="h-6 w-6" aria-hidden="true" />
            <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
          </PopoverButton>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute right-0 mt-2 z-50 origin-top-right rounded-md bg-white shadow-lg focus:outline-none"
            >
              <div
                class="overflow-hidden rounded-lg shadow-lg ring-1 bg-white"
              ></div>
              Hello
            </PopoverPanel>
          </transition>
        </Popover>
        <div v-if="user.isLoggedIn" class="top-16 text-right">
          <Menu as="div" class="relative inline-block text-left">
            <MenuButton
              class="inline-flex text-gray-500 w-full justify-center items-center rounded-md hover:(!bg-black !bg-opacity-5) px-2 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <img
                class="w-6 h-6 rounded-full"
                :src="
                  'https://ui-avatars.com/api/?format=svg&color=' +
                  user.data.preferences.profileIconTextColor.replace('#', '') +
                  '&background=' +
                  user.data.preferences.profileIconBgColor.replace('#', '') +
                  '&name=' +
                  user.data.username
                "
                alt="Rounded avatar"
              />
              <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
            </MenuButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-1 py-1">
                  <div class="group w-full rounded-md px-2 py-2 text-sm">
                    <div class="flex items-center">
                      {{ user.data.username }}
                    </div>
                    <div class="flex items-center font-semibold">
                      {{ user.data.email }}
                    </div>
                  </div>
                </div>
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <NuxtLink to="/profile">
                      <button
                        :class="[
                          active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                        ]"
                      >
                        <ArchiveIcon
                          :active="active"
                          class="mr-2 h-5 w-5 text-violet-400"
                          aria-hidden="true"
                        />
                        Profile
                      </button>
                    </NuxtLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                      ]"
                    >
                      <CogIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Settings
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                      ]"
                      @click="signOut"
                    >
                      <LogoutIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Sign out
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- Categories/Items search -->
    <div :class="isOpen ? 'block' : 'hidden'">
      <div
        class="fixed w-screen h-screen bg-black opacity-25"
        @click="closeModal"
      ></div>
      <div class="fixed h-60 w-full pr-2 bg-white overflow-auto">
        <h1 class="text-center font-bold">Categories</h1>
        <div class="h-screen bg-pink-100">
          <div
            v-for="categoriasPrincipal in categories.children"
            :key="categoriasPrincipal._id"
          >
            <h2 class="text-center font-semibold">
              {{ categoriasPrincipal.name }}
            </h2>
            <div
              v-for="segundaCategoria in categoriasPrincipal.children"
              :key="segundaCategoria._id"
            >
              <h3>
                {{ segundaCategoria.name }}
              </h3>

              <div
                v-for="terceiraCategoria in segundaCategoria.children"
                :key="terceiraCategoria._id"
              >
                <ul
                  role="list"
                  class="marker:black pl-5 space-y-3 text-slate-600"
                >
                  <h4 class="hover:underline">
                    <NuxtLink
                      :to="`/test?category=${terceiraCategoria.nameId}`"
                      >{{ terceiraCategoria.name }}</NuxtLink
                    >
                  </h4>
                </ul>
              </div>
            </div>
          </div>
          <!-- <NuxtLink to="/test">lavar</NuxtLink> -->
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Popover,
  PopoverButton,
  PopoverPanel
} from '@headlessui/vue';
import {
  ChevronDownIcon,
  ArchiveIcon,
  CogIcon,
  LogoutIcon,
  ShoppingCartIcon,
  BellIcon,
  SearchIcon
} from '@heroicons/vue/outline/index.js';
import useCart from '~/stores/cart';

const router = useRouter();

const user = useUser();

const store = useCart();

const cart = ref(store.getCart);

const myProducts = ref([]);
const myItems = ref([]);

for (let i = 0; i < cart.value.length; i++) {
  if (cart.value.length <= 4) {
    myProducts.value[i] = (
      await $fetch(`/api/products?_id=${cart.value[i].product}`)
    ).data.items[0];

    myItems.value[i] = (
      await $fetch(`/api/items?_id=${myProducts.value[i].item}`)
    ).data.items[0];
  }
}

async function signOut() {
  if (user.isLoggedIn) {
    await $fetch(`/api/users/${user.data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        a: 'okok',
        preferences: {
          profileIconBgColor: user.data.preferences.profileIconBgColor,
          profileIconTextColor: user.data.preferences.profileIconTextColor
        }
      })
    });

    user.reset();
  }
  router.push('/signin');
}

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

const search = ref('');

function test() {
  const catMatched = [];
  let url;
  const regex = new RegExp(search.value, 'gi');
  for (const category of categories.value.children) {
    console.log(category.name);
    if (category.name.match(regex)) {
      catMatched.push(category.name);
    } else {
      console.log('no match');
    }
    if (catMatched.length === 1) {
      router.push(`/test?category=${catMatched[0]}`);
    } else if (catMatched.length === categories.value.children.length) {
      router.push('/test');
    } else if (catMatched.length < categories.value.children.length) {
      url = `/test?category=${catMatched[0]}`;
      for (let i = 1; i < catMatched.length; i++) {
        url += `,${catMatched[i]}`;
      }
      router.push(url);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function toggleSearch() {
  document.querySelector('#dropdownMobileSearch').classList.toggle('hidden');
}

const categories = ref({});
const expandNode = async (node) => {
  if (node.children.length > 0) {
    for (let i = 0; i < node.children.length; i++) {
      node.children[i] = (
        await $fetch(`/api/categories?_id=${node.children[i]}`)
      ).data.items[0];
    }
    for (const child of node.children) {
      expandNode(child);
    }
  }
};
categories.value = (await $fetch(`/api/categories?name=main`)).data.items[0];
expandNode(categories.value);
</script>
<style></style>
