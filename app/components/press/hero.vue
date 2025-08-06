<template>
  <section
    class="relative w-full h-[320px] flex items-center justify-center overflow-hidden"
  >
    <img
      src="@/assets/press/hero.png"
      alt="Press Hero Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
      draggable="false"
    />
    <div
      class="relative w-full h-full z-10 container lg:flex lg:flex-col lg:justify-center"
    >
      <h1 class="text-4xl md:text-5xl max-w-lg font-bold mb-2 text-[#0D2C65]">
        Latest news and media from around the world
      </h1>
      <p class="text-lg font-normal text-[#6E80A3] max-w-2xl">
        Please write to us at media@bomba.co if you have a media enquiry. We'll
        do our best to get back to you as soon as possible.
      </p>

      <div class="space-y-2 cursor-pointer w-[8rem]">
        <a
          href="#"
          class="group flex items-center mt-6 font-medium text-[#2668EC] text-base relative w-fit"
        >
          Get press kit

          <span class="-rotate-45">
            <svg
              class="ml-2 w-4 h-4 text-[#2668EC]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14m0 0l-4-4m4 4l-4 4"
              />
            </svg>
          </span>
        </a>

        <span class="block w-full bg-[#2668EC] h-[2px]" />
      </div>
    </div>
  </section>
</template>
