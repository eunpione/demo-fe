<template>
  <div>
    <d>회원가입 컴포넌트</d>
  </div>
  <community-view></community-view>
</template>

<script>
// @ is an alias to /src
import CommunityView from "@/components/CommunityView.vue";

export default {
  name: "SignUpView",
  components: {
    CommunityView,
  },
};
</script>