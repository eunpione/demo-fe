/* eslint-disable */
import { defineStore } from "pinia";
import APIURL from "@/api/axios";
import router from "@/router/index";

export const useBoardStore = defineStore("board", {
    state: () => ({
        boardTitle: "",
        boardContent: "",
        createdDate: "",
        changedDate: "",
        author: null,
        saveError: null,
        saveSuccess: false,
    }),

    actions: {
        async createBoard() {
            try {
                const boardRequestDto = {
                    title: this.boardTitle,
                    content: this.boardContent,
                    user
                };
            } catch { }
        },
    },
});
