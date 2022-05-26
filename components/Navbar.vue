<template>
  <nav class="shadow-md sticky top-0 bg-white py-2 px-4 z-10">
    <div class="grid items-center grid-cols-3 md:grid-cols-9">
      <div class="flex gap-4 md:col-span-2">
        <NuxtLink to="/" class="flex items-center">
          <img class="w-10 inline-block" src="/img/logo.png" alt="" />
          <span class="font-semibold px-2 hidden md:inline-block">ClearChoiceACTION</span>
        </NuxtLink>
      </div>

      <form @submit.prevent class="text-center invisible md:(!visible col-span-5)">
        <label
          for="default-search1"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >Search</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search1"
            class="block !p-4 !pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Products (name, category, ...)"
            required
          />
          <NuxtLink to="/items">
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </NuxtLink>
        </div>
      </form>

      <!-- Left aligned Icons -->
      <div class="flex justify-end gap-2 md:col-span-2">
        <NuxtLink to="/register">R</NuxtLink>
        <NuxtLink to="/login">L</NuxtLink>
        <!-- Mobile Search Popover -->
        <Popover v-slot="{ open }" class="block md:hidden relative">
          <PopoverButton
            @click="toggleSearch"
            :class="open ? '' : 'text-opacity-90'"
            class="inline-flex text-gray-500 w-full justify-center items-center rounded-md hover:(!bg-black !bg-opacity-5) px-2 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <SearchIcon class="h-6 w-6" aria-hidden="true" />
            <!-- <ChevronDownIcon class="h-4 w-4" aria-hidden="true" /> -->
          </PopoverButton>
        </Popover>

        <Popover v-slot="{ open }" class="relative">
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
              <div class="overflow-hidden rounded-lg shadow-lg ring-1 bg-white"></div>
              Hello
            </PopoverPanel>
          </transition>
        </Popover>

        <!-- Cart Dropdown -->

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
                    <tr class="bg-white border-b hover:bg-gray-50">
                      <th
                        scope="row"
                        class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-2 py-4">$2999</td>
                      <td class="px-2 py-4">
                        <input
                          class="w-16"
                          type="number"
                          min="0"
                          name=""
                          id=""
                          value="3"
                        />
                      </td>
                      <td class="px-2 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 hover:underline"
                          >Edit</a
                        >
                      </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50">
                      <th
                        scope="row"
                        class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-2 py-4">$1999</td>
                      <td class="px-2 py-4">
                        <input
                          class="w-16"
                          type="number"
                          min="0"
                          name=""
                          id=""
                          value="2"
                        />
                      </td>
                      <td class="px-2 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 hover:underline"
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
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <div
          id="dropdownCart"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow"
        >
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
        </div>

        <!-- Profile Dropdown -->
        <div class="top-16 text-right">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex text-gray-500 w-full justify-center items-center rounded-md hover:(!bg-black !bg-opacity-5) px-2 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <UserCircleIcon class="h-6 w-6" aria-hidden="true" />
                <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
              </MenuButton>
            </div>

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
                    <div class="flex items-center">Bonnie Green</div>
                    <div class="flex items-center font-semibold">name@mail.com</div>
                  </div>
                </div>
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                        ' group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <PencilIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Edit
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <DuplicateIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Duplicate
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <ArchiveIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Profile
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
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
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
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

    <div id="dropdownMobileSearch" class="pt-4 z-10 hidden md:hidden bg-white rounded">
      <form @submit.prevent class="text-center">
        <label
          for="default-search1"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >Search</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search2"
            class="block !p-4 !pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Products (name, category, ...)"
            required
          />
          <NuxtLink to="/items">
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </NuxtLink>
        </div>
      </form>
    </div>
  </nav>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  ChevronDownIcon,
  ArchiveIcon,
  DuplicateIcon,
  CogIcon,
  PencilIcon,
  LogoutIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  BellIcon,
  SearchIcon,
} from "@heroicons/vue/outline/index.js";

function toggleSearch() {
  document.querySelector("#dropdownMobileSearch").classList.toggle("hidden");
}
</script>
<style></style>
