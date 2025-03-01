<template>
    <div class="bg-white">
  <header :class="['md:fixed absolute inset-x-0 top-0 z-50 transition-all duration-200', scrollActive ? 'md:bg-white md:shadow-2xl' : 'md:bg-transparent']">
    <div v-if="warning" class="flex justify-center bg-blue-600 w-full">
        <h1 class="">Get free delivery on orders over Rp 500.000</h1>
        <button @click="closeWarning" class="absolute right-0 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg></button>
    </div>
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="../assets/img/Logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a @click="active(index)" v-for="(item, index) in navigation" :key="index" :href="item.href" class="text-sm/6 font-semibold text-gray-900">{{ item.name }}</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/" class="text-sm/6 font-semibold text-red-500">Log Out<span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="../assets/img/Logo.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-red-500 hover:bg-gray-50">Log Out</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</div>

  <div class="bg-white overflow-x-hidden mt-14">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button" class="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400" @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="size-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4 border-t border-gray-200">
                  <h3 class="sr-only">Categories</h3>
                  <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                    <li v-for="category in subCategories" :key="category.name">
                      
                      <a :href="category.href" class="block px-2 py-3">{{ category.name }}</a>
                    </li>
                  </ul>

                  <Disclosure as="div" v-for="section in filters" :key="section.id" class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                        <span class="ml-6 flex items-center">
                          <PlusIcon v-if="!open" class="size-5" aria-hidden="true" />
                          <MinusIcon v-else class="size-5" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex gap-3">
                          <div class="flex h-5 shrink-0 items-center">
                            <div class="group grid size-4 grid-cols-1">
                              <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                              <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <label :for="`filter-mobile-${section.id}-${optionIdx}`" class="min-w-0 flex-1 text-gray-500">{{ option.label }}</label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="w-full sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pt-5 pb-6">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">High To Low</h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </MenuButton>
              </div>

              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 focus:outline-hidden">
                  <div class="py-1">
                    <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                      <a :href="option.href" :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm']">{{ option.name }}</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span class="sr-only">View grid</span>
              <Squares2X2Icon class="size-5" aria-hidden="true" />
            </button>
            <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden" @click="mobileFiltersOpen = true">
              <span class="sr-only">Filters</span>
              <FunnelIcon class="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <form class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>
              <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                <li v-for="category in subCategories" :key="category.name">
                  <a :href="category.href">{{ category.name }}</a>
                </li>
              </ul>

              <Disclosure as="div" v-for="section in filters" :key="section.id" class="border-b border-gray-200 py-6" v-slot="{ open }">
                <h3 class="-my-3 flow-root">
                  <DisclosureButton class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900">{{ section.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="size-5" aria-hidden="true" />
                      <MinusIcon v-else class="size-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex gap-3">
                      <div class="flex h-5 shrink-0 items-center">
                        <div class="group grid size-4 grid-cols-1">
                          <input :href="option.href" :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="radio" :checked="option.checked" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"></input>
                          <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                            <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <a :href="option.href" :for="`filter-${section.id}-${optionIdx}`" class="text-sm text-gray-600">{{ option.label }}</a>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>

            <!-- Product grid -->
            <div id="baju" class="lg:col-span-3 overflow-y-auto max-h-200">
               <!-- BAJU -->
                <main class="">
                    <div id="product" class="bg-white mb-4" data-aos="fade-up" data-aos-duration="600">
                      <div class="flex w-full gap-y-10 md:gap-y-0 md:flex-row flex-col md:gap-15 md:justify-center ">
                        <div v-for="baju in style" :key="baju.name" class="justify-center flex">
                        <div class="col-span-2">
                            <img :src="baju.img" alt="" class="w-70 h-90 rounded-2xl">
                            <div class="justify-between flex">
                              <span>{{ baju.name }}</span>
                              <span>{{ baju.harga }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                              <button @click="openModal" class="mt-3 bg-blue-400 px-15 py-2 rounded-lg cursor-pointer">View</button>
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="product" class="bg-white mb-4">
                      <div class="flex w-full gap-y-10 md:gap-y-0 md:flex-row flex-col md:gap-15 md:justify-center ">
                        <div v-for="celana in celana" :key="celana.name" class="justify-center flex">
                        <div class="col-span-2">
                            <img :src="celana.img" alt="" class="w-70 h-90 rounded-2xl">
                            <div class="justify-between flex">
                              <span>{{ celana.name }}</span>
                              <span>{{ celana.harga }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                              <button @click="openModalCelana" class="mt-3 bg-blue-400 px-15 py-2 rounded-lg cursor-pointer">View</button>
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="product" class="bg-white mb-4">
                      <div class="flex w-full gap-y-10 md:gap-y-0 md:flex-row flex-col md:gap-15 md:justify-center ">
                        <div v-for="sepatu in sepatu" :key="sepatu.name" class="justify-center flex">
                        <div class="col-span-2">
                            <img :src="sepatu.img" alt="" class="w-70 h-90 rounded-2xl">
                            <div class="justify-between flex">
                              <span>{{ sepatu.name }}</span>
                              <span>{{ sepatu.harga }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                              <button @click="openModalSepatu" class="mt-3 bg-blue-400 px-15 py-2 rounded-lg cursor-pointer">View</button>
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="product" class="bg-white">
                      <div class="flex w-full gap-y-10 md:gap-y-0 md:flex-row flex-col md:gap-15 md:justify-center ">
                        <div v-for="sendal in sendal" :key="sendal.name" class="justify-center flex">
                        <div class="col-span-2">
                            <img :src="sendal.img" alt="" class="w-70 h-90 rounded-2xl">
                            <div class="justify-between flex">
                              <span>{{ sendal.name }}</span>
                              <span>{{ sendal.harga }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                              <button @click="openModalSendal" class="mt-3 bg-blue-400 px-15 py-2 rounded-lg cursor-pointer">View</button>
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  <!-- POP UP Baju-->
                  <div class="">
                    <div v-if="isModal" class="flex flex-col md:flex-row md:w-screen md:h-screen fixed inset-0 z-10 backdrop-blur-md backdrop-opacity-80 md:mt-0 mt-15">
                      <div v-for="style in details" :key="style.id" class="bg-gray-600 fixed w-full h-200 md:left-140 md:top-60 p-10 md:h-145 md:w-200 overflow-y-auto">
                        <div class="flex flex-col md:flex-row gap-10">
                          <div class="w-full flex justify-center">
                            <img :src="style.img" alt="" class="md:h-90 md:w-70 w-40 h-50 ">
                          </div>
                          <div class="flex flex-col w-full">
                              <h1 class="text-3xl font-bold mb-5 text-white">{{ style.name }}</h1>
                              <div class="flex text-white mb-5">
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                              </div>
                            <div class="flex gap-3 mb-19">
                              <div class="w-10 h-10 rounded-full bg-blue-500 hover:border hover:border-white"></div>
                              <div class="w-10 h-10 rounded-full bg-white hover:border hover:border-black"></div>
                              <div class="w-10 h-10 rounded-full bg-black border-white border"></div>
                            </div>
                            <h1 class="text-white font-bold">Size</h1>
                            <div class="md:flex justify-around mt-5 mb-5 text-white w-full">
                              <button v-for="(item , index) in size" :key="index" @click="active(index)" :class="activeIndex === index ? 'bg-blue-400 border px-4 border-white rounded-lg' : 'border px-4 hover:border hover:border-white rounded-lg' ">
                                <div class="">
                                  <span>{{ item.name }}</span>
                                </div>
                              </button>
                            </div>
                            <div class="flex justify-between items-center w-full">
                              <div class="gap-5 flex">
                                <button class="bg-white px-2.5 rounded-md cursor-pointer" @click="countminus">-</button>
                                <span class="text-white">{{ count }}</span>
                                <button class="bg-white px-2 rounded-md cursor-pointer" @click="countplus">+</button>
                              </div>
                              <div>
                                <button @click="" class="fill-white flex p-2 items-center rounded-lg cursor-pointer bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
                              </div>
                          </div>
                          </div>
                        </div>
                        <div class="md:w-130 w-full text-justify mt-5 text-white">
                          <h1 class="font-bold">Description</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio atque, repudiandae exercitationem perspiciatis labore quo laudantium, doloremque autem quibusdam rerum inventore voluptas cum accusamus impedit modi molestiae blanditiis deleniti voluptatum?</p>
                        </div>
                        <button @click="openModal" class="absolute top-2 right-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style=""><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
                      </div>
                    </div>
                  </div>


                  <!-- POP UP SEPATU -->
                  <div class="">
                    <div v-if="isModalSepatu" class="flex flex-col md:flex-row md:w-screen md:h-screen fixed inset-0 z-10 backdrop-blur-md backdrop-opacity-80 ">
                      <div v-for="detailsSepatu in detailsSepatu" :key="detailsSepatu.id" class="bg-gray-600 fixed w-full h-200 md:left-140 md:top-60 p-10 md:h-145 md:w-200 overflow-y-auto">
                        <div class="flex flex-col md:flex-row gap-10">
                          <div class="w-full flex justify-center">
                            <img :src="detailsSepatu.img" alt="" class="md:h-90 md:w-70 w-40 h-50 ">
                          </div>
                          <div class="flex flex-col w-full">
                              <h1 class="text-3xl font-bold mb-5">{{ detailsSepatu.name }}</h1>
                              <div class="flex text-white mb-5">
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                              </div>
                            <div class="flex gap-3 mb-19">
                              <div class="w-10 h-10 rounded-full bg-blue-500 hover:border hover:border-white"></div>
                              <div class="w-10 h-10 rounded-full bg-white hover:border hover:border-black"></div>
                              <div class="w-10 h-10 rounded-full bg-black border-white border"></div>
                            </div>
                            <h1 class="text-white font-bold">Size</h1>
                            <div class="md:flex md:justify-around mt-5 mb-5 text-white w-full ">
                              <button v-for="(item , index) in size" :key="index" @click="active(index)" :class="activeIndex === index ? 'bg-blue-400 border px-4 border-white rounded-lg cursor-pointer' : 'border px-4 cursor-pointer hover:border hover:border-white rounded-lg', 'bg-transparent' ">
                                <div class="">
                                  <span>{{ item.sizes }}</span>
                                </div>
                              </button>
                            </div>
                            <div class="flex justify-between items-center w-full">
                              <div class="gap-5 flex">
                                <button class="bg-white px-2.5 rounded-md cursor-pointer" @click="countminus">-</button>
                                <span class="text-white">{{ count }}</span>
                                <button class="bg-white px-2 rounded-md cursor-pointer" @click="countplus">+</button>
                              </div>
                              <div>
                                <button @click="addToCart" class="fill-white flex p-2 items-center rounded-lg cursor-pointer bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
                              </div>
                          </div>
                          </div>
                        </div>
                        <div class="md:w-130 w-full text-justify mt-5 text-white">
                          <h1 class="font-bold">Description</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio atque, repudiandae exercitationem perspiciatis labore quo laudantium, doloremque autem quibusdam rerum inventore voluptas cum accusamus impedit modi molestiae blanditiis deleniti voluptatum?</p>
                        </div>
                        <button @click="openModalSepatu" class="absolute top-2 right-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style=""><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
                      </div>
                    </div>
                  </div>

                   <!-- POP UP CELANA -->
                    <div class="">
                      <div v-if="isModalCelana" class="flex flex-col md:flex-row md:w-screen md:h-screen fixed inset-0 z-10 backdrop-blur-md backdrop-opacity-80 ">
                        <div v-for="detailsCelana in detailsCelana" :key="detailsCelana.id" class="bg-gray-600 fixed w-full h-200 md:left-140 md:top-60 p-10 md:h-145 md:w-200 overflow-y-auto">
                          <div class="flex flex-col md:flex-row gap-10">
                            <div class="w-full flex justify-center">
                              <img :src="detailsCelana.img" alt="" class="md:h-90 md:w-70 w-40 h-50 ">
                            </div>
                            <div class="flex flex-col w-full">
                                <h1 class="text-3xl font-bold mb-5">{{ detailsCelana.name }}</h1>
                                <div class="flex text-white mb-5">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                </div>
                              <div class="flex gap-3 mb-19">
                                <div class="w-10 h-10 rounded-full bg-blue-500 hover:border hover:border-white"></div>
                                <div class="w-10 h-10 rounded-full bg-white hover:border hover:border-black"></div>
                                <div class="w-10 h-10 rounded-full bg-black border-white border"></div>
                              </div>
                              <h1 class="text-white font-bold">Size</h1>
                              <div class="md:flex md:justify-around mt-5 mb-5 text-white w-full ">
                                <button v-for="(item , index) in size" :key="index" @click="active(index)" :class="activeIndex === index ? 'bg-blue-400 border px-4 border-white rounded-lg cursor-pointer' : 'border px-4 cursor-pointer hover:border hover:border-white rounded-lg', 'bg-transparent' ">
                                  <div class="">
                                    <span>{{ item.sizes }}</span>
                                  </div>
                                </button>
                              </div>
                              <div class="flex justify-between items-center w-full">
                                <div class="gap-5 flex">
                                  <button class="bg-white px-2.5 rounded-md cursor-pointer" @click="countminus">-</button>
                                  <span class="text-white">{{ count }}</span>
                                  <button class="bg-white px-2 rounded-md cursor-pointer" @click="countplus">+</button>
                                </div>
                                <div>
                                  <button @click="addToCart" class="fill-white flex p-2 items-center rounded-lg cursor-pointer bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
                                </div>
                            </div>
                            </div>
                          </div>
                          <div class="md:w-130 w-full text-justify mt-5 text-white">
                            <h1 class="font-bold">Description</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio atque, repudiandae exercitationem perspiciatis labore quo laudantium, doloremque autem quibusdam rerum inventore voluptas cum accusamus impedit modi molestiae blanditiis deleniti voluptatum?</p>
                          </div>
                          <button @click="openModalCelana" class="absolute top-2 right-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style=""><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
                        </div>
                      </div>
                    </div>


                   <!-- POP UP SENDAL -->
                    <div class="">
                      <div v-if="isModalSendal" class="flex flex-col md:flex-row md:w-screen md:h-screen fixed inset-0 z-10 backdrop-blur-md backdrop-opacity-80 ">
                        <div v-for="detailsSendal in detailsSendal" :key="detailsSendal.id" class="bg-gray-600 fixed w-full h-200 md:left-140 md:top-60 p-10 md:h-145 md:w-200 overflow-y-auto">
                          <div class="flex flex-col md:flex-row gap-10">
                            <div class="w-full flex justify-center">
                              <img :src="detailsSendal.img" alt="" class="md:h-90 md:w-70 w-40 h-50 ">
                            </div>
                            <div class="flex flex-col w-full">
                                <h1 class="text-3xl font-bold mb-5">{{ detailsSendal.name }}</h1>
                                <div class="flex text-white mb-5">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
                                </div>
                              <div class="flex gap-3 mb-19">
                                <div class="w-10 h-10 rounded-full bg-blue-500 hover:border hover:border-white"></div>
                                <div class="w-10 h-10 rounded-full bg-white hover:border hover:border-black"></div>
                                <div class="w-10 h-10 rounded-full bg-black border-white border"></div>
                              </div>
                              <h1 class="text-white font-bold">Size</h1>
                              <div class="md:flex md:justify-around mt-5 mb-5 text-white w-full ">
                                <button v-for="(item , index) in size" :key="index" @click="active(index)" :class="activeIndex === index ? 'bg-blue-400 border px-4 border-white rounded-lg cursor-pointer' : 'border px-4 cursor-pointer hover:border hover:border-white rounded-lg', 'bg-transparent' ">
                                  <div class="">
                                    <span>{{ item.sizes }}</span>
                                  </div>
                                </button>
                              </div>
                              <div class="flex justify-between items-center w-full">
                                <div class="gap-5 flex">
                                  <button class="bg-white px-2.5 rounded-md cursor-pointer" @click="countminus">-</button>
                                  <span class="text-white">{{ count }}</span>
                                  <button class="bg-white px-2 rounded-md cursor-pointer" @click="countplus">+</button>
                                </div>
                                <div>
                                  <button @click="addToCart" class="fill-white flex p-2 items-center rounded-lg cursor-pointer bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
                                </div>
                            </div>
                            </div>
                          </div>
                          <div class="md:w-130 w-full text-justify mt-5 text-white">
                            <h1 class="font-bold">Description</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio atque, repudiandae exercitationem perspiciatis labore quo laudantium, doloremque autem quibusdam rerum inventore voluptas cum accusamus impedit modi molestiae blanditiis deleniti voluptatum?</p>
                          </div>
                          <button @click="openModalSendal" class="absolute top-2 right-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style=""><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
                        </div>
                      </div>
                    </div>
                </main>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, Bars3Icon } from '@heroicons/vue/20/solid';

export default {
  components: {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Bars3Icon,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
  },
  data() {
    return {
      baju: true,
      isModal: false,
      isModalSepatu: false,
      isModalCelana: false,
      isModalSendal: false,
      mobileMenuOpen: false,
      count: 0,
      activeIndex: null,
      navigation: [
          { name: 'Product', href: '/home'},
          { name: 'Marketplace', href: '/marketplace'},
          { name: 'Company', href: '/company'},
      ],
      sortOptions: [
        { name: 'Most Popular', href: '/mostpopular', current: true },
        { name: 'Best Rating', href: '/bestrating', current: false },
        { name: 'Price: Low to High', href: '/lowtohigh', current: false },
        { name: 'Price: High to Low', href: '/hightolow', current: false },
      ],
      subCategories: [
        { name: 'Baju', href: '/baju' },
        { name: 'Celana', href: '/celana' },
        { name: 'Sepatu', href: '/sepatu' },
        { name: 'Sendal', href: '/sendal' },
        { name: 'Hoodie/Jacket', href: '/hoodie' },
      ],
      filters: [
        {
          id: 'color',
          name: 'Color',
          options: [
            { value: 'white', label: 'White', checked: false, href:'/white' },
            { value: 'blue', label: 'Blue', checked: true, href:'/blue' },
            { value: 'brown', label: 'Brown', checked: false, href:'/brown' },
            { value: 'green', label: 'Green', checked: false, href: '/brown' },
            { value: 'purple', label: 'Purple', checked: false, href: '/purple' },
          ],
        },
        {
          id: 'category',
          name: 'Category',
          options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
          ],
        },
        {
          id: 'size',
          name: 'Size',
          options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
          ],
        },
      ],
      style: [
        {id:1, name: 'Baju Kaos', harga: 'Rp 500.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {id:2, name: 'Baju Kaos', harga: 'Rp 400.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg'},
        {id:3, name: 'Baju Kaos', harga: 'Rp 300.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg'},
        {id:4, name: 'Baju Kaos', harga: 'Rp 200.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg'},
      ],
      details: [
        {id:1, name: 'Baju Kaos', harga: 'Rp 300.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg'},
      ],
      sepatu: [
        {id:1, name: 'Sepatu 1', harga: 'Rp 400.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-lmgcwh8s34074e@resize_w450_nl.webp'},
        {id:2, name: 'Sepatu 1', harga: 'Rp 300.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7ras9-m52gdi3xcl5i72.webp'},
        {id:3, name: 'Sepatu 1', harga: 'Rp 150.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98v-lm2zn9qsg26fc1@resize_w450_nl.webp'},
        {id:4, name: 'Sepatu 1', harga: 'Rp 90.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-m0cx2xzj9xr40c@resize_w450_nl.webp'},
      ],
      detailsSepatu: [
        {id:1, name: 'Sepatu 1', harga: 'Rp 150.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-lmgcwh8s34074e@resize_w450_nl.webp'},
      ],
      celana: [
        {id:1, name: 'Celana 1', harga: 'Rp 800.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7rasf-m3093q9fspa7b0.webp'},
        {id:2, name: 'Celana 1', harga: 'Rp 600.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r992-lqucqmwfcwuh22.webp'},
        {id:3, name: 'Celana 1', harga: 'Rp 400.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98w-lqucqmwfmqtldf.webp'},
        {id:4, name: 'Celana 1', harga: 'Rp 200.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98t-lyuf1tyfuiit35.webp'},
      ],
      detailsCelana: [
        {id:1, name: 'Celana', harga: 'Rp 600.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98t-lyuf1tyfuiit35.webp'},
      ],
      sendal: [
        {id:1, name: 'Sendal 1', harga: 'Rp 800.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98r-lx9m6lye52wt9a@resize_w450_nl.webp'},
        {id:2, name: 'Sendal 1', harga: 'Rp 600.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7rasg-m145z52cwh9s7b.webp'},
        {id:3, name: 'Sendal 1', harga: 'Rp 500.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98u-lydcarps7aw867.webp'},
        {id:4, name: 'Sendal 1', harga: 'Rp 300.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98z-lyjgpja9n66g5c.webp'},
      ],
      detailsSendal: [
        {id:1, name: 'Sendal', harga: 'Rp 300.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98r-lx9m6lye52wt9a@resize_w450_nl.webp'},
      ],
      size: [
        {id:1, name: 'S', sizes: '40'},
        {id:2, name: 'M', sizes: '41'},
        {id:3, name: 'L', sizes: '42'},
        {id:3, name: 'XL', sizes: '43'},
        {id:3, name: 'XXL', sizes: '44'},
        {id:3, name: '3XL', sizes: '45'},
      ],
      mobileFiltersOpen: false,
    };
  },
  methods: {
      baju() {
          this.baju = !this.baju; 
      },
      active(index) {
      this.activeIndex = index
      },
      openModal() {
      this.isModal = !this.isModal ;
      },
      countminus() {
      if (this.count > 1) this.count -= 1;
      },
      countplus() {
        this.count += 1
      },
      openModalSepatu() {
      this.isModalSepatu = !this.isModalSepatu ;
      },
      openModalCelana() {
      this.isModalCelana = !this.isModalCelana ;
      },
      openModalSendal() {
      this.isModalSendal = !this.isModalSendal ;
      },
},
}
</script>