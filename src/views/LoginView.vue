<script setup>
/* eslint-disable */
// @ is an alias to /src
import CommunityView from "@/components/CommunityView.vue";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();

function submitLogin(){
  userStore.login()
}
</script>

<template>
  <div>
    <p>로그인 컴포넌트</p>
    <form @submit.prevent="submitLogin" >
      <input v-model="userStore.username" placeholder ="아이디" autocomplete="username"/>
      <input v-model="userStore.password" type="password" placeholder= "비밀번호" autocomplete="current-password"/>
      <button type="submit">로그인</button>
      <div v-if="userStore.loginError">{{ userStore.loginError }}</div>
      <div v-if="userStore.loginSuccess">로그인되었습니다.</div>
    </form>   
  </div>
  <community-view></community-view>
</template>

