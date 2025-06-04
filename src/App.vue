<template>
  <header-nav />
  <router-view />
  <!--현재 router의 index.js 파일에 /경로가 mainIntroView에 연결되어 있음-->
  <footer-part />
</template>


<script setup>
import "@/assets/styles/main.css";
import FooterPart from "./components/common/FooterPart.vue";
import HeaderNav from "./components/common/HeaderNav.vue";
</script>