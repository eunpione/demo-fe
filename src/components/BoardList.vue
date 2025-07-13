<script setup>
/* eslint-disable */
// @ is an alias to /src
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useBoardStore } from "@/store/board";
import { getUser } from "../../storage";

const boardStore = useBoardStore();
const boardList = ref([]);
const filteredBoardList = ref([]);
const searchKeyword = ref("");
const route = useRoute();

async function getAllBoard() {
  const response = await boardStore.getAllBoard();
  boardList.value = response;
  console.log("게시글 전체 조회", response);
  filterBoardList();  
}

onMounted(() => {
  console.log("컴포넌트가 화면에 표시되었음");
  getAllBoard(); // 컴포넌트 마운트 시 조회
});

watch(
  () => route.fullPath, //fullpath가 변경되는 것 감지
  () => {
    getAllBoard();
  }
);

function filterBoardList() {
  const keyword = searchKeyword.value.trim().toLowerCase();

  if (keyword === "") {
    filteredBoardList.value = boardList.value;
  } else {
    filteredBoardList.value = boardList.value.filter((board) =>
      board.title.toLowerCase().includes(keyword)
    );
  }
}
const loginUser = getUser();
const loginUserName = loginUser ? loginUser.username : null;
</script>

<template>
  <div class="container my-4">
    <div class="d-flex justify-content-end mb-3">
      <input
        v-model="searchKeyword"
        @input="filterBoardList"
        type="text"
        class="form-control w-50 me-2"
        placeholder="게시글 제목을 검색하세요"
        />
      <router-link :to="{ name: 'BoardCreate' }">
        <button class="btn btn-primary">게시글 작성</button>
      </router-link>
    </div>
  </div>

  <div class="container my-4">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">순번</th>
          <th scope="col">게시글 제목</th>
          <th scope="col">작성자</th>
          <th scope="col">게시글 작성/수정일</th>
          <th scope="col">수정</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, idx) in filteredBoardList" :key="board.id">
          <th scope="row">{{ idx + 1 }}</th>
          <td>
            <router-link :to="{ name: 'BoardDetail', params: { id: board.id } }"
              >{{ board.title }}
            </router-link>
          </td>
          <td>{{ board.authorUsername }}</td>
          <td>
            {{
              board.changedDate?.slice(0, 10) || board.createdDate?.slice(0, 10)
            }}
          </td>
          <td>
            <button
              class="btn btn-info btn-sm"
              v-if="loginUserName === board.authorUsername"
            >
              <router-link
                :to="{
                  name: 'BoardUpdate',
                  params: { id: board.id },
                  state: { board },
                }"
                >수정
              </router-link>
            </button>
            <p v-if="loginUserName !== board.authorUsername">-</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <router-view></router-view>
  <!--뷰 라우터는 부모 라우트 컴포넌트 내부에 라우터 뷰가 존재해야만 자식 라우트 컴포넌트를 이 위치에 렌더링-->
</template>
