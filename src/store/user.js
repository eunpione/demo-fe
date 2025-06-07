/* eslint-disable */
import { defineStore } from "pinia";
import APIURL from "@/api/axios";
import router from "@/router/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    password: "",
    email: "",
    role: "",
    signupError: null,
    signupSuccess: false,
  }),

  actions: {
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
        const response = await APIURL.post("api/user", userRequestDto, {
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
        try{
            //로그인 시 사용자 입력 데이터
            const loginRequestDto = {
                username: this.username,
                password: this.password,
            };

            console.log("로그인 요청:", loginRequestDto); 

            //Post method / login endpoint 로 로그인 요청
            const response = await APIURL.post("login", loginRequestDto,{
                headers:{
                    "Content-Type": "application/json",
                },
            });
            this.loginSuccess = true;
            this.loginError = null;
            router.push("/");
        }catch(error){
          this.loginError = error.response?.data?.message || "아이디와 비밀번호를 확인해주세요.";
          this.loginSuccess = false;
        }
    },
    resetLoginState(){
      this.username = '';
      this.password = '';
      this.loginError = null;
      this.loginSuccess = false;
    }
  },
});
