<template>
  <div class="center">
    <h1>Mendix 개발 리뷰 Community에 온 걸 환영해</h1>
    <b-col class="mb-3">
      <b-icon icon="bell" animation="throb" font-scale="4"></b-icon>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'CommunityView',
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
