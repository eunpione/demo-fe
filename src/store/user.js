/* eslint-disable */
import { defineStore } from 'pinia';
import APIURL from '@/api/axios';

export const useUserStore = defineStore('user',{
    state: () =>({
        username: '',
        password: '',
        email: '',
        signupError: null,
        signupSuccess: false,
    }),

    actions: {
        async signup(){
            try{
                //회원가입 시 사용자 입력 데이터
                const userRequestDto = {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                }
                //Post Method /user endpoint로 회원가입 요청
                const response = await APIURL.post('/user', userRequestDto)
                this.signupSuccess = true
                this.signupError = null
            }catch(error){
                this.signupError = error.response?.data?.message || '회원가입에 실패했습니다.'
                this.signupSuccess = false
            }
        },
        resetSignupState(){
            this.signupError = null,
            this.signupSuccess = false
        }
    }
})