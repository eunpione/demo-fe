<template>
  <div>
    <d>게시글 작성 컴포넌트</d>
  </div>
  <community-view></community-view>
</template>

<script>
// @ is an alias to /src
import CommunityView from "@/components/CommunityView.vue";

export default {
  name: "BoardCreate",
  components: {
    CommunityView,
  },
};
</script>