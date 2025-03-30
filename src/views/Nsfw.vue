<template>
  <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
    <viewer :images>
      <img v-for="image, k in images" :key="k" :src="`/NSFW/${image}`" alt="Hanako" class="p-3 cursor-pointer" />
    </viewer>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
  "NSFW001.webp", "NSFW015.webp", "NSFW029.webp", "NSFW044.webp", "NSFW058.webp", "NSFW072.webp", "NSFW086.webp", "NSFW100.webp",
  "NSFW002.webp", "NSFW016.webp", "NSFW030.webp", "NSFW045.webp", "NSFW059.webp", "NSFW073.webp", "NSFW087.webp", "NSFW101.webp",
  "NSFW003.webp", "NSFW017.webp", "NSFW031.webp", "NSFW046.webp", "NSFW060.webp", "NSFW074.webp", "NSFW088.webp", "NSFW102.webp",
  "NSFW004.webp", "NSFW018.webp", "NSFW032.webp", "NSFW047.webp", "NSFW061.webp", "NSFW075.webp", "NSFW089.webp", "NSFW103.webp",
  "NSFW005.webp", "NSFW019.webp", "NSFW033.webp", "NSFW048.webp", "NSFW062.webp", "NSFW076.webp", "NSFW090.webp", "NSFW104.webp",
  "NSFW006.webp", "NSFW020.webp", "NSFW034.webp", "NSFW049.webp", "NSFW063.webp", "NSFW077.webp", "NSFW091.webp", "NSFW105.webp",
  "NSFW007.webp", "NSFW021.webp", "NSFW035.webp", "NSFW050.webp", "NSFW064.webp", "NSFW078.webp", "NSFW092.webp", "NSFW106.webp",
  "NSFW008.webp", "NSFW022.webp", "NSFW036.webp", "NSFW051.webp", "NSFW065.webp", "NSFW079.webp", "NSFW093.webp",
  "NSFW009.webp", "NSFW023.webp", "NSFW037.webp", "NSFW052.webp", "NSFW066.webp", "NSFW080.webp", "NSFW094.webp",
  "NSFW010.webp", "NSFW024.webp", "NSFW038.webp", "NSFW053.webp", "NSFW067.webp", "NSFW081.webp", "NSFW095.webp",
  "NSFW011.webp", "NSFW025.webp", "NSFW039.webp", "NSFW054.webp", "NSFW068.webp", "NSFW082.webp", "NSFW096.webp",
  "NSFW012.webp", "NSFW026.webp", "NSFW040.webp", "NSFW055.webp", "NSFW069.webp", "NSFW083.webp", "NSFW097.webp",
  "NSFW013.webp", "NSFW027.webp", "NSFW041.webp", "NSFW056.webp", "NSFW070.webp", "NSFW084.webp", "NSFW098.webp",
  "NSFW014.webp", "NSFW028.webp", "NSFW043.webp", "NSFW057.webp", "NSFW071.webp", "NSFW085.webp", "NSFW099.webp"
]);
</script>