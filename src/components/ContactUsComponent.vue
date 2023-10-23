<template>
  <q-intersection>
    <div class="relative h-[100vh] mt-[220px]">
      <div
        class="absolute w-full h-full bg-blue-800"
        style="
          background-image: url('src/assets/globe.png');
          background-position: center left;
          background-repeat: no-repeat;
          filter: brightness(40%);
        "
      />
      <div class="absolute top-0 w-full h-full">
        <div class="flex items-center justify-center h-full p-32">
          <div>
            <h2 class="text-6xl text-white">Contact US</h2>
            <form class="grid grid-cols-2 gap-5 mt-4">
              <div>
                <input
                  placeholder="First name"
                  class="w-[400px] border p-3 bg-transparent text-xl outline-none text-white"
                />
              </div>
              <div>
                <input
                  placeholder="Last name"
                  class="w-[400px] border p-3 bg-transparent text-xl outline-none text-white"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  class="w-[400px] border p-3 bg-transparent text-xl outline-none text-white"
                />
              </div>
              <div>
                <input
                  placeholder="Phone number"
                  class="w-[400px] border p-3 bg-transparent text-xl outline-none text-white"
                />
              </div>
              <div class="col-span-2">
                <textarea
                  rows="5"
                  placeholder="Enter your message"
                  class="w-full border p-3 bg-transparent text-xl outline-none text-white"
                />
              </div>
              <div>
                <q-btn
                  size="lg"
                  label="Save"
                  icon-right="save"
                  outline
                  color="white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </q-intersection>
</template>
