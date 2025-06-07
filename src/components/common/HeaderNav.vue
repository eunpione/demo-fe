<script setup>
/* eslint-disable */

</script>

<template>
  <header>
    <nav>
      <hr />
      <div>
        <router-link :to="{ name: 'mainIntro' }">
          <p>메인으로 </p>
        </router-link>
        <div>
          <router-link :to="{ name: 'BoardList' }">
            <p>게시판 </p>
          </router-link>
        </div>

        <div>
          <router-link :to="{ name: 'signup' }">
            <p>회원가입 </p>
          </router-link>
          <router-link :to="{ name: 'login' }">
            <p>로그인 </p>
          </router-link>
          <router-link :to="{ name: 'UserDetail' }">
            <p>마이페이지 </p>
          </router-link>
          <router-link :to="{ name: 'logout' }">
            <p>로그아웃 </p>
          </router-link>
        </div>

        <div>
          <router-link :to="{ name: 'UserList' }">
            <p>관리자 </p>
          </router-link>
        </div>
      </div>
      <hr />
    </nav>
  </header>
</template>

