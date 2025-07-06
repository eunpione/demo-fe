/* eslint-disable */
import { defineStore } from "pinia";
import APIURL from "@/api/axios";
import router from "@/router/index";
import { getUser } from "../../storage";
import { useUserStore } from "@/store/user";

export const useBoardStore = defineStore("board", {
  state: () => ({
    Title: "",
    Content: "",
    createdDate: "",
    changedDate: "",
    author: null,
    authorName: "",
    saveError: null,
    saveSuccess: false,
    retrieveError: null,
    retrieveSuccess: null,
  }),

  actions: {
    async createBoard() {
      const userStore = useUserStore();
      try {
        const user = await userStore.getUserByUsername(getUser().username);

        if (!user || !user.id) {
          throw new Error("유효하지 않은 사용자 정보입니다.");
        }

        this.author = user;
        const boardRequestDto = {
          title: this.Title,
          content: this.Content,
          userId: this.author.id,
        };

        console.log("저장하고자 하는 게시글: ", boardRequestDto);

        const response = await APIURL.post(`api/board`, boardRequestDto, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        this.saveSuccess = true;
        this.saveError = null;
        router.push("/board"); //게시글 목록으로 이동
      } catch (error) {
        this.saveSuccess = false;
        this.saveError = error.message || "게시글 작성 중 오류가 발생했습니다.";
        console.error("게시글 작성 실패:", error);
      }
    },

    async getAllBoard() {
      try {
        console.log("게시글 전체조회 호출");

        const response = await APIURL.get(`api/boards`);
        const boardDtoList = response.data;

        boardDtoList.forEach((board) => {
          console.log("게시글 제목: ", board.title);
        });

        this.retrieveSuccess = true;
        this.retrieveError = null;

        return boardDtoList;
      } catch (error) {
        this.retrieveSuccess = false;
        this.retrieveError =
          error.message || "게시판 조회 중 오류가 발생했습니다.";
        console.error("게시글 조회 실패:", error);
        return [];
      }
    },

    async getBoard(boardId) {
      try {
        console.log("게시글 조회", boardId);

        const response = await APIURL.get(`api/board/${boardId}`);
        const boardDto = response.data;
        
        this.retrieveSuccess = true;
        this.retrieveError = null;

        return boardDto;

      } catch (error) {
        this.retrieveSuccess = false;
        this.retrieveError =
          error.message || "게시글 조회 중 오류가 발생했습니다.";
        console.error("게시글 조회 실패:", error);
        return [];
      }
    },

    async deleteBoard(boardId){

      try{
        console.log("게시글 삭제 id: ", boardId)

        const response = await APIURL.delete(`api/board/${boardId}`);
        const result = response.data;

        return result;
      }catch(error){
        console.error("게시글 삭제 실패:", error);
      }
      


    }
  },
});
