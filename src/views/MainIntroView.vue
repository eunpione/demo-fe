<script setup >
/* eslint-disable */
// @ is an alias to /src
import CommunityView from '@/components/CommunityView.vue'

// 아래와 같이 작성하지 않아도 components 옵션에 등록됨
// export default { 
//   name: 'MainIntroView',
//   components: {
//     CommunityView,
//   },
// };
</script>

<template>
  <div>
    <CommunityView msg="Mendix 에러로그"/>
  </div>
</template>

