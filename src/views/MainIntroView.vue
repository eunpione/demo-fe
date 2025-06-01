<template>
  <div class="MainIntro">
    <CommunityView msg="Mendix 개발 리뷰"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CommunityView from '@/components/CommunityView.vue'

export default {
  name: 'MainIntroView',
  components: {
    CommunityView,
  },
};
</script>
