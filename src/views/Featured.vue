<template>
    <p class="w-[90%] xl:w-[50%] text-[#666] m-auto text-[14px]">Note: Unless in a page specifically marked, all pics
        here are SFW</p>
    <p class="w-[90%] xl:w-[50%] text-[#666] m-auto text-[14px] lg:mb-15">Featured pictures of Hanako. If you wish to
        see the full collection start at the number pages. Pictures are in order of added, so for the newest ones hit
        the highest number</p>
    <!--Hanako images-->
    <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
        <viewer :images>
            <img v-for="image, k in images" :key="k" :src="`./featured/${image}`" alt="Hanako"
                class="p-3 hover:cursor-pointer" />
        </viewer>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = [
    "0.webp", "3.webp", "6.webp", "9.webp", "12.webp", "15.webp", "18.webp", "21.webp", "24.webp", "27.webp", "30.webp", "33.webp",
    "1.webp", "4.webp", "7.webp", "10.webp", "13.webp", "16.webp", "19.webp", "22.webp", "25.webp", "28.webp", "31.webp",
    "2.webp", "5.webp", "8.webp", "11.webp", "14.webp", "17.webp", "20.webp", "23.webp", "26.webp", "29.webp", "32.webp"
];
</script>