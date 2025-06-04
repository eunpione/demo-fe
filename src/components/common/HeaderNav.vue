<template>
  <header>
    <nav>
      <hr />
      <div>
        <router-link :to="{ name: 'mainIntro' }">
          <d>메인으로 </d>
        </router-link>
        <div>
          <router-link :to="{ name: 'BoardList' }">
            <d>게시판 </d>
          </router-link>
        </div>

        <div>
          <router-link :to="{ name: 'signup' }">
            <d>회원가입 </d>
          </router-link>
          <router-link :to="{ name: 'login' }">
            <d>로그인 </d>
          </router-link>
          <router-link :to="{ name: 'UserDetail' }">
            <d>마이페이지 </d>
          </router-link>
          <router-link :to="{ name: 'logout' }">
            <d>로그아웃 </d>
          </router-link>
        </div>

        <div>
          <router-link :to="{ name: 'UserList' }">
            <d>관리자 </d>
          </router-link>
        </div>
      </div>
      <hr />
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
  components: {},
};
</script>