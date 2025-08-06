<!-- eslint-disable @stylistic/quotes -->
<!-- eslint-disable @stylistic/indent -->
<script setup lang="ts">
import Features from "~/components/home/features.vue";
import Partners from "~/components/home/partners.vue";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <Features />
    <Partners />
  </div>
</template>
