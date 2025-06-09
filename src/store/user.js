/* eslint-disable */
import { defineStore } from "pinia";
import APIURL from "@/api/axios";
import router from "@/router/index";
import { saveUser, getUser, removeUser } from "../../storage";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    password: "",
    email: "",
    role: "",
    signupError: null,
    signupSuccess: false,
    loginError: null,
    loginSuccess: false,
    logined: false,
    logoutError: null,
    logoutSuccess: false,
  }),

  actions: {
    // 브라우저 새로고침 시에도 로그인된 사용자 정보 담도록
    initUser() {
      const loginedUser = getUser();
      if (loginedUser && loginedUser.username) {
        this.username = loginedUser.username;
        this.role = loginedUser.role;
        this.logined = true;
      }
    },

    async signup() {

      try {
        //회원가입 시 사용자 입력 데이터
        const userRequestDto = {
          username: this.username,
          password: this.password,
          email: this.email,
          role: "user",
        };

        console.log("회원가입 요청:", userRequestDto);
        //Post Method api/user endpoint로 회원가입 요청
        const response = await APIURL.post(`api/user`, userRequestDto, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.signupSuccess = true;
        this.signupError = null;
        router.push("/");
      } catch (error) {
        this.signupError =
          error.response?.data?.message || "회원가입에 실패했습니다.";
        this.signupSuccess = false;
      }
    },

    resetSignupState() {
      this.signupError = null;
      this.signupSuccess = false;
    },

    async login() {
      try {
        //로그인 시 사용자 입력 데이터
        const loginRequestDto = {
          username: this.username,
          password: this.password,
        };

        console.log("로그인 요청:", loginRequestDto);

        //Post method / login endpoint 로 로그인 요청
        const response = await APIURL.post(`login`, loginRequestDto, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const userData = response.data;

        //userState 적용
        this.loginSuccess = true;
        this.loginError = null;
        this.logined = true;
        this.role = userData.role;

        const loginedUser = {
          username: this.username,
          role: userData.role,
        }

        saveUser(loginedUser); // 로컬스토리지에 저장

        router.push("/");
      } catch (error) {
        this.loginError = error.response?.data?.message || "아이디와 비밀번호를 확인해주세요.";
        this.loginSuccess = false;
      }
    },

    resetLoginState() {
      this.username = '';
      this.password = '';
      this.loginError = null;
      this.loginSuccess = false;
    },

    async logout() {
      try {
        console.log("로그아웃 시도: ", getUser());
        removeUser();
        this.logined = false;
        this.role = null;
        this.logoutError = null;
        this.logoutSuccess = true;
        this.resetLoginState()
        router.push("/logout");
      } catch (error) {
        this.logoutError = error.response?.data?.message || "로그아웃 중 오류가 발생했습니다."
        this.logoutSuccess = false;
      }
    },

    async getUserByUsername(username){
      //Get method / 현재 로그인된 사용자 정보 요청
      const response = await APIURL.get(`api/user/name/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const currentUser = response.data;
      console.log("현재 로그인한 사용자: ", currentUser);
      return currentUser;
    }
  },
});
