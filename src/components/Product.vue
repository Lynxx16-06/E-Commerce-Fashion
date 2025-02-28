<template>
  <!-- BAJU -->
  <div id="product" class="bg-white mt-45">
    <h1 class="md:max-w-4xl w-full text-center md:text-left md:ml-50 font-bold text-4xl">Baju</h1>
    <div class="mt-20 flex w-full gap-y-10 md:gap-y-0 md:flex-row flex-col md:gap-30 md:justify-center ">
      <div v-for="baju in style" :key="baju.name" class="justify-center flex">
      <div class="col-span-2">
          <img :src="baju.img" alt="" class="w-70 h-90 rounded-2xl">
          <div class="justify-between flex">
            <span>{{ baju.name }}</span>
            <span>{{ baju.harga }}</span>
          </div>
          <div class="flex justify-between items-center">
            <button @click="openModal" class="mt-3 bg-blue-400 px-15 py-2 rounded-lg cursor-pointer">View</button>
            <button @click="openModal"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center md:justify-end md:w-422 mt-5 w-full  ">
      <a href="/baju" class="bg-blue-500 px-3 rounded-lg py-2 text-white">Lihat Semua</a>
    </div>
  </div>

  <!-- SEPATU -->
  <div class="bg-white mt-40">
    <h1 class="md:max-w-4xl md:ml-50 font-bold text-4xl w-full text-center md:text-left !important">Sepatu</h1>
    <div class="mt-20 flex w-full gap-y-10 md:gap-y-0 flex-col md:flex-row md:gap-30 md:justify-center">
      <div v-for="sepatu in sepatu" :key="sepatu.id" class="flex justify-center">
      <div class="col-span-2">
        <img :src="sepatu.img" alt="" class="w-70 h-90 rounded-2xl">
        <div class="justify-between flex">
          <span>{{ sepatu.name }}</span>
          <span>{{ sepatu.harga }}</span>
        </div>
        <div class="flex justify-between items-center">
          <button @click="openModalSepatu" class="mt-3 bg-blue-400 px-15 py-2 rounded-lg cursor-pointer">View</button>
          <button @click="openModalSepatu"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
        </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center md:justify-end md:w-422 mt-5 w-full  ">
      <a href="/sepatu" class="bg-blue-500 px-3 rounded-lg py-2 text-white">Lihat Semua</a>
    </div>
  </div>

  <!-- CELANA -->
  <div class="bg-white mt-40">
    <h1 class="md:max-w-4xl md:ml-50 font-bold text-4xl w-full text-center md:text-left">Celana</h1>
    <div class="mt-20 flex w-full gap-y-10 md:gap-y-0 flex-col md:flex-row md:gap-30 md:justify-center">
      <div v-for="celana in celana" :key="celana.id" class="flex justify-center">
      <div class="col-span-2">
        <img :src="celana.img" alt="" class="w-70 h-90 rounded-2xl">
        <div class="justify-between flex">
          <span>{{ celana.name }}</span>
          <span>{{ celana.harga }}</span>
        </div>
        <div class="flex justify-between items-center">
          <button @click="openModalCelana" class="mt-3 bg-blue-400 px-15 py-2 rounded-lg cursor-pointer">View</button>
          <button @click="openModalCelana"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
        </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center md:justify-end md:w-422 mt-5 w-full  ">
      <a href="/celana" class="bg-blue-500 px-3 rounded-lg py-2 text-white">Lihat Semua</a>
    </div>
  </div>


  <!-- POP UP Baju-->
  <div class="">
    <div v-if="isModal" class="flex flex-col md:flex-row md:w-screen md:h-screen fixed inset-0 z-10 backdrop-blur-md backdrop-opacity-80 ">
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
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
              </div>
              <div class="flex gap-3 mb-19">
                <button @click="activeColor(index)" :class="activeIndexColor === index ? 'border-2 border-cyan-500 rounded-full' : ''" v-for="(color, index) in colorbaju" :key="index">
                    <div :class="[color.currency ? 'blur-sm' : '']" :style="{backgroundColor: color.color }" class="h-10 w-10 rounded-full"></div>
                </button>
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
                <button @click="addToCart" class="fill-white flex p-2 items-center rounded-lg cursor-pointer bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style=""><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></button>
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
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
              </div>
              <div class="flex gap-3 mb-19">
                <button @click="activeColor(index)" :class="activeIndexColor === index ? 'border-2 border-cyan-500 rounded-full' : ''" v-for="(color, index) in colorbaju" :key="index">
                    <div :class="[color.currency ? 'blur-sm' : '']" :style="{backgroundColor: color.color }" class="h-10 w-10 rounded-full"></div>
                </button>
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
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg></span>
              </div>
              <div class="flex gap-3 mb-19">
                <button @click="activeColor(index)" :class="activeIndexColor === index ? 'border-2 border-cyan-500 rounded-full' : ''" v-for="(color, index) in colorbaju" :key="index">
                    <div :class="[color.currency ? 'blur-sm' : '']" :style="{backgroundColor: color.color }" class="h-10 w-10 rounded-full"></div>
                </button>
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


  <div class="mt-30 text-center ">
    <a href="/marketplace" class="bg-blue-400 px-5 py-2 cursor-pointer rounded-lg">Learn More</a>
  </div>
   

   <!-- Cart Popup -->
  <div v-if="isCartOpen" class="fixed inset-0 z-50 overflow-hidden">
    <div class="absolute inset-0 bg-opacity-50" @click="toggleCart"></div>
    <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl" data-aos="fade-left" data-aos-duration="500">
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-lg font-semibold">Keranjang Belanja</h2>
        <button @click="toggleCart" class="p-2" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </button>
      </div>

      <div class="p-4 h-full overflow-auto">
        <div v-if="cartItems.length === 0" class="text-center text-gray-500 mt-4">
          Keranjang belanja Anda kosong
        </div>
        <div v-else>
          <div v-for="(item, index) in cartItems" :key="index" class="flex items-center gap-4 py-4 border-b">
            <img :src="item.img" alt="" class="w-20 h-20 object-cover rounded">
            <div class="flex-1">
              <h3 class="font-medium">{{ item.name }}</h3>
              <p class="text-sm text-gray-500">Size: {{ item.size }}</p>
              <p class="text-sm text-gray-500">Color: {{ item.color }}</p>
              <div class="flex items-center gap-2 mt-2">
                <button @click="updateCartQuantity(index, -1)" 
                        class="bg-white px-2.5 rounded-md cursor-pointer border">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="updateCartQuantity(index, 1)"
                        class="bg-white px-2 rounded-md cursor-pointer border">+</button>
              </div>
            </div>
            <div class="text-right">
              <p class="font-medium">{{ item.harga }}</p>
              <button @click="removeFromCart(index)" 
                      class="text-red-500 text-sm mt-2 cursor-pointer">Hapus</button>
            </div>
          </div>

          <h1 class="font-bold text-center text-2xl mt-5">Isi Alamat dan Data Diri</h1>
          <div class="border-t pt-4 h-100 overflow-x-auto">
            <!-- DATA DIRI -->
              <form action="" class="" @submit.prevent="kirim">
                <div class="flex flex-col font-bold">
                  <label for="nama">Nama</label>
                  <input type="text" v-model="nama" placeholder="Nama Anda" class="p-2 outline-none font-normal">
                  <label for="email">Email</label>
                  <input type="email" v-model="email" placeholder="Email Anda" class="p-2 outline-none font-normal">
                  <label for="alamat">Alamat</label>
                  <input type="text" v-model="text" placeholder="Alamat Anda" class="p-2 outline-none font-normal">
                  <label for="nomer">No Hp</label>
                  <div class="flex items-center">
                    <select name="" id="" v-model="nomerhp" class="">
                      <option value="" disabled selected>Pilih</option>
                      <option value="+62">IDN</option>
                      <option value="+81">USA</option>
                      <option value="+12">MY</option>
                      <option value="+11">JPN</option>
                    </select>
                    <div class="">{{ nomerhp }}</div>
                    <input type="number" v-model="number" placeholder="Nomer Hp" class="p-2 w-full font-normal appearance-none border-transparent focus:outline-none focus:border-none focus:ring-0">
                  </div>
                  <div class="flex">
                    <select name="" id="" v-model="payment" class="border-none outline-none focus:outline-none">
                      <option value="" class="border-none outline-none focus:outline-none">Pembayaran</option>
                      <option value="BRI (838367327623687) (LynxxFashion)">BRI</option>
                      <option value="BNI (51251244125) (LynxxFashion)">BNI</option>
                      <option value="BCA (15623562) (LynxxFashion)">BCA</option>
                      <option value="Mandiri (7236326326323) (LynxxFashion)">Mandiri</option>
                      <option value="LynxxBank (123456789) (LynxxFashion)">LynxxBank</option>
                      <option value="COD">COD</option>
                    </select>
                    <button type="button" @click="qris" class="bg-blue-400 px-4 py-1 mt-2 rounded-lg">Tampilkan Qris</button>
                  </div>
                  <span class="font-bold text-blue-500 border rounded-lg p-3 w-full my-5">{{ payment }}</span>
                  <div v-if="tampilQris">
                    <img value="qris" src="../assets/img/qris.png" alt="">
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Total:</span>
                  <span class="font-semibold">{{ calculateTotal }}</span>
                </div>
                <button type="submit" class="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg cursor-pointer">
                  Checkout
                </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Cart Icon dengan Badge -->
  <div class="fixed right-4 top-64">
    <button @click="toggleCart" 
            class="bg-blue-400 rounded-full shadow-xl cursor-pointer w-11 h-11 p-2 relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
        <circle cx="10.5" cy="19.5" r="1.5"></circle>
        <circle cx="17.5" cy="19.5" r="1.5"></circle>
      </svg>
      <span v-if="cartItems.length > 0" 
            class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
        {{ cartItems.length }}
      </span>
    </button>
  </div>
</template>


<script>
import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
        activeIndex: null,
        activeIndexColor: null,
        count: 1,
        payment: '',
        nomerhp: '+62',
        nama: '',
        email: '',
        text: '',
        number: '',
        berkas: '',
        cartItems: [],
        isCartOpen: false,
        isModal: false,
        isModalSepatu: false,
        isModalCelana: false,
        style: [
          {id:1, name: 'Baju Kaos', harga: 'Rp 100.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg'},
          {id:2, name: 'Baju Kaos', harga: 'Rp 100.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg'},
          {id:3, name: 'Baju Kaos', harga: 'Rp 100.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg'},
          {id:4, name: 'Baju Kaos', harga: 'Rp 100.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg'},
        ],
        colorbaju: [
          {id: 1, name: 'Biru', color: '#51a2ff', currency: false},
          {id: 2, name: 'Putih', color: '#ffff', currency: false},
          {id: 3, name: 'Hitam', color: '#000', currency: false},
        ],
        details: [
          {id:1, name: 'Baju Kaos', harga: 'Rp 100.000', img: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        ],
        size: [
          {id:1, name: 'S', sizes: '40'},
          {id:2, name: 'M', sizes: '41'},
          {id:3, name: 'L', sizes: '42'},
          {id:3, name: 'XL', sizes: '43'},
          {id:3, name: 'XXL', sizes: '44'},
          {id:3, name: '3XL', sizes: '45'},
        ],
        sepatu: [
          {id:1, name: 'Sepatu 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-lmgcwh8s34074e@resize_w450_nl.webp'},
          {id:2, name: 'Sepatu 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7ras9-m52gdi3xcl5i72.webp'},
          {id:3, name: 'Sepatu 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98v-lm2zn9qsg26fc1@resize_w450_nl.webp'},
          {id:4, name: 'Sepatu 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-m0cx2xzj9xr40c@resize_w450_nl.webp'},
        ],
        detailsSepatu: [
          {id:1, name: 'Sepatu 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-lmgcwh8s34074e@resize_w450_nl.webp'},
        ],
        celana: [
          {id:1, name: 'Celana 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7rasf-m3093q9fspa7b0.webp'},
          {id:2, name: 'Celana 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r992-lqucqmwfcwuh22.webp'},
          {id:3, name: 'Celana 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98w-lqucqmwfmqtldf.webp'},
          {id:4, name: 'Celana 1', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98t-lyuf1tyfuiit35.webp'},
        ],
        detailsCelana: [
          {id:1, name: 'Celana', harga: 'Rp 100.000', img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98t-lyuf1tyfuiit35.webp'},
        ],
        pembayaran: [
                {id: 1, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rask-m3elfv3kdsb4ae', name: 'BRI'},
                {id: 2, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasc-m3elfssvqtqn58', name: 'BNI'},
                {id: 3, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasa-m3elfqc3cpsg90', name: 'BCA'},
                {id: 4, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasb-m3elgtxze51rb0', name: 'SeaBank'},
                {id: 5, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasg-m3elfigsva7j31', name: 'Alfamart'},
                {id: 6, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasg-m3elgbu7vvkge8', name: 'Mandiri '},
            ],
      }
    },
    computed: {
  calculateTotal() {
    return this.cartItems.reduce((total, item) => {
      const price = parseInt(item.harga.replace('Rp ', '').replace('.', ''));
      return total + (price * item.quantity);
    }, 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  }
},

    methods: {
      kirim() {

  if (!this.nama || !this.email || !this.text || !this.payment) {
    Swal.fire({
      title: 'Form Belum Lengkap!',
      text: 'Mohon isi semua form sebelum mengirim.',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Ambil total belanja
  const total = typeof this.calculateTotal === 'function' 
    ? this.calculateTotal() 
    : this.calculateTotal;

  // Buat detail belanja dari `cartItems`
  let detailBelanja = "📦 *Detail Pesanan:*\n";
  this.cartItems.forEach((item, index) => {
    detailBelanja += `${index + 1}. *Nama Barang:* ${item.name}\n 
    *Ukuran Barang:*  ${item.size}\n
    *Warna Barang:* ${item.color}\n
    *Jumlah Barang:* (${item.quantity}x)\n
    *Harga Barang:* ${item.harga}\n
    =====================================`
  });

  // Buat pesan untuk WhatsApp
  const message = `*Halo, saya ingin melakukan checkout!*\n
  ======================================
  *Nama:* ${this.nama}\n
  *Email:* ${this.email}\n
  *Alamat:* ${this.text}\n
  *Nomer:* ${this.number}\n
  *Pembayaran:* ${this.payment}\n
  ======================================
  ${detailBelanja}
  💰 *Total Belanja:* ${total}\n
  Terima kasih!`;

  const encodedMessage = encodeURIComponent(message);
  const waNumber = "6282253355239";
  const whatsappURL = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedMessage}`;

  console.log("WhatsApp URL:", whatsappURL); 

  Swal.fire({
    title: 'Mohon Tunggu!',
    text: 'Pesanan Akan Segera Diproses.',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 1000);
  });
},
      saveCartToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      },

      openPayment() {
        this.Payment = !this.Payment;
      },
      qris() {
        Swal.fire ({
          title: 'Mohon Maaf',
          text: 'Pembayaran dengan QRIS belum tersedia',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      },
      openModal() {
        this.isModal = !this.isModal ;
      },
      openModalSepatu() {
        this.isModalSepatu = !this.isModalSepatu ;
      },
      openModalCelana() {
        this.isModalCelana = !this.isModalCelana ;
      },
      countminus() {
        if (this.count > 1) this.count -= 1;
      },
      countplus() {
        this.count += 1
      },
      active(index) {
        this.activeIndex = index
      },
      activeColor(index) {
        this.activeIndexColor = index
      },
      toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    addToCart() {
      if (this.activeIndex === 0) {
        Swal.fire ({
          title: 'Mohon Maaf',
          text: 'Ukuran yang anda pilih tidak tersedia',
          icon: 'info',
          confirmButtonText: 'OK'
        })
        return;
      }

      if (this.count === 0) {
        alert('Silakan pilih jumlah barang');
        return;
      }

      if (this.activeIndexColor === 0) {
        Swal.fire ({
          title: 'Mohon Maaf',
          text: 'Warna yang anda pilih tidak tersedia',
          icon: 'info',
          confirmButtonText: 'OK'
        })
        return;
      }
      
      if (!this.activeIndexColor) {
        Swal.fire({
          title: 'Anda Belum Mengisi Warna',
          text: 'Mohon isi warna terlebih dahulu ',
          icon: 'warning',
          confirmButtonText: 'OK'
      });
        return;
      }


      if (!this.activeIndex) {
        Swal.fire({
          title: 'Anda Belum Mengisi Ukuran',
          text: 'Mohon isi ukuran terlebih dahulu',
          icon: 'warning',
          confirmButtonText: 'OK'
      });
        return;
      }

      let selectedProduct;
      let selectedSize;
      let selectedColor;

      if (this.isModal) {
        selectedProduct = this.details[0];
        selectedSize = this.size[this.activeIndex].name;
        selectedColor = this.colorbaju[this.activeIndexColor].name;
      } else if (this.isModalSepatu) {
        selectedProduct = this.detailsSepatu[0];
        selectedSize = this.size[this.activeIndex].sizes;
        selectedColor = this.colorbaju[this.activeIndexColor].name;
      } else if (this.isModalCelana) {
        selectedProduct = this.detailsCelana[0];
        selectedSize = this.size[this.activeIndex].sizes;
        selectedColor = this.colorbaju[this.activeIndexColor].name;
      }

      const cartItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        harga: selectedProduct.harga,
        img: selectedProduct.img,
        size: selectedSize,
        color: selectedColor,
        quantity: this.count
      };

      const existingItemIndex = this.cartItems.findIndex(
        item => item.id === cartItem.id && item.size === cartItem.size && item.color === cartItem.color
      );

      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity += this.count;
      } else {
        this.cartItems.push(cartItem);
      }

      this.saveCartToLocalStorage();

      // Reset count dan tampilkan cart
      this.count = 0;
      this.activeIndex = null;
      this.activeIndexColor = null;
      this.isCartOpen = true;
      
      // Tutup modal produk
      this.isModal = false;
      this.isModalSepatu = false;
      this.isModalCelana = false;
    },

    updateCartQuantity(index, change) {
      const newQuantity = this.cartItems[index].quantity + change;
      if (newQuantity > 0) {
        this.cartItems[index].quantity = newQuantity;
      } else {
        this.cartItems.splice(index, 1);
      }
      this.saveCartToLocalStorage();
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }
}
</script>