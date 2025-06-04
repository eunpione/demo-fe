
<template>
  <div>
    <d>로그아웃 컴포넌트</d>
  </div>
  <community-view></community-view>
</template>
<script>
// @ is an alias to /src
import CommunityView from "@/components/CommunityView.vue";

export default {
  name: "LogoutView",
  components: {
    CommunityView,
  },
};
</script>