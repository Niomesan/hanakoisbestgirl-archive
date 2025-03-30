<template>
    <Transition>
        <div v-if="menuOpen" class="bg-[#F0F0F0] w-[100%] h-[470px] pt-2 overflow-hidden">
            <div id="routerdiv"
                class="text-[#9c9c9cb3] flex flex-col gap-3 p-2 font-bold text-[16px] tracking-[.06rem] justify-center items-center opacity-0 menu-content">
                <RouterLink to="/">
                    <p>Featured</p>
                </RouterLink>
                <RouterLink to="/page/06">
                    <p>(Newest Hanas) 1251-1500</p>
                </RouterLink>
                <RouterLink to="/page/01">
                    <p>1-250</p>
                </RouterLink>
                <RouterLink to="/page/02">
                    <p>251-500</p>
                </RouterLink>
                <RouterLink to="/page/03">
                    <p>501-750</p>
                </RouterLink>
                <RouterLink to="/page/04">
                    <p>751-1000</p>
                </RouterLink>
                <RouterLink to="/page/05">
                    <p>1001-1250</p>
                </RouterLink>
                <RouterLink to="/page/nsfw">
                    <p>NSFW</p>
                </RouterLink>
                <RouterLink to="/donators">
                    <p>Donators</p>
                </RouterLink>
                <RouterLink to="/updates">
                    <p>Updates/Side Blog</p>
                </RouterLink>
                <RouterLink to="/contact_info">
                    <p>Info</p>
                </RouterLink>
            </div>
        </div>
    </Transition>
    <button @click="menuOpen = !menuOpen"
        class="text-[#9c9c9c] w-[100%] h-[30px] text-[16px] tracking-wide text-center mt-2 mb-6">Menu</button>
</template>

<style scoped>
.v-enter-active {
    animation: slide 0.4s ease-in-out forwards;
}

.v-leave-active {
    animation: slide 0.4s ease-in-out reverse forwards;
}

.menu-content {
    animation: reveal-content 0.1s linear forwards;
}

@keyframes slide {
    0% {
        height: 0px;
    }

    100% {
        height: 470px;
    }
}

@keyframes reveal-content {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

RouterLink:active {
    color: black;
}
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const menuOpen = ref(false);
</script>