<template>
  <board-list>main</board-list>
   <header>
    <nav>
      <div>
        <router-link :to="{ name: 'mainIntro' }">
          <d>메인</d>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
// @ is an alias to /src
import BoardList from "@/components/BoardList.vue";

export default {
  name: "HeaderNav",
  components: {
    BoardList,
  },
};
</script>