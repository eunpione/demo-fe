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
    saveError: null,
    saveSuccess: false,
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
  },
});
