<template>
  <div>
    <HeroSection />

    <div class="container mx-auto py-16 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, idx) in pressItems"
          :key="idx"
          class="bg-[#F8F9FE] rounded-xl shadow-md overflow-hidden flex flex-col h-full transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="flex-1 flex flex-col">
            <div class="p-4 pb-0">
              <img
                :src="item.categoryImg"
                :alt="item.title + ' platform'"
                class="h-6 mb-2"
              />
              <h2 class="text-xl font-semibold leading-tight mb-1">
                {{ item.title }}
              </h2>
              <p class="text-gray-500 text-sm mb-2">{{ item.date }}</p>
            </div>

            <div class="mt-auto">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full object-cover h-48 md:h-40 lg:h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/press/hero.vue";

const pressItems = [
  {
    categoryImg: "/press/blog-names/connecting-africa.png",
    title: "Combining AI, fintech to solve African problems – Ericsson",
    date: "December 06, 2021",
    image: "/press/connecting-africa.png",
  },
  {
    categoryImg: "/press/blog-names/tech-labari.png",
    title: "Ghana to Host the 14th Africa Fintech Summit on October 8th",
    date: "May 24, 2022",
    image: "/press/tech-labari.png",
  },
  {
    categoryImg: "/press/blog-names/tech-stars.png",
    title: "Midterm Report: Techstars Toronto’s Second 2021 Class",
    date: "Dec 06, 2021",
    image: "/press/techstars.png",
  },
  {
    categoryImg: "/press/blog-names/medium.png",
    title:
      "Wise granted approval to join Zengin, Japan’s domestic payment system",
    date: "December 06, 2021",
    image: "/press/medium.png",
  },
  {
    categoryImg: "/press/blog-names/futhur-africa.png",
    title:
      "African startups to participate at Techstars Toronto October 2021 cohort",
    date: "October 23, 2021",
    image: "/press/furthur-africa.png",
  },
  {
    categoryImg: "/press/blog-names/tech-crunch.png",
    title: "More African startups get into Techstars Toronto",
    date: "October 18, 2021",
    image: "/press/tech-crunch.png",
  },
];
</script>
