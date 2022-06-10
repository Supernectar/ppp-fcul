<template>
	<div>
		<Navbar />
		<section class="bg-light-600 bg-red-100 p-4">
			<div class="flex gap-2">
				<div class="w-80 flex flex-col gap-2">
					<SideNav />
				</div>
				<div
					class="
						bg-light-100
						rounded
						p-2
						shadow
						w-full
					"
				>
					<div>
						aqui:
						{{ storages }}
					</div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script setup>
import {
	ArchiveIcon,
	UserIcon,
	BookOpenIcon,
	BellIcon,
	HeartIcon
} from '@heroicons/vue/outline/index.js';
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid';
import { ref } from 'vue';
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption
} from '@headlessui/vue';
import { useUser } from '~/store/user';

const store = useUser();

let storages = ref([]);
let user = await $fetch(`/api/users${store.user.userId}`).data.items[0];

storages.value = user.supplierData.storages;
</script>
