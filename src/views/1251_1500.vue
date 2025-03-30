<template>
  <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
    <viewer :images>
      <img v-for="image, k in images" :key="k" :src="`/newest/${image}`" alt="Hanako"
        class="p-3 hover:cursor-pointer" />
    </viewer>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
  "1.webp", "10.webp", "19.webp", "28.webp", "37.webp", "46.webp", "55.webp", "64.webp", "73.webp", "82.webp", "91.webp", "100.webp",
  "2.webp", "11.webp", "20.webp", "29.webp", "38.webp", "47.webp", "56.webp", "65.webp", "74.webp", "83.webp", "92.webp",
  "3.webp", "12.webp", "21.webp", "30.webp", "39.webp", "48.webp", "57.webp", "66.webp", "75.webp", "84.webp", "93.webp",
  "4.webp", "13.webp", "22.webp", "31.webp", "40.webp", "49.webp", "58.webp", "67.webp", "76.webp", "85.webp", "94.webp",
  "5.webp", "14.webp", "23.webp", "32.webp", "41.webp", "50.webp", "59.webp", "68.webp", "77.webp", "86.webp", "95.webp",
  "6.webp", "15.webp", "24.webp", "33.webp", "42.webp", "51.webp", "60.webp", "69.webp", "78.webp", "87.webp", "96.webp",
  "7.webp", "16.webp", "25.webp", "34.webp", "43.webp", "52.webp", "61.webp", "70.webp", "79.webp", "88.webp", "97.webp",
  "8.webp", "17.webp", "26.webp", "35.webp", "44.webp", "53.webp", "62.webp", "71.webp", "80.webp", "89.webp", "98.webp",
  "9.webp", "18.webp", "27.webp", "36.webp", "45.webp", "54.webp", "63.webp", "72.webp", "81.webp", "90.webp", "99.webp"
]);
</script>