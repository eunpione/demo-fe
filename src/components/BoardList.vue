<template>
  <div>
    <d>게시글 목록 컴포넌트</d>
  </div>
  <community-view></community-view>
</template>

<script>
// @ is an alias to /src
import CommunityView from "@/components/CommunityView.vue";

export default {
  name: "BoardList",
  components: {
    CommunityView,
  },
};
</script>