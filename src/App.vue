<script setup>
/* eslint-disable */
import "@/assets/styles/main.css";
import { onMounted } from "vue";
import FooterPart from "./components/common/FooterPart.vue";
import HeaderNav from "./components/common/HeaderNav.vue";
import { useUserStore } from "./store/user";

const userStore = useUserStore();

onMounted(()=>{
  userStore.initUser();
})
</script>

<template>
  <header-nav />
  <router-view />
  <!--현재 router의 index.js 파일에 /경로가 mainIntroView에 연결되어 있음-->
  <footer-part />
</template>


