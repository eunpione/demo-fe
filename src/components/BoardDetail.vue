<script setup>
/* eslint-disable */
// @ is an alias to /src
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/store/board";
import { getUser } from "../../storage";

const route = useRoute();
const router = useRouter();
const boardStore = useBoardStore();
const boardDto = ref(null);
const loginUser = getUser();
const loginUserName = loginUser ? loginUser.username : null;

async function fetchBoardDetail(boardId) {
  const response = await boardStore.getBoard(boardId);
  boardDto.value = response;
}

onMounted(() => {
  //최초 진입 시 1회만 실행
  fetchBoardDetail(route.params.id);
});

watch(
  () => route.params.id, // id가 변경되는 것 감지
  (newId) => {
    //파라미터 바뀔 때 반응하여 dom 다시 그림
    fetchBoardDetail(newId);
  }
);

async function deleteBoard(boardId) {
  const confirmed = confirm("정말 삭제하시겠습니까?");
  if (!confirmed) return;
  try {
    await boardStore.deleteBoard(boardId);
    alert("게시글이 삭제되었습니다.");
    router.replace("/board"); // 삭제 후 게시글 목록으로 이동 - 히스토리 없이
    //location.reload();
  } catch (error) {
    console.error("삭제 실패:", error);
    alert("삭제에 실패했습니다.");
  }
}
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
        <div class="d-flex justify-content-end mb-2">
          <button
            v-if="loginUserName === boardDto.authorUsername"
            class="btn btn-danger btn-sm"
            @click="deleteBoard(boardDto.id)"
          >
            삭제
          </button>
        </div>
        <h6 class="card-subtitle mb-2 text-muted text-end">
          작성자: {{ boardDto.authorUsername }}
        </h6>

        <p class="card-text mt-3 text-start" style="white-space: pre-line">
          {{ boardDto.content }}
        </p>

        <div class="mt-4 d-flex justify-content-end gap-2">
          <span class="badge bg-secondary me-2"
            >작성일: {{ boardDto.createdDate?.slice(0, 10) }}</span
          >
          <span class="badge bg-info text-dark"
            >수정일: {{ boardDto.changedDate?.slice(0, 10) }}</span
          >
        </div>
      </div>
    </div>

    <div v-else class="alert alert-info text-center mt-5">
      게시글을 불러오는 중입니다...
    </div>
  </div>
</template>