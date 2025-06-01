<template>
  <div class="center">
    <header-nav></header-nav>
    <h1>{{msg}} 커뮤에 온 걸 환영해</h1>
    <footer-part></footer-part>
  </div>
</template>

<script>
import FooterPart from "./common/FooterPart.vue"
import HeaderNav from "./common/HeaderNav.vue";

export default {
  name: 'CommunityView',
  components: {FooterPart, HeaderNav},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
