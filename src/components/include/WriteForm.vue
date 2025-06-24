<script setup>
/* eslint-disable */
import { useBoardStore } from '@/store/board';

const boardStore = useBoardStore();


function saveBoard(){
  boardStore.createBoard();

  console.log('게시글 제목:', Title.value);
  console.log('게시글 내용:', Content.value);
}
</script>

<template>
  <div>
    <form @submit.prevent="saveBoard">
    <div class="mb-3">
      <label for="FormControlTitle" class="form-label"
        >게시글 제목</label
      >
      <input
        type="text"
        class="form-control"
        id="Title"
        placeholder="게시글 제목을 작성해주세요."
        v-model="boardStore.Title"
      />
    </div>
    <div class="mb-3">
      <label for="Content" class="form-label"
        >게시글 본문</label
      >
      <textarea
        class="form-control"
        id="Content"
        placeholder="게시글을 작성해주세요."
        rows="5"
        v-model="boardStore.Content"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">등록하기</button>
  </form>
  </div>
</template>

