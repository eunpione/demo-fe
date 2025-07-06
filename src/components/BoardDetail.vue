<script setup>
/* eslint-disable */
// @ is an alias to /src
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router';
import { useBoardStore } from "@/store/board";


const route = useRoute();
const boardStore = useBoardStore();
const boardDto = ref(null);

async function fetchBoardDetail(boardId) {
  const response = await boardStore.getBoard(boardId)
  boardDto.value = response
}

onMounted(()=>{ //최초 진입 시 1회만 실행
  fetchBoardDetail(route.params.id)
});

watch(() => route.params.id, (newId) => { //파라미터 바뀔 때 반응하여 dome 다시 그림
  fetchBoardDetail(newId)
})

</script>


<template>
  <hr />
  <div class="container mt-4">

    <div class="text-center mb-4">
      <h2 class="fw-bold">📄 게시글 상세</h2>
      <hr />
    </div>

    <div v-if="boardDto" class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title">{{ boardDto.title }}</h3>
        <h6 class="card-subtitle mb-2 text-muted text-end">
          작성자: {{ boardDto.authorUsername }}
        </h6>

        <p class="card-text mt-3">{{ boardDto.content }}</p>

        <div class="mt-4 d-flex justify-content-end gap-2">
          <span class="badge bg-secondary me-2">작성일: {{ boardDto.createdDate?.slice(0, 10) }}</span>
          <span class="badge bg-info text-dark">수정일: {{ boardDto.changedDate?.slice(0, 10) }}</span>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-info text-center mt-5">
      게시글을 불러오는 중입니다...
    </div>
  </div>
</template>