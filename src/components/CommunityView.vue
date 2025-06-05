<script setup>
/* eslint-disable */
const props = defineProps({
  msg: String,
});
</script>


<template>
  <div class="center">
    <h1>{{ props.msg }} 커뮤니티</h1>
  </div>
</template>