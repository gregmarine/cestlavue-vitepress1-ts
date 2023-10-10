<script setup lang="ts">
const props = defineProps(['title', 'excerpt', 'image', 'date', 'href']);
</script>

<template>
  <a :href="href" class="flex flex-shrink-0 xl:flex-grow-0 w-full xl:w-[38rem] p-3 border-2 rounded-2xl hover:border-sky-500">
    <div class="flex w-full">
      <div class="flex flex-shrink-0">
        <img class="rounded-2xl w-24 h-24 sm:w-48 sm:h-48 border-2" :src="image" :alt="title" />
      </div>
      <div class="flex flex-col ml-4">
        <h3 class="w-full text-xl font-bold">{{ title }}</h3>
        <small>{{ date }}</small>
        <p>{{ excerpt }}</p>
      </div>
    </div>
  </a>
</template>