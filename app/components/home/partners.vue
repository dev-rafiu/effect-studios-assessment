<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable @stylistic/indent -->
<!-- eslint-disable vue/html-self-closing -->

<script setup lang="ts">
const partners = [
  {
    name: "Access Bank",
    src: "/partners/access-bank.png",
    alt: "Access Bank",
    class: "object-cover",
    containerClass: "size-16 border flex items-center",
  },
  {
    name: "Identity Pass",
    src: "/partners/identity-pass.png",
    alt: "Identity Pass",
    class: "max-w-full h-12 object-contain",
    containerClass: "size-16 border flex items-center",
  },
  {
    name: "Paga",
    src: "/partners/paga.png",
    alt: "Paga",
    class: "max-w-full h-12 object-contain",
    containerClass:
      "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  },
  {
    name: "Rail Bank",
    src: "/partners/rail-bank.png",
    alt: "Rail Bank",
    class: "max-w-full h-12 object-contain",
    containerClass:
      "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  },
  {
    name: "Solid",
    src: "/partners/solid.png",
    alt: "Solid",
    class: "max-w-full h-12 object-contain",
    containerClass:
      "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  },
  {
    name: "Thunes",
    src: "/partners/thunes.png",
    alt: "Thunes",
    class: "max-w-full h-12 object-contain",
    containerClass:
      "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  },
  {
    name: "Truelayer",
    src: "/partners/truelayer.png",
    alt: "Truelayer",
    class: "max-w-full h-12 object-contain",
    containerClass:
      "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  },
  {
    name: "Truenarrative",
    src: "/partners/truenarrative.png",
    alt: "Truenarrative",
    class: "max-w-full h-12 object-contain",
    containerClass:
      "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  },
  {
    name: "VFD",
    src: "/partners/VFD.png",
    alt: "VFD",
    class: "max-w-full h-12 object-contain",
    containerClass:
      "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  },
];
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- text content -->
        <div class="space-y-6">
          <h2
            class="text-4xl lg:text-5xl max-w-sm font-medium text-[#0D2C65] leading-tight"
          >
            Trusted partners worldwide
          </h2>

          <p class="text-lg text-[#6E80A3] max-w-xs leading-5">
            We're partners with countless major organisations around the globe
          </p>
        </div>

        <!-- partners list -->
        <ul class="grid grid-cols-[repeat(3,minmax(0,10rem))] gap-6 lg:gap-8">
          <li
            v-for="partner in partners"
            :key="partner.name"
            class="w-full h-10 flex items-center"
          >
            <img :src="partner.src" :alt="partner.alt" :class="partner.class" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
