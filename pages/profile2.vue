<template>
    <div>
        <Navbar></Navbar>

        <div class="bg-white w-20">
            <MenuItems
                class="absolute right-0 mt-2 z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                    <div class="group w-full rounded-md px-2 py-2 text-sm">
                        <div class="flex items-center">Bonnie Green</div>
                        <div class="flex items-center font-semibold">name@mail.com</div>
                    </div>
                </div>
                <div class="px-1 py-1">
                    <li>
                        <button :class="[
                            active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                            ' group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <PencilIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                            Edit
                        </button>
                    </li>
                    <li>
                        <button :class="[
                            active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <!-- <DuplicateIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      /> -->
                            Duplicate
                        </button>
                    </li>
                </div>
                <div class="px-1 py-1">
                    <li>
                        <button :class="[
                            active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <!-- <ArchiveIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      /> -->
                            Profile
                        </button>
                    </li>
                    <li>
                        <button :class="[
                            active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <!-- <CogIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      /> -->
                            Settings
                        </button>
                    </li>
                </div>

                <div class="px-1 py-1">
                    <li>
                        <button :class="[
                            active ? '!bg-black !bg-opacity-5' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <!-- <LogoutIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      /> -->
                            Sign out
                        </button>
                    </li>
                </div>
            </MenuItems>
        </div>
    </div>
</template>
