<script setup>
/* eslint-disable */
// @ is an alias to /src
import {useUserStore} from "@/store/user"

const userStore = useUserStore();

function submitSignup(){
  userStore.signup()
}
</script>


<template>
  <div>
    <d>회원가입 컴포넌트</d>
    <form @submit.prevent="submitSignup">
      <input v-model="userStore.username" placeholder="아이디" />
      <input
        v-model="userStore.password"
        type="password"
        placeholder="비밀번호"
      />
      <input v-model="userStore.email" placeholder="이메일" />
      <button type="submit">회원가입</button>
      <div v-if="userStore.signupError">{{ userStore.signupError }}</div>
      <div v-if="userStore.signupSuccess">정상적으로 회원가입되었습니다.</div>
    </form>
  </div>
</template>