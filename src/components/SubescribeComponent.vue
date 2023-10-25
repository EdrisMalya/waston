<template>
  <div class="bg-[#A79132] h-[400px] relative">
    <div
      class="absolute w-full h-full"
      style="background-image: url('/bg3.png'); z-index: 1"
    />
    <div class="max-w-6xl mx-auto px-12 py-24 grid grid-cols-2 gap-8">
      <div>
        <p class="text-white text-xl">SUBSCRIBE NOW</p>
        <p class="text-5xl font-bold text-white mt-5">
          Want to know about our offers first?
        </p>
      </div>
      <div class="flex items-center space-x-5">
        <div class="flex-1">
          <input
            class="w-full py-4 px-8 rounded-full text-lg"
            placeholder="Enter email address"
          />
        </div>
        <div>
          <button
            class="p-5 rounded-full bg-blue-600 text-white"
            style="z-index: 999"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
