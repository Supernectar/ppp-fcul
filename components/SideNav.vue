<template>
	<div class="bg-light-100 rounded p-2 shadow">
		<div class="flex justify-center">
			<img
				:src="
					'https://ui-avatars.com/api/?format=svg&color=' +
					textColor.replace('#', '') +
					'&background=' +
					bgColor.replace('#', '') +
					'&name=' +
					useUser().user.username
				"
				class="w-60 rounded-full border"
				alt=""
			/>
		</div>
		<div>
			<input
				v-model="bgColor"
				type="color"
				id="backgroundColor"
				name="backgroundColor"
			/>
			<label for="colorPalette">Background color</label>
		</div>
		<div>
			<input
				v-model="textColor"
				type="color"
				id="textColor"
				name="textColor"
			/>
			<label for="textColor">Text color</label>
		</div>
		<ul>
			<li>
				<Listbox v-model="selectedRole">
					<div class="relative mt-1">
						<ListboxButton
							class="
								relative
								w-full
								cursor-default
								rounded-lg
								bg-white
								py-2
								pl-3
								pr-10
								text-left
								shadow-md
								focus:outline-none
								focus-visible:border-indigo-500
								focus-visible:ring-2
								focus-visible:ring-white
								focus-visible:ring-opacity-75
								focus-visible:ring-offset-2
								focus-visible:ring-offset-orange-300
								sm:text-sm
							"
						>
							<span
								class="
									block
									truncate
								"
								>{{
									selectedRole
								}}</span
							>
							<span
								class="
									pointer-events-none
									absolute
									inset-y-0
									right-0
									flex
									items-center
									pr-2
								"
							>
								<SelectorIcon
									class="
										h-5
										w-5
										text-gray-400
									"
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
								class="
									absolute
									mt-1
									max-h-60
									w-full
									overflow-auto
									rounded-md
									bg-white
									py-1
									text-base
									shadow-lg
									ring-1
									ring-black
									ring-opacity-5
									focus:outline-none
									sm:text-sm
								"
							>
								<ListboxOption
									v-slot="{
										active,
										selected
									}"
									v-for="(
										role,
										index
									) in roles"
									:key="
										index
									"
									:value="
										role
									"
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
												selected
													? 'font-medium'
													: 'font-normal',
												'block truncate'
											]"
											>{{
												role
											}}</span
										>
										<span
											v-if="
												selected
											"
											class="
												absolute
												inset-y-0
												left-0
												flex
												items-center
												pl-3
												text-amber-600
											"
										>
											<CheckIcon
												class="
													h-5
													w-5
												"
												aria-hidden="true"
											/>
										</span>
									</li>
								</ListboxOption>
							</ListboxOptions>
						</transition>
					</div>
				</Listbox>
			</li>
		</ul>
		<hr class="my-2" />
		<ul>
			<li class="mt-2">
				<NuxtLink
					to="/profile"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<ArchiveIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					My Account
				</NuxtLink>
			</li>

			<li class="mt-2">
				<NuxtLink
					to="/profile/edit"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<UserIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					My Personal Information
				</NuxtLink>
			</li>
			<li class="mt-2">
				<NuxtLink
					to="/profile/notifications"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<BellIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					Notifications
				</NuxtLink>
			</li>
		</ul>
		<hr class="my-2" />
		<ul v-if="selectedRole === roles[0]">
			<li class="mt-2">
				<NuxtLink
					to="/profile/consumer/orders"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<BookOpenIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					My Orders
				</NuxtLink>
			</li>
			<li class="mt-2">
				<NuxtLink
					to="/profile/consumer/wishlist"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<HeartIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
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
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<UserIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					My Storages
				</NuxtLink>
			</li>
			<li class="mt-2">
				<NuxtLink
					to="/profile/orders"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<BookOpenIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					Orders
				</NuxtLink>
			</li>
		</ul>
		<ul v-if="selectedRole === roles[2]">
			<li class="mt-2">
				<NuxtLink
					to="/profile/myTransports"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<TruckIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					My Tranports
				</NuxtLink>
			</li>
			<li class="mt-2">
				<NuxtLink
					to="/profile/orders"
					active-class="bg-black bg-opacity-10"
					class="
						text-gray-900
						group
						flex
						w-full
						items-center
						rounded-md
						px-2
						py-2
						text-sm
						hover:(bg-black
						bg-opacity-5)
					"
				>
					<BookOpenIcon
						class="
							mr-2
							h-5
							w-5
							text-violet-400
						"
						aria-hidden="true"
					/>
					Deliveries
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
import {
	ArchiveIcon,
	UserIcon,
	BookOpenIcon,
	BellIcon,
	HeartIcon,
	TruckIcon
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
});

let bgColor = ref('#000000');
let textColor = ref('#ffffff');
</script>
