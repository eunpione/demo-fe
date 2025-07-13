<script setup>
/* eslint-disable */
import { useBoardStore } from "@/store/board";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const boardStore = useBoardStore();
const route = useRoute();

onMounted(() => {
  const boardId = route.params.id;
  if (boardId) {
    fetchBoardDetail(boardId);
 }
});

// 게시글 데이터를 불러와 store에 저장
async function fetchBoardDetail(boardId) {
  const response = await boardStore.getBoard(boardId);
  console.log("수정 중 객체: ", response);


  boardStore.title = response.title;
  boardStore.content = response.content;
  boardStore.id = response.id; // 수정 시 ID 필요
}

watch(
  () => route.params.id, // id가 변경되는 것 감지
  (newId) => {
    //파라미터 바뀔 때 반응하여 dom 다시 그림
    fetchBoardDetail(newId);
  }
);

function updateBoard() {
  boardStore.updateBoard();

  console.log("게시글 수정 제목:", boardStore.title);
  console.log("게시글 수정 내용:", boardStore.content);
  alert("게시글이 수정되었습니다.");
}
</script>

<template>
  <div class="container my-4">
    <form @submit.prevent="updateBoard">
      <div class="mb-3">
        <label for="FormControlTitle" class="form-label"
          ><h4>게시글 제목 수정</h4></label
        >
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="게시글 제목을 작성해주세요."
          v-model="boardStore.title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label"
          ><h4>게시글 본문 수정</h4></label
        >
        <textarea
          class="form-control"
          id="content"
          placeholder="게시글을 작성해주세요."
          rows="5"
          v-model="boardStore.content"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">수정하기</button>
    </form>
  </div>
</template>

