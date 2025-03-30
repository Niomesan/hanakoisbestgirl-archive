<template>
  <Mobilerouter v-if="screenSize <= 768" />
  <h1 class="w-[90%] m-auto text-center text-[36px] tracking-wide lg:pt-10">HANAKO IS BEST GIRL</h1>
  <p class="text-[#AAA] text-center text-[12px] font-bold tracking-wider w-[90%] m-auto pb-[50px] lg:pb-2">A website
    devoted to
    collecting images of the best girl in Katawa Shoujo</p>
  <nav v-if="screenSize > 768" class="flex flex-row gap-3 lg:gap-5 text-[14px] justify-center text-[#9C9C9C]">
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
  </nav>

  <div class="w-[95%] h-[300px] m-auto lg:mt-10">
    <RouterView />
  </div>
</template>

<style>
@font-face {
  font-family: brandon-grotesque;
  src: url('../public/fonts/Brandon_Grotesque.otf');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: Inter;
  src: url('../public/fonts/Inter.ttf');
  font-weight: 300;
  font-style: normal;
}

h1 {
  font-family: brandon-grotesque;
}

p,
ul,
li,
button {
  font-family: Inter;
  line-height: 1.8rem;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(209, 209, 209);
}

::-webkit-scrollbar-thumb {
  background: #6e5194
}

::-webkit-scrollbar-thumb:hover {
  background: #947d51;
}

.router-link-active {
  color: #6e5194;
  font-weight: bold;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Mobilerouter from './components/Mobilerouter.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const screenSize = ref(window.innerWidth);

const handleResize = () => {
  screenSize.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>