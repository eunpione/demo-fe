<template>
  <div>
    <d>사용자 정보 컴포넌트</d>
  </div>
  <community-view></community-view>
</template>

<script>
// @ is an alias to /src
import CommunityView from "@/components/CommunityView.vue";

export default {
  name: "UserDetail",
  components: {
    CommunityView,
  },
};
</script>