<script setup>
/* eslint-disable */
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
</script>

<template>
  <header>
    <nav class="container">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">

        <div class="d-flex gap-3">
          <router-link :to="{ name: 'mainIntro' }" class="nav-link fw-bold">메인으로</router-link>
          <router-link :to="{ name: 'BoardList' }" class="nav-link">게시판</router-link>
        </div>

        <div v-if="!userStore.logined" class="d-flex gap-3">
          <router-link :to="{ name: 'signup' }" class="nav-link">회원가입</router-link>
          <router-link :to="{ name: 'login' }" class="nav-link">로그인</router-link>
        </div>

        <div v-else class="d-flex gap-3">
          <router-link :to="{ name: 'UserDetail' }" class="nav-link">마이페이지</router-link>
          <button @click="userStore.logout" class="btn btn-outline-secondary btn-sm">로그아웃</button>
        </div>

        <div v-if="userStore.role === 'admin'" class="d-flex gap-3">
          <router-link :to="{ name: 'UserList' }" class="nav-link text-danger">관리자</router-link>
        </div>
      </div>

      <hr/>
    </nav>
  </header>
</template>
