<script setup>
/* eslint-disable */
// @ is an alias to /src
import { onMounted } from "vue";
import { useBoardStore } from "@/store/board";

const boardStore = useBoardStore();
const boardDto = ref(null);
const isEditing = ref(false);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

async function getBoard() {
  const boardId = props.id;

  if(!boardId){
    console.error("게시글 ID가 없습니다.");
    return;
  }

  const response = await boardStore.getBoard(boardId);
  boardDto.value = response;
  console.log("게시글 조회", response);
}

// '수정' 버튼 클릭 시 호출될 함수
function startEditing() {
  isEditing.value = true;
}

// '저장' 버튼 클릭 시 호출될 함수
async function saveChanges() {
  const boardId = props.id;
  try {
    
    isEditing.value = false;
  } catch (error) {
    console.error("게시글 수정 실패:", error);

  }
}


onMounted(() => {
  console.log("boardId: ", props.id);
  getBoard
});
</script>

<template>
  <hr />
  <div>
    <p>게시글 상세 컴포넌트</p>
  </div>

  <div>
    <form>
      <div class="mb-3">
        <label for="FormControlTitle" class="form-label">게시글 제목</label>
        <input
          type="text"
          class="form-control"
          id="Title"
          placeholder="게시글 제목을 작성해주세요."
          v-model="boardStore.Title"
        />
      </div>
      <div class="mb-3">
        <label for="Content" class="form-label">게시글 본문</label>
        <textarea
          class="form-control"
          id="Content"
          placeholder="게시글을 작성해주세요."
          rows="5"
          v-model="boardStore.Content"
        ></textarea>
      </div>
    </form>
  </div>
</template>
